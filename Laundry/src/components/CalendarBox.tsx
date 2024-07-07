import { useState } from "react";

interface CalendarBoxProps {
    cardTitleNumber: number;
}

export default function CalendarBox({ cardTitleNumber }: CalendarBoxProps) {
    const [isBooked1, setIsBooked1] = useState(false);
    const [isBooked2, setIsBooked2] = useState(false);
    const [isBooked3, setIsBooked3] = useState(false);

    const handleClick1 = () => {
        setIsBooked1(!isBooked1);
    };

    const handleClick2 = () => {
        setIsBooked2(!isBooked2);
    };

    const handleClick3 = () => {
        setIsBooked3(!isBooked3);
    };

    return (
        <div className="card" style={{ width: "10rem", height: "8rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "14px" }}>{cardTitleNumber}</h5>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ marginLeft: "-1.25rem", fontSize: "12px" }}>
                        08:00-12:00
                        <button
                            className={`btn ${isBooked1 ? "btn-danger" : "btn-success"}`}
                            onClick={handleClick1}
                            style={{ padding: "0.5rem", marginLeft: "1rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.25rem", fontSize: "12px" }}>
                        12:00-16:00
                        <button
                            className={`btn ${isBooked2 ? "btn-danger" : "btn-success"}`}
                            onClick={handleClick2}
                            style={{ padding: "0.5rem", marginLeft: "1rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.45rem", fontSize: "12px" }}>
                        16:00-20:00
                        <button
                            className={`btn ${isBooked3 ? "btn-danger" : "btn-success"}`}
                            onClick={handleClick3}
                            style={{ padding: "0.5rem", marginLeft: "1rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
