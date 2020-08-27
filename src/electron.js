const {app, BrowserWindow, BrowserView}  = require("electron")
const path =  require('path')
const isDev = require('electron-is-dev')


let win;

function createWindow(){
    win = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        }
    });
    win.maximize();
    // win.loadFile('index.html')
    win.loadURL(
        isDev? 'http://localhost:3000':
        `file://${path.join(__dirname, '../build/index.html')}`
    )
    // win.webContents.openDevTools()

    win.on('closed',()=>{
        win = null
    });

}
app.on('ready', createWindow);
app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', ()=>{
    if(win === null){
        createWindow()
    }
})