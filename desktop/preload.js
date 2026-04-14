import { createTitlebarOnDOMContentLoaded } from "custom-electron-titlebar";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  hello: (name) => ipcRenderer.invoke("hello:greet", name),
});

createTitlebarOnDOMContentLoaded();
