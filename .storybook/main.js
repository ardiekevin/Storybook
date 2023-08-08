module.exports = {
  "stories": [
    "../projects/intsight-ui/src/components/**/*.stories.mdx",
    "../projects/intsight-ui/src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "angularOptions": {
    enableIvy: false,
  },
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ['../projects/intsight-ui/public'],
}
