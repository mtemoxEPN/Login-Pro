module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          config: "./tamagui.config.ts",
          components: [
            "tamagui",
            "@tamagui/core",
            "@tamagui/button",
            "@tamagui/card",
            "@tamagui/dialog",
            "@tamagui/sheet",
            "@tamagui/stacks",
            "@tamagui/text",
            "@tamagui/input",
          ],
        },
      ],
      ["module-resolver", { root: ["./src"], alias: { "@": "./src" } }],
      ["react-native-reanimated/plugin"],
    ],
  };
};