# 安全和授权

开发者需要对每一次回调请求，根据回调中的签名等信息验证请求者身份，避免安全隐患。目前签名算法使用Ed25519。

## 安全凭证

开发者平台的 Bot Secret 用于加密签名字符串和服务器端验证签名字符串的密钥。用户必须严格保管安全凭证，避免泄露。

## 验证签名

### 1. 签名验证参数

| 字段名                 | 说明               | 参考值           |
| --------------------- | ----------------- | ---------------  |
| X-Signature-Ed25519   | HTTP Header 中透传 Signature   |  3ecd***（64字节） |
| X-Signature-Timestamp | HTTP Header 透传的签名时间戳     |  1636373772      |
| HTTP Body             | HTTP 请求中 Body 值    |  {"msg":"hello"}    |

### 2. 验证签名过程

以下代码以Go语言为例,引用 `crypto/ed25519` 包实现 `Ed25519` 算法

- 根据开发者平台的 Bot Secret 值进行repeat操作得到签名32字节的 seed ,根据 seed 调用 Ed25519 算法生成32字节公钥

```go
  // 根据botSecret进行repeat操作后得到seed值计算出公钥
  seed := botSecret
  for len(seed) < ed25519.SeedSize {
    seed = strings.Repeat(seed, 2)
  }
  rand := strings.NewReader(seed[:ed25519.SeedSize])
  publicKey, _, err := ed25519.GenerateKey(rand)
```

- 获取 HTTP Header 中 X-Signature-Ed25519 的值进行 hec (十六进制解码)操作后的得到 Signature 并进行校验

```go
  // 取HTTP header中X-Signature-Ed25519(进行hex解码)并校验 
  signature := req.Header.Get("X-Signature-Ed25519")
  if signature == "" {
    return false
  }
  sig, err := hex.DecodeString(signature)
  if err != nil {
    return false
  }
  if len(sig) != ed25519.SignatureSize || sig[63]&224 != 0 {
    return false
  }
```

- 获取 HTTP Header 中 X-Signature-Timestamp 的和 HTTP Body 的值按照 timestamp+body 顺序进行组合成签名体msg

```go
    // 取HTTP header中 X-Signature-Timestamp 并校验
  timestamp := req.Header.Get("X-Signature-Timestamp")
  if timestamp == "" {
    return false
  }
  // 按照timstamp+Body顺序组成签名体
  var msg bytes.Buffer
  msg.WriteString(timestamp)
  var body bytes.Buffer
  // copy body into buffers
   _, err = io.Copy(&msg, io.TeeReader(r.Body, &body))
  if err != nil {
    return false
  }
```

- 根据公钥、Signature、签名体调用 Ed25519 算法进行验证

```go
 ed25519.Verify(publicKey, msg.Bytes(), sig)
```
