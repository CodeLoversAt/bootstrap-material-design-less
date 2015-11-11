This is just a wrapper for [FezVrasta's bootstrap-material-design theme](https://github.com/fezvrasta/bootstrap-material-design/) to enable the use of LESS source files instead of the precompiled CSS files.

Please refer to [https://github.com/fezvrasta/bootstrap-material-design/](https://github.com/fezvrasta/bootstrap-material-design/) for detailed documentation.

## Usage

1. Install it: `meteor add less codelovers:codelovers:bootstrap-material-design-less`
    (notice that you'll need to add `less` as a direct dependency of your project too) 
2. create a LESS file and import the styles you want

```less
// client/stylesheets/style.less
@ import '{codelovers:bootstrap-material-design-less}/less/material.less';
// @ import '{codelovers:bootstrap-material-design-less}/less/material-fullpalete.less';
@ import '{codelovers:bootstrap-material-design-less}/less/roboto.less';
@ import '{codelovers:bootstrap-material-design-less}/less/ripples.less';
```
