// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Partner } from './partner';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "partner" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let helloWorld = vscode.commands.registerCommand('partner.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Tony!');
	});

	context.subscriptions.push(helloWorld);

	let helloTony = vscode.commands.registerCommand('partner.helloTony', () => {
		vscode.window.showInformationMessage('Hello Tony from VS Code!');
	}
	);
	context.subscriptions.push(helloTony);

	vscode.window.registerTreeDataProvider('partner', new Partner());
	vscode.window.createTreeView('partner', { treeDataProvider: new Partner() });
}

// This method is called when your extension is deactivated
export function deactivate() {}
