import { useState } from "react";

interface CalendarBoxProps {
    cardTitleNumber: number;
}

export default function CalendarBox({ cardTitleNumber }: CalendarBoxProps) {
    const [isBooked1, setIsBooked1] = useState(false);
    const [isBooked2, setIsBooked2] = useState(false);
    const [isBooked3, setIsBooked3] = useState(false);

    const handleClick = (arg: number): void => {
        switch (arg) {
            case 1:
                setIsBooked1(!isBooked1);
                break;
            case 2:
                setIsBooked2(!isBooked2);
                break;
            case 3:
                setIsBooked3(!isBooked3);
                break;
            default:
                break;
        }
    }

    return (
        <div className="card" style={{ width: "10rem", height: "8rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "14px" }}>{cardTitleNumber}</h5>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>08:00-12:00</span>
                        <button
                            className={`btn ${isBooked1 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(1)}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>12:00-16:00</span>
                        <button
                            className={`btn ${isBooked2 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(2)}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>16:00-20:00</span>
                        <button
                            className={`btn ${isBooked3 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(3)}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
