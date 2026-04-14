export {};

export interface ElectronAPI {
  hello: (name: string) => string;
}

declare global {
  interface Window {
    api: ElectronAPI;
  }
}
