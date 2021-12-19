<template>
  <a class="npm-badge"
     :href="badgeLink"
     :title="packageName"
     target="_blank"
     rel="noopener noreferrer">
    <img :src="badgeImg"
         class="disable-zooming"
         :alt="packageName" />
  </a>
</template>

<script>
export default {
  props: {
    packageName: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeLink() {
      return `https://www.npmjs.com/package/${this.packageName}`;
    },
    badgeImg() {
      return `https://badgen.net/npm/v/${this.packageName}`;
    },
  },
};
</script>

<style scoped>
.npm-badge {
  display: block;
  margin-right: 0.5rem;
  margin-top: 1.5rem;
}
</style>