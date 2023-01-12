import * as vscode from 'vscode';

export class Partner implements vscode.TreeDataProvider<Dependency> {
    // constructor(private workspaceRoot: string) {}
    constructor() {}

    getTreeItem(element: Dependency): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return element;
    }

    getChildren(element?: Dependency): vscode.ProviderResult<Dependency[]> {
        // if (!this.workspaceRoot) {
        //     vscode.window.showInformationMessage('No dependency in empty workspace');
        //     return Promise.resolve([]);
        // }
        
        if (element) {
            vscode.window.showInformationMessage("???");
        }
        return Promise.resolve([]);
    }
}

class Dependency extends vscode.TreeItem {

}