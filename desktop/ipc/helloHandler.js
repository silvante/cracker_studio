const { ipcMain } = require("electron");

module.exports = function RegsiterHelloHandlers() {
  ipcMain.handle("hello:greet", async (event, name) => {
    return `hello, ${name}!`;
  });
};
