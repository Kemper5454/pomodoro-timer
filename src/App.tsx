import React, { useState } from 'react'
import Splash from './screens/Splash'
import Timer from './screens/Timer'
import Tasks from './screens/Tasks'
import NewTask from './screens/NewTask'
import type { Screen } from './types/navigation'

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('splash')

  return (
    <div className="app-root">
      {screen === 'splash' && <Splash onEnter={() => setScreen('timer')} />}
      {screen === 'timer' && <Timer goTo={setScreen} />}
      {screen === 'tasks' && <Tasks goTo={setScreen} />}
      {screen === 'newtask' && <NewTask goTo={setScreen} />}
      {screen === 'pomodoro' && (
        <div className="placeholder-screen">
          <h1 style={{ color: 'white' }}>Помодора — заглушка</h1>
          <button onClick={() => setScreen('timer')}>Назад</button>
        </div>
      )}
    </div>
  )
}

export default App
