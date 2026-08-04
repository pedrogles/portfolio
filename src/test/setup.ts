import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: vi.fn().mockImplementation((query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(() => true),
  })),
})

Object.defineProperty(window, 'scrollTo', {
  configurable: true,
  value: vi.fn(),
})

Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  configurable: true,
  value: vi.fn(),
})

Object.defineProperty(window, 'requestAnimationFrame', {
  configurable: true,
  value: (callback: FrameRequestCallback) => window.setTimeout(() => callback(performance.now()), 0),
})

Object.defineProperty(window, 'cancelAnimationFrame', {
  configurable: true,
  value: (id: number) => window.clearTimeout(id),
})

afterEach(() => {
  cleanup()
  document.head.querySelectorAll('meta, link[rel="canonical"], script[type="application/ld+json"]').forEach((element) => element.remove())
  document.title = ''
  document.body.classList.remove('navigation-open')
})
