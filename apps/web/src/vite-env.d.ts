/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
  readonly VITE_UPLOAD_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
