const electron = require('electron');
const ipc = electron.ipcMain
const PouchDB = require('pouchdb');
const session = require('electron').session;

// Module to control application life.
const {app} = electron
// Module to create native browser window.
const {BrowserWindow} = electron;

var db = new PouchDB('./db/targetDB');

require('./db/seed.js');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

var util = require('util');

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': 600,
    'min-height': 300,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden',
    'webPreferences': {'session': session},
    show: false
    });
    //loading window gracefully
    win.once('ready-to-show', () => {
        win.maximize();
        // Open the DevTools.
        win.webContents.openDevTools();
        win.show();
    });



    // Open the DevTools.
    //win.webContents.openDevTools();


    // and load the index.html of the app.
    win.loadURL(`file:${__dirname}/app/views/index.html`);

    // Emitted when the window is closed.
    win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
    exportWindow = null;
    });

/*    exportWindow = new BrowserWindow({
    width: 500,
    height: 800,
    show: false
    });
    exportWindow.loadURL(`file:${__dirname}/assets/settings.html`);
    exportWindow.openDevTools();
    exportWindow.on('closed', () => {
    exportWindow = null;
    });

    settingsWindow = new BrowserWindow({
        width: 400,
        height: 400,
        show: false
    })
    settingsWindow.loadURL(`file:${__dirname}/assets/settings.html`);

    ipc.on('show-settings', function(){
        settingsWindow.show()
    });*/
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit();
    }
});

ipc.on('synchronous-message', function (event, arg) {
    db.close();
    win.loadURL(`file:${__dirname}/app/views/index.html`);
    event.returnValue = 'pong';
});
/*
ipc.on('show-import-window', function () {
    exportWindow.show();
});*/

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
    createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
