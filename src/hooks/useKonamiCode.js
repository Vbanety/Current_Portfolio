import { useEffect, useRef } from 'react'

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode(onSuccess) {
  const bufferRef = useRef([])

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      const next = [...bufferRef.current, key].slice(-KONAMI_SEQUENCE.length)
      bufferRef.current = next

      if (next.length === KONAMI_SEQUENCE.length && next.every((k, i) => k === KONAMI_SEQUENCE[i])) {
        bufferRef.current = []
        onSuccess()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onSuccess])
}
