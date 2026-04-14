import { ipcMain } from "electron";

function RegsiterHelloHandlers() {
  ipcMain.handle("hello:greet", async (event, name) => {
    return `hello, ${name}!`;
  });
}

export default RegsiterHelloHandlers;
