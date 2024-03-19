const path = require("path");

// TODO: For now just do a global lint, but we should only lint the files that have been changed
const buildEslintCommand = (filenames) => `turbo lint -- --fix`;

module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", buildEslintCommand],
};
