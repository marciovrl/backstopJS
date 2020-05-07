const basicTestSettings = {
  readyEvent: "",
  readySelector: "",
  delay: 0,
  hideSelectors: [],
  removeSelectors: [],
  hoverSelector: "",
  clickSelector: "",
  postInteractionWait: 0,
  selectors: [],
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 0.5,
  requireSameDimensions: true,
};

const home = {
  label: "Homepage Google",
  cookiePath: "backstop_data/engine_scripts/cookies.json",
  url: "https://www.google.com/",
  // referenceUrl: "https://www.google.com/",
};

const searchItem = {
  label: "search item Google",
  cookiePath: "backstop_data/engine_scripts/cookies.json",
  url: "https://www.google.com/",
  keyPressSelectors: [
    { selector: "[name='q']", keyPress: "marcio lemos linkedin" },
  ],
  clickSelectors: ["[name='btnK']"],
};

const scenarios = [home, searchItem];

function addBasicTestSettings(scenarios) {
  return scenarios.map((scenario) => {
    return { ...scenario, ...basicTestSettings };
  });
}

module.exports = addBasicTestSettings(scenarios);
