import React from 'react'
import { Clock, List, Timer } from 'lucide-react'
import type { Screen } from '../types/navigation'


type Props = {
    active: 'timer' | 'tasks' | 'pomodoro'
    goTo: (s: Screen) => void
}


const BottomNav: React.FC<Props> = ({ active, goTo }) => {
    return (
        <nav className="bottom-nav">
            <button className={active === 'timer' ? 'active' : ''} onClick={() => goTo('timer')}>
                <Clock />
            </button>
            <button className={active === 'tasks' ? 'active' : ''} onClick={() => goTo('tasks')}>
                <List />
            </button>
            <button className={active === 'pomodoro' ? 'active' : ''} onClick={() => goTo('pomodoro')}>
                <Timer />
            </button>
        </nav>
    )
}


export default BottomNav