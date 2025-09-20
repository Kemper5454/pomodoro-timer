import React, { useRef, useState, useEffect, useCallback } from 'react'

type Props = {
    duration?: number
    size?: number
    dotSpacing?: number // расстояние между центрами точек
    dotSize?: number // размер каждой точки
    onComplete: () => void
}

const HoldButton: React.FC<Props> = ({
    duration = 2000,
    size = 260,
    dotSpacing = 12,
    dotSize = 6,
    onComplete
}) => {
    const rafRef = useRef<number | null>(null)
    const startRef = useRef<number | null>(null)
    const [progress, setProgress] = useState(0)
    const holdingRef = useRef(false)

    const reset = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = null
        startRef.current = null
        holdingRef.current = false
        setProgress(0)
    }, [])

    const step = useCallback(
        (t: number) => {
            if (!startRef.current) startRef.current = t
            const elapsed = t - startRef.current
            const p = Math.min(1, elapsed / duration)
            setProgress(p)
            if (p >= 1) {
                reset()
                onComplete()
                return
            }
            rafRef.current = requestAnimationFrame(step)
        },
        [duration, onComplete, reset]
    )

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    const pointerDown = (e: React.PointerEvent) => {
        ;(e.target as Element).setPointerCapture(e.pointerId)
        if (holdingRef.current) return
        holdingRef.current = true
        startRef.current = null
        rafRef.current = requestAnimationFrame(step)
    }

    const pointerUp = (e: React.PointerEvent) => {
        try {
            ;(e.target as Element).releasePointerCapture(e.pointerId)
        } catch {}
        if (!holdingRef.current) return
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        reset()
    }

    const center = size / 2
    const radius = size / 2 - dotSize / 2

    // Генерация точек по квадратной сетке внутри круга
    const points: { x: number; y: number; distance: number }[] = []
    for (let y = 0; y <= size; y += dotSpacing) {
        for (let x = 0; x <= size; x += dotSpacing) {
            const dx = x - center
            const dy = y - center
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= radius) {
                points.push({ x, y, distance })
            }
        }
    }

    return (
        <div
            className="hold-button"
            style={{ width: size, height: size, position: 'relative', overflow: 'hidden' }}
            onPointerDown={pointerDown}
            onPointerUp={pointerUp}
        >
            {points.map((p, i) => {
                const progressRadius = radius * progress
                const opacity = p.distance <= progressRadius ? 1 : 0.1
                return (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: dotSize,
                            height: dotSize,
                            borderRadius: '50%',
                            background: `rgba(255,255,255,${opacity})`,
                            left: p.x,
                            top: p.y,
                            transform: 'translate(-50%, -50%)',
                            transition: 'background 0.1s linear',
                        }}
                    />
                )
            })}

        </div>
    )
}

export default HoldButton
