<template>
  <SWUpdatePopup v-slot="{  reload, message, buttonText }">
    <div v-if="false"
         class="my-sw-update-popup">
      <p>{{ message }}</p>
      <el-button @click="reload"
                 type="text"
                 size="large">
        {{ buttonText }}
      </el-button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue';

export default {
  components: { SWUpdatePopup },
};
</script>

<style>
.my-sw-update-popup {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 20px;
  height: 30px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #3eb07c;
  text-align: center;
  box-shadow: 1px 1px 1px #3eb07c;
  right: 20px;
  top: 13%;
  color: #3eb07c;
  width: 180px;
  font-size: 16px;
}
</style>