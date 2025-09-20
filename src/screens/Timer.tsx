import React, { useState } from 'react'
import CircularTimer from '../components/CircularTimer'
import PlayPauseButton from '../components/PlayPauseButton'
import BottomNav from '../components/BottomNav'
import type { Screen } from '../types/navigation'


const Timer: React.FC<{ goTo: (s: Screen) => void }> = ({ goTo }) => {
    const [time, setTime] = useState(20 * 60) // 20 min in sec
    const [running, setRunning] = useState(false)


    return (
        <div className="timer-root">
            <header className="timer-header">
                <h1>Фокус</h1>
            </header>


            <main className="timer-main">
                <CircularTimer total={20 * 60} time={time} running={running} setTime={setTime} />
                <PlayPauseButton
                    running={running}
                    onPlay={() => setRunning(true)}
                    onPause={() => setRunning(false)}
                    onReset={() => { setRunning(false); setTime(20 * 60) }}
                />
            </main>


            <BottomNav active="timer" goTo={goTo} />
        </div>
    )
}


export default Timer