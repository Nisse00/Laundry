import { useState } from "react";
import BookingPopout from "./BookingPopout";

interface CalendarBoxProps {
    cardTitleNumber: number;
}

export default function CalendarBox({ cardTitleNumber }: CalendarBoxProps) {
    const [isBooked1, setIsBooked1] = useState(false);
    const [isBooked2, setIsBooked2] = useState(false);
    const [isBooked3, setIsBooked3] = useState(false);
    const [showBookingPopout, setShowBookingPopout] = useState(false);

    const handleConfirmation = (text: string): boolean => {
        console.log(`Booking time slot ${text}`);
        setShowBookingPopout(true); // Show the BookingPopout modal
        return true;
    };

    const handleClick = (arg: number, text: string ): void => {
        switch (arg) {
            case 1:
                if (handleConfirmation(text)){
                    setIsBooked1(!isBooked1);
                }
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
    };

    const handleClose = () => setShowBookingPopout(false);

    return (
        <div className="card" style={{ width: "10rem", height: "8rem"}}>
            <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "14px" }}>{cardTitleNumber}</h5>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>08:00-12:00</span>
                        <button
                            className={`btn ${isBooked1 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(1, "08:00-12:00")}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>12:00-16:00</span>
                        <button
                            className={`btn ${isBooked2 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(2, "12:00-16:00")}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                    <li style={{ marginLeft: "-1.25rem", marginBottom: "0.5rem", fontSize: "12px", display: "flex", justifyContent: "space-between" }}>
                        <span>16:00-20:00</span>
                        <button
                            className={`btn ${isBooked3 ? "btn-danger" : "btn-success"}`}
                            onClick={() => handleClick(3, "16:00-20:00")}
                            style={{ padding: "0.5rem" }}
                        >
                            {/* No text needed */}
                        </button>
                    </li>
                </ul>
            </div>
            <BookingPopout show={showBookingPopout} handleClose={handleClose} />
        </div>
    );
}
