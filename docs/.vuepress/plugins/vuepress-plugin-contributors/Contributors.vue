<template>
  <div class="contributors" v-show="isShow && this.contributors.length">
    <span>{{ label }}</span>
    <a
      v-for="{ username, id } in contributors"
      :key="id"
      :href="`https://github.com/${username}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="`https://avatars.githubusercontent.com/u/${id}?s=90`"
        :alt="username"
        :title="username"
      />
    </a>
  </div>
</template>

<script>
import request from 'umi-request'

export default {
  name: 'Contributors',
  data: () => ({
    contributors: [],
  }),
  computed: {
    label() {
      return (
        this.$themeLocaleConfig.contributorsLabel ||
        this.$page.contributors.label ||
        'Contributors'
      )
    },
    isShow() {
      return this.getIsShow()
    },
  },
  methods: {
    getIsShow() {
      const { disableRoutes } = this.$page.contributors
      const { path } = this.$page
      const isShow = !disableRoutes.some((r) => path.includes(r))
      // console.log({ isShow, path, disableRoutes })
      return isShow
    },
  },
  watch: {
    $route: {
      handler({ path }, prev) {
        if (
          typeof window === 'undefined' ||
          (prev && path === prev.path) ||
          !this.getIsShow()
        )
          return
        this.contributors.length = 0

        const { docsRepo, docsBranch, docsDir, api } = this.$page.contributors
        const [user, repo] = docsRepo.split('/')

        request
          .get(api || 'https://api.xuann.wang/api/github-file-contributors', {
            params: {
              user,
              repo,
              tree: docsBranch,
              path: `${docsDir ? `${docsDir}/` : ''}${this.$page.relativePath}`,
            },
          })
          .then((data) => {
            this.contributors = data
          })
          .catch(function (error) {
            console.log('request contributors error:', error.message)
          })
      },
      immediate: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.contributors
  max-width: 740px
  margin: 0 auto
  padding: .75rem 2.5rem

  @media (max-width: 959px)
    &
      padding: .75rem 2rem

  @media (max-width: 419px)
    &
      padding: .75rem 1.5rem

  span,
  img
    margin-right: .5rem
    
  span
    display: inline-block
    transform: translateY(-.5rem)
    color: lighten($textColor, 25%)
    font-weight: 500

  img
    width: 2rem
    border-radius: 100%
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px
</style>
