declare global {
  interface Window {
    pywebview?: {
      api: {
        [key: string]: any
      }
    }
  }
}

export {}
