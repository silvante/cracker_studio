import { setupTitlebarAndAttachToWindow } from "custom-electron-titlebar/main";
import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
import RegisterAllFunctions from "./ipc/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,

    titleBarStyle: "hidden",
    frame: false,
    titleBarOverlay: true,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  win.loadURL("http://localhost:5173");

  // attaching a title bar
  setupTitlebarAndAttachToWindow(win, {
    themeConfigPath: path.join(__dirname, "titlebar.theme.json"),
  });
}

RegisterAllFunctions();

app.whenReady().then(createWindow);
