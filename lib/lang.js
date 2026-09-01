"use strict";

const fs = require("fs");
const path = require("path");

const language = process.env.BOT_LANG || "en";
const defaultPath = path.join(__dirname, "..", "lang", "en.json");
const selectedPath = path.join(__dirname, "..", "lang", `${language}.json`);

module.exports = fs.existsSync(selectedPath)
  ? require(selectedPath)
  : require(defaultPath);
