import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const commonConfig = require('./common');

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(Element);
  const isProd = process.env.NODE_ENV === 'production';
  Vue.prototype.$withBotBase = function (path) {
    if (path.charAt(0) === '/') {
      path = path.slice(1);
    }
    return (isProd ? commonConfig.cdnBase + commonConfig.cdnPath : siteData.base) + path;
  };
};
