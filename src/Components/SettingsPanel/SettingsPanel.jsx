import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faClose } from '@fortawesome/free-solid-svg-icons'
import { useSettings } from '../../Context/SettingsContext'
import { playBeep } from '../../utils/playBeep'
import { useKonamiCode } from '../../hooks/useKonamiCode'
import './SettingsPanel.css'

const KONAMI_EFFECT_DURATION = 6000

const ANIMATION_OPTIONS = [
  { value: 'off', label: 'Off' },
  { value: 'reduced', label: 'Reduced' },
  { value: 'full', label: 'Full' },
]

function SettingsPanel() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const {
    theme,
    setTheme,
    animationIntensity,
    setAnimationIntensity,
    hoverSfx,
    setHoverSfx,
  } = useSettings()

  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const triggerKonami = useCallback(() => {
    document.body.classList.add('konami-active')
    setTimeout(() => document.body.classList.remove('konami-active'), KONAMI_EFFECT_DURATION)
  }, [])

  useKonamiCode(triggerKonami)

  const toggleHoverSfx = () => {
    const next = !hoverSfx
    setHoverSfx(next)
    if (next) playBeep({ frequency: 900 })
  }

  return (
    <>
      <button
        type="button"
        className="settings-gear-btn"
        aria-label="Abrir configurações"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <FontAwesomeIcon icon={faGear} spin={open} />
      </button>

      <div
        className={open ? 'settings-panel active' : 'settings-panel'}
        ref={panelRef}
        role="dialog"
        aria-label="Painel de configurações"
        aria-hidden={!open}
      >
        <div className="settings-panel-header">
          <h2>Configurações</h2>
          <button
            type="button"
            className="settings-close-btn"
            aria-label="Fechar configurações"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <div className="settings-group">
          <span className="settings-label">Tema</span>
          <div className="segmented-control" role="group" aria-label="Tema">
            <button
              type="button"
              className={theme === 'default' ? 'active' : ''}
              aria-pressed={theme === 'default'}
              onClick={() => setTheme('default')}
            >
              Default
            </button>
            <button
              type="button"
              className={theme === 'alt' ? 'active' : ''}
              aria-pressed={theme === 'alt'}
              onClick={() => setTheme('alt')}
            >
              Alt
            </button>
          </div>
        </div>

        <div className="settings-group">
          <span className="settings-label">Animação</span>
          <div className="segmented-control" role="group" aria-label="Intensidade de animação">
            {ANIMATION_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={animationIntensity === opt.value ? 'active' : ''}
                aria-pressed={animationIntensity === opt.value}
                onClick={() => setAnimationIntensity(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-group settings-group-row">
          <span className="settings-label">Som de hover</span>
          <button
            type="button"
            className={hoverSfx ? 'toggle-switch active' : 'toggle-switch'}
            role="switch"
            aria-checked={hoverSfx}
            aria-label="Som de hover"
            onClick={toggleHoverSfx}
          >
            <span className="toggle-knob" />
          </button>
        </div>
      </div>
    </>
  )
}

export default SettingsPanel
