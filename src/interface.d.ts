export interface IElectronAPI {
  submitButton: (path:string) => Promise<string>,
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
