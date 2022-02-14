/**
 *  包装api菜单配置
 * @returns
 */
module.exports.genApiConfig = () => {
  const siderBarConfig = require('../develop/api/config');
  return {
    linkConst: '/develop/api/',
    nav: {
      text: 'API文档',
      link: '/develop/api/',
    },
    sidebar: {
      '/develop/api/': [
        '',
        ...siderBarConfig.map(item => ({
          ...item,
          collapsable: true,
          sidebarDepth: 1,
        })),
      ],
    },
  };
};
