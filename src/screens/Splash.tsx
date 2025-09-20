import React from 'react'
import HoldButton from '../components/HoldButton'


const Splash: React.FC<{ onEnter: () => void }> = ({ onEnter }) => {
    return (
        <div className="splash-root">
            <header className="splash-header">
                <h2 className="quote">Тесен мир, мозг же человека необъятен</h2>
                <div className="author">Фридрих Шиллер</div>
            </header>


            <main className="splash-main">
                <HoldButton onComplete={onEnter} />
                <div className="start-label">
                    <div className="arrow">▲</div>
                    <div className="text">НАЧАТЬ</div>
                </div>
            </main>


            <footer className="splash-foot" />
        </div>
    )
}


export default Splash