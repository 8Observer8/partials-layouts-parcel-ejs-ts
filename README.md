Install globally:

> npm i -g browserify nodemon parcel typescript uglify-js

Install locally:

> npm i

Run a server:

> nodemon

Run in debug mode:

> npm run dev

Run in release mode:

> npm run release

EJS formatting, highlighting and snippets for VSCode:

- Install the extension: [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
- Install the extension: [EJS Beautify](https://marketplace.visualstudio.com/items?itemName=j69.ejs-beautify)
- Edit the `settings.json` file ("File" > "Preferences" > "Settings" > "Open Settings (JSON)"):

```
"[html]": {
    "editor.defaultFormatter": "j69.ejs-beautify"
}
```

- Use Alt+Shift+F to format the code
- You can edit the ".ejsbrc.json" file in the workspace, for example, to change the `indent_size`
- Use snippets like: `ejs`, `ejsif`, `ejsfor` and so on.
