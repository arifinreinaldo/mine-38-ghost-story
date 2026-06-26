import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach } from 'vitest'

// Unmount React trees and reset persisted state between tests.
afterEach(() => cleanup())
beforeEach(() => {
  try { localStorage.clear() } catch { /* ignore */ }
})
