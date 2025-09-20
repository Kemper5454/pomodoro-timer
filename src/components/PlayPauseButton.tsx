import React, { useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'


type Props = {
    running: boolean
    onPlay: () => void
    onPause: () => void
    onReset: () => void
}


const PlayPauseButton: React.FC<Props> = ({ running, onPlay, onPause, onReset }) => {
    const [expanded, setExpanded] = useState(false)


    const handleClick = () => {
        if (!expanded) {
            setExpanded(true)
            running ? onPause() : onPlay()
        } else {
            running ? onPause() : onPlay()
        }
    }


    return (
        <div className="playpause-root">
            {!expanded ? (
                <button className="pp-btn main" onClick={handleClick}>
                    {running ? <Pause size={32} /> : <Play size={32} />}
                </button>
            ) : (
                <div className="pp-expanded">
                    <button className="pp-btn" onClick={onPause}><Pause size={28} /></button>
                    <button className="pp-btn" onClick={onReset}><RotateCcw size={28} /></button>
                </div>
            )}
        </div>
    )
}


export default PlayPauseButton