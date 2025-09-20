import React, { useEffect } from 'react'

type Props = {
  total: number
  time: number
  running: boolean
  setTime: (t: number | ((prev: number) => number)) => void
}

const CircularTimer: React.FC<Props> = ({ total, time, running, setTime }) => {
  useEffect(() => {
    if (!running) return
    if (time <= 0) return

    const id = setInterval(() => {
      // указываем, что prev — number
      setTime((prev: number) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(id)
  }, [running, time, setTime])

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')
  const progress = 1 - time / total

  const ticks = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="circular-timer">
      <svg viewBox="0 0 200 200" className="dial">
        {ticks.map(i => {
          const angle = (i / 60) * 2 * Math.PI
          const r1 = 90
          const r2 = i % 5 === 0 ? 82 : 86
          const x1 = 100 + r1 * Math.cos(angle)
          const y1 = 100 + r1 * Math.sin(angle)
          const x2 = 100 + r2 * Math.cos(angle)
          const y2 = 100 + r2 * Math.sin(angle)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="white"
              strokeWidth={i % 5 === 0 ? 2 : 1}
              opacity={0.4}
            />
          )
        })}
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="white"
          strokeWidth="4"
          strokeDasharray={`${Math.PI * 2 * 90}`}
          strokeDashoffset={`${(1 - progress) * Math.PI * 2 * 90}`}
          fill="none"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <div className="time-text">
        {minutes}:{seconds}
      </div>
    </div>
  )
}

export default CircularTimer
