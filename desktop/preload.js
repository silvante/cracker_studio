import { createTitlebarOnDOMContentLoaded } from "custom-electron-titlebar";
import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
  ping: () => "pong from electron",
});

createTitlebarOnDOMContentLoaded();
