<template>
  <div class="qrcode">
    <div class="title top">手机QQ扫码</div>
    <img src="https://mpqq.gtimg.cn/privacy/qq_guild_developer_doc.png"
         alt="开发者社区" />
    <div class="title bottom">加入官方频道开发者社区</div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style>
.qrcode {
  position: fixed;
  z-index: 19;
  top: 300px;
  right: 35px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f7f7f7;
}
.qrcode img {
  width: 200px;
  height: 200px;
}
.qrcode .title {
  font-size: 17px;
  text-align: center;
  font-weight: bold;
}
.qrcode .title.top {
  margin-bottom: 2px;
}
.qrcode .title.bottom {
  margin-top: 2px;
}

@media only screen and (max-width: 1440px) {
  .qrcode {
    display: none;
  }
}
</style>
