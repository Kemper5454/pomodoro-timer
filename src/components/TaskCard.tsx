import React from "react"
import { ChevronRight } from "lucide-react"

type Props = {
    time: string
    title?: string
    onClick?: () => void
}

const TaskCard: React.FC<Props> = ({ time, title, onClick }) => {
    return (
        <div
            className="task-card"
            onClick={onClick}
            style={{
                backgroundColor: "#1e1e1e",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
                color: "white",
                cursor: "pointer",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{time}</span>
                <ChevronRight color="gray" />
            </div>
            {title && (
                <span style={{ marginTop: "4px", fontSize: "14px", color: "lightgray" }}>{title}</span>
            )}
        </div>
    )
}

export default TaskCard
