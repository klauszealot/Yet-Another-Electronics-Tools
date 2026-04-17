const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'icon.ico'), // Opsional: Tambahkan icon jika ada
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        },
        // Menghilangkan menu bar standar untuk tampilan lebih bersih
        autoHideMenuBar: true,
        titleBarStyle: 'hiddenInset' // Untuk tampilan macOS style jika diinginkan
    });

    win.loadFile('index.html');
    
    // Opsional: Buka DevTools saat development
    // win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
