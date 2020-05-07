const scenarios = require("../test/scenarios.js");
const viewports = require("../test/viewports.js");

module.exports = {
  id: "backstop_example",

  viewports: viewports,

  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",

  scenarios: scenarios,

  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },

  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },

  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
