// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

// https://htmlcolorcodes.com/colors/
// https://colorpeek.com/#394156,395645,563939,503956
const colours = [
	// "#6495ED", // Cornflower Blue
	"#6F8FAF", // Denim
	"#5D3FD3", // Iris

	"#6E260E", // Burnt Umber

	"#454B1B", // Army Green
	"#097969", // Cadmium Green
	"#5F8575", // Eucalyptus

	"#9F2B68", // Amaranth
	"#702963", // Byzantium

	"#8B8000", // Dark Yellow
];

// Taken from https://gist.github.com/hyamamoto/fd435505d29ebfa3d9716fd2be8d42f0?permalink_comment_id=2694461#gistcomment-2694461
function hashCode(s: string) {
    for(var i = 0, h = 0; i < s.length; i++) {
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
	}
    return h;
}

export function activate(context: vscode.ExtensionContext) {
	// console.log('Congratulations, your extension "titlebar-colour" is now active!');
	
	const workspaceName = vscode.workspace.name || 'unknown';
	let workspaceRoot = 'unknown';
	if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0]) {
		workspaceRoot = vscode.workspace.workspaceFolders[0].uri.toString();
	}
	const key = `${workspaceName}|${workspaceRoot}`;
	let h = hashCode(key);
	if (h < 0) {
		h = -h;
	}
	// Just using lower bits results in same colour for similar paths,
	// so drop them.
	h = h >> 8;

	const newColourIndex = h % colours.length;
	const newColour = colours[newColourIndex];
	const newColours = {
		"titleBar.activeBackground": newColour,
		"titleBar.inactiveBackground": newColour,
		"window.activeBorder": newColour,
		"window.inactiveBorder": newColour,
	};
	
	console.log(`Setting titlebar colours for workspace ${vscode.workspace.name} to ${newColour} [idx:${newColourIndex} h:${h}]`);
	let cc = JSON.parse(JSON.stringify(
		vscode.workspace.getConfiguration('workbench').get('colorCustomizations')
	));
	cc = vscode.workspace.getConfiguration('workbench').update(
		'colorCustomizations',
		{ ...cc, ...newColours },
		false
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
