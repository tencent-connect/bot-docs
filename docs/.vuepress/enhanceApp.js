import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const commonConfig = require('./common');

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(Element);
  const isProd = process.env.NODE_ENV === 'production';
  // 中文跳转转码且英文大写转小写（元素的 ID 属性值是小写字母）
  Vue.mixin({
    methods: {
      hashChange () {
        router.onReady(() => {
          setTimeout(() => {
            const { hash } = document.location;
              if (hash.length > 1) {
                const id = decodeURIComponent(hash.substring(1)).replace(/[A-Z]/g, (match) => {
                  return String.fromCharCode(match.charCodeAt(0) + 32)
                });
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
              }
          }, 500);
        });
      }
    },
    mounted () {
      this.hashChange();
      window.addEventListener('hashchange', () => this.hashChange());
    }
  });

  Vue.prototype.$withBotBase = function (path) {
    if (path.charAt(0) === '/') {
      path = path.slice(1);
    }
    return (isProd ? commonConfig.cdnBase + commonConfig.cdnPath : siteData.base) + path;
  };
};
