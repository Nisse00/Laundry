import Calendar from "./components/Calendar";
import BookingPopout from "./components/BookingPopout";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col" style={{ textAlign: "center" }}>
        <Calendar />
        </div>
      </div>
    </div>
  );
}