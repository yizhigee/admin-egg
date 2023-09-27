/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1694770840457_7505';

  // add your middleware config here
  config.middleware = [];
  // 关闭CSRF安全策略
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // mysql
  config.mysql = {
    app: true, //是否加载到 app 上，默认开启
    agent: false, //是否加载到 agent 上，默认关闭
    client: {
      host: '43.136.99.5', //数据库
      prot: '3306', // 端口号
      user: 'root', // 用户名
      password: 'gbb0312', // 密码
      database: 'my_website', // 数据库名
      // database: 'go_view', // 数据库名
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
