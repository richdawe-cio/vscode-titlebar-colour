# titlebar-colour

A VSCode extension that ensures that each VSCode window has a titlebar with a different colour.

## Downloading a Bundle

You can download releases of the extension from the [Releases page](https://github.com/richdawe-cio/vscode-titlebar-colour/releases). Download the `.vsix` file for a release.

If you want to build the bundle from source, please see a later section.

## Installing a Bundle

"
For users, to install a .vsix file in VS Code:

1. Go to the Extensions view.
2. Click Views and More Actions...
3. Select Install from VSIX...
"

On VSCode on macOS, you have to click on the breadcrumbs (...) in the top-right of the Extensions pane, in order to see the "Install from VSIX..." option.

## Building a Bundle

See [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) for more information about building and publishing bundles.

If you're running on Ubuntu, **do not use the snap packaging for node**. It does not work properly with `vsce`. Instead, I recommend installing node using [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

To generate a bundle (`.vsix` file) that you can install into VSCode locally, run the following command:

```bash
npx vsce package
```

This will build a file with a name like `titlebar-colour-0.0.9.vsix`.
