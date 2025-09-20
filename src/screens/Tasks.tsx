import React from "react"
import TaskCard from "../components/TaskCard"
import TodayTaskCard from "../components/TodayTaskCard"
import BottomNav from "../components/BottomNav"
import { Plus } from "lucide-react"
import type { Screen } from "../types/navigation"

type Props = {
    goTo: (s: Screen) => void
}

const Tasks: React.FC<Props> = ({ goTo }) => {
    return (
        <div
            className="tasks-screen"
            style={{
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // экран на всю высоту
                position: "relative",
                padding: "16px",
                boxSizing: "border-box",
            }}
        >
            {/* Контент */}
            <div style={{ flex: 1 }}>
                {/* Заголовок */}
                <h1
                    style={{
                        color: "white",
                        fontSize: "24px",
                        marginBottom: "16px",
                    }}
                >
                    Задачи
                </h1>

                {/* Текущие задачи */}
                <TaskCard
                    time="05:29"
                    title="Ресёрч по проекту"
                    onClick={() => console.log("Задача")}
                />

                {/* Секция Сегодня */}
                <h2
                    style={{
                        color: "white",
                        fontSize: "18px",
                        margin: "16px 0 8px",
                    }}
                >
                    Сегодня
                </h2>
                <TodayTaskCard
                    title="Написать отчёт"
                    onClick={() => console.log("Редактировать")}
                />
                <TodayTaskCard
                    title="Собрание в Zoom"
                    onClick={() => console.log("Редактировать")}
                />
            </div>

            {/* Кнопка + */}
            <button
                onClick={() => goTo("newtask")}
                style={{
                    position: "fixed",
                    right: "20px",
                    bottom: "100px", // чтобы висела над BottomNav
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "28px",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                }}
            >
                <Plus />
            </button>

            {/* Навигация */}
            <BottomNav active="tasks" goTo={goTo} />
        </div>
    )
}

export default Tasks
