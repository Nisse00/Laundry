import React from "react";
import CalendarBox from "./CalendarBox";

export default function Calendar() {
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const calendarBoxes = Array.from({ length: daysInMonth }, (_, index) => (
        <CalendarBox key={index} cardTitleNumber={index + 1} />
    ));

    const rows = [];
    const columnsPerRow = [8, 8, 8, 7]; // Number of columns for each row

    let currentIndex = 0;
    for (let i = 0; i < columnsPerRow.length; i++) {
        const columns = [];
        for (let j = 0; j < columnsPerRow[i]; j++) {
            columns.push(calendarBoxes[currentIndex]);
            currentIndex++;
        }
        rows.push(<div className="row" key={i}>{columns}</div>);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ textAlign: "center" }}>
                    <h1>Calendar Booking</h1>
                    {rows}
                </div>
            </div>
        </div>
    );
}