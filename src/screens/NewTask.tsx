import React, { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import type { Screen } from "../types/navigation"

type Props = {
  goTo: (s: Screen) => void
}

const NewTask: React.FC<Props> = ({ goTo }) => {
  const [taskName, setTaskName] = useState("")
  const [duration, setDuration] = useState("15")

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Шапка */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
        <button
          onClick={() => goTo("tasks")}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowLeft />
        </button>
        <h1 style={{ color: "white", fontSize: "24px" }}>Новая задача</h1>
      </div>

      {/* Форма задачи */}
      <div
        style={{
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        {/* Название задачи */}
        <h2 style={{ color: "white", fontSize: "16px", marginBottom: "8px" }}>
          Название задачи
        </h2>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Введите название"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            marginBottom: "16px",
            backgroundColor: "#2a2a2a",
            color: "white",
            fontSize: "14px",
          }}
        />

        {/* Время выполнения */}
        <h2 style={{ color: "white", fontSize: "16px", marginBottom: "8px" }}>
          Время выполнения задачи
        </h2>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            backgroundColor: "#2a2a2a",
            color: "white",
            fontSize: "14px",
            marginBottom: "8px",
          }}
        >
          <option value="15">15 мин</option>
          <option value="30">30 мин</option>
          <option value="60">60 мин</option>
          <option value="custom">Другое</option>
        </select>
      </div>

      {/* Настройка таймера */}
      <h2 style={{ color: "white", fontSize: "18px", marginBottom: "12px" }}>
        Настройка таймера
      </h2>
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap", // для мобильных
        }}
      >
        {[
          { label: "Работа", time: "20 мин" },
          { label: "Перерыв", time: "5 мин" },
          { label: "Длинный перерыв", time: "30 мин" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              flex: "1 1 30%",
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "12px",
              textAlign: "center",
              minWidth: "100px",
            }}
          >
            <p style={{ color: "white", fontSize: "14px", marginBottom: "4px" }}>
              {item.label}
            </p>
            <p style={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
              {item.time}
            </p>
          </div>
        ))}
      </div>

      {/* Кнопка */}
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          padding: "16px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          width: "100%",
          marginTop: "auto", // чтобы прижать вниз
        }}
      >
        Запустить таймер
      </button>
    </motion.div>
  )
}

export default NewTask
