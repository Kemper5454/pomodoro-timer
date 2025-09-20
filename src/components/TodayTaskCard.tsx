import React from "react"
import { ChevronRight } from "lucide-react"

type Props = {
    title: string
    onClick?: () => void
}

const TodayTaskCard: React.FC<Props> = ({ title, onClick }) => {
    return (
        <div
            className="today-task-card"
            onClick={onClick}
            style={{
                backgroundColor: "#1e1e1e",
                borderRadius: "12px",
                padding: "12px 16px",
                marginBottom: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                cursor: "pointer",
            }}
        >
            <span>{title}</span>
            <ChevronRight color="gray" size={18} />
        </div>
    )
}

export default TodayTaskCard
