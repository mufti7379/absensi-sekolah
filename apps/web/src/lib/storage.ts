/**
 * Wrapper localStorage yang aman - beberapa browser (mode privat, kiosk
 * terkunci, storage penuh) bisa melempar error saat localStorage diakses.
 * Selalu bungkus try/catch supaya aplikasi tidak crash gara-gara ini.
 */
export function readStorage<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

export function writeStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // diamkan - kegagalan persist tidak boleh menghentikan alur aplikasi
  }
}

export function removeStorage(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    // diamkan
  }
}
