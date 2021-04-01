module.exports = {
  devServer: {
    // **/dataworks/parseJson/format/json**
    proxy: {
      "/adxApi": {
        target: "http://10.107.211.239:8089",
        changeOrigin: true,
        pathRewrite: {
          "^/adxApi": "",
        },
      },
    },
    host: "0.0.0.0", // can be overwritten by process.env.HOST
    port: 9000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  },
};
