let sharedCtx = null

export function playBeep({ frequency = 800, duration = 0.08, volume = 0.15 } = {}) {
  const AudioCtx = window.AudioContext || window.webkitAudioContext
  if (!AudioCtx) return

  if (!sharedCtx) sharedCtx = new AudioCtx()
  if (sharedCtx.state === 'suspended') sharedCtx.resume()

  const osc = sharedCtx.createOscillator()
  const gain = sharedCtx.createGain()

  osc.type = 'square'
  osc.frequency.value = frequency

  const now = sharedCtx.currentTime
  gain.gain.setValueAtTime(volume, now)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  osc.connect(gain)
  gain.connect(sharedCtx.destination)

  osc.start(now)
  osc.stop(now + duration)
}
