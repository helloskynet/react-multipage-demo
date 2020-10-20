const CracoPluginMultipage = require("craco-plugin-multipage");

module.exports = {
  plugins: [
    {
      plugin: CracoPluginMultipage,
      options: {
        htmlOutputDir: "pages",
        pageTitle: {
          page1: "1号页面",
          "page3/page4": "3号页面",
        },
        defaultTitle: "多页面title",
        // pages: "page1,page3/page4",
        HtmlWebpackPluginOptions: (config) => config,
      },
    },
  ],
};
