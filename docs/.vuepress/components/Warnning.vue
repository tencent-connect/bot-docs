<template>
  <div class="custom-block danger">
    <p class="custom-block-title">注意</p>
    <ul>
      <li>公域机器人暂不支持申请，仅私域机器人可用，私域机器人开发者请发邮件<a href="mailto:QQ_Bot@tencent.com">QQ_Bot@tencent.com</a>申请开通。
        注意:开通后需要先将机器人从频道移除，然后重新添加，方可生效。</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      warnning: ``,
    };
  },
};
</script>
<style>
.version {
  margin-top: 20px;
}
</style>
