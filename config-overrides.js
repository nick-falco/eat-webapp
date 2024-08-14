// override the default webpack configuration

module.exports = {
    webpack: function(config, env) {
        // ...add your webpack config
        return config;
    },
    devServer: (configFunction) => {
        return (proxy, allowedHost) => {
          const config = configFunction(proxy, allowedHost);
          config.allowedHosts = ["all"];
          return config;
        };
      }
};