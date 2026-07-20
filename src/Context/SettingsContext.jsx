import React, { createContext, useContext, useEffect, useState } from 'react'

const SettingsContext = createContext(null)

const STORAGE_KEYS = {
  theme: 'settings:theme',
  animationIntensity: 'settings:animationIntensity',
  hoverSfx: 'settings:hoverSfx',
}

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme)
  return stored === 'alt' ? 'alt' : 'default'
}

function getInitialAnimationIntensity() {
  const stored = localStorage.getItem(STORAGE_KEYS.animationIntensity)
  if (stored === 'off' || stored === 'reduced' || stored === 'full') return stored
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  return prefersReduced ? 'reduced' : 'full'
}

function getInitialHoverSfx() {
  return localStorage.getItem(STORAGE_KEYS.hoverSfx) === 'true'
}

export function SettingsProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)
  const [animationIntensity, setAnimationIntensityState] = useState(getInitialAnimationIntensity)
  const [hoverSfx, setHoverSfxState] = useState(getInitialHoverSfx)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(STORAGE_KEYS.theme, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.dataset.animation = animationIntensity
    localStorage.setItem(STORAGE_KEYS.animationIntensity, animationIntensity)
  }, [animationIntensity])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.hoverSfx, String(hoverSfx))
  }, [hoverSfx])

  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mql) return
    const onChange = (e) => {
      if (localStorage.getItem(STORAGE_KEYS.animationIntensity)) return
      setAnimationIntensityState(e.matches ? 'reduced' : 'full')
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  const setTheme = (next) => setThemeState(next === 'alt' ? 'alt' : 'default')
  const setAnimationIntensity = (next) =>
    setAnimationIntensityState(['off', 'reduced', 'full'].includes(next) ? next : 'full')
  const setHoverSfx = (next) => setHoverSfxState(Boolean(next))

  const value = {
    theme,
    setTheme,
    animationIntensity,
    setAnimationIntensity,
    hoverSfx,
    setHoverSfx,
  }

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error('useSettings must be used within a SettingsProvider')
  return ctx
}
