// package metadata file for Meteor.js
"use strict";

var options = {
  "version": "0.3.1-dev",
  "packageName": "codelovers:bootstrap-material-design-less",
  "where": "client"
};

Package.describe({
  name: options.packageName,
  summary: "LESS version of FezVrasta\"s Bootstrap theme implementing Google\"s Material (Paper) Design",
  version: "0.3.1-dev",
  git: "https://github.com/fezvrasta/bootstrap-material-design.git",
  documentation: "README.md"
});

var assets = [
  "less/_alerts.less",
  "less/_buttons.less",
  "less/_cards.less",
  "less/_checkboxes.less",
  "less/_colors.less",
  "less/_dialogs.less",
  "less/_dividers.less",
  "less/_icons.less",
  "less/_icons-material-design.less",
  "less/_inputs.less",
  "less/_labels.less",
  "less/_lists.less",
  "less/_material.less",
  "less/_mixins.less",
  "less/_mixins-fullpalette.less",
  "less/_navbar.less",
  "less/_panels.less",
  "less/_plugin-dropdownjs.less",
  "less/_plugin-nouislider.less",
  "less/_plugin-selectize.less",
  "less/_plugin-snackbarjs.less",
  "less/_popups.less",
  "less/_progress.less",
  "less/_radios.less",
  "less/_shadows.less",
  "less/_tabs.less",
  "less/_togglebutton.less",
  "less/_variables.less",
  "less/_welljumbo.less",
  "less/material.less",
  "less/material-fullpalette.less",
  "less/ripples.less",
  "less/roboto.less"
];

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2");
  api.use("twbs:bootstrap@3.3.1");
  api.use("jquery");
  api.use("less");
  api.addAssets([
    // we bundle all font files, but the client will request only one of them via the CSS @font-face rule
    "dist/fonts/Material-Design-Icons.eot",  // IE8 or older
    "dist/fonts/Material-Design-Icons.svg",  // SVG fallback for iOS < 5 - http://caniuse.com/#feat=svg-fonts, http://stackoverflow.com/a/11002874/126903
    "dist/fonts/Material-Design-Icons.ttf",  // Android Browers 4.1, 4.3 - http://caniuse.com/#feat=ttf
    "dist/fonts/Material-Design-Icons.woff", // Supported by all modern browsers
  ], options.where);
  api.addFiles([
    "dist/js/material.js",
    "dist/js/ripples.js",
    "meteor/init.js"
  ], options.where);

  // add LESS files
  api.addFiles(assets, options.where, {isImport: true});
});

Package.onTest(function (api) {
  api.use(options.packageName, options.where);
  api.use(["tinytest", "http"], options.where);

  api.addFiles("meteor/test.js", options.where);
});
