import React from "react";
import "./styles/App.css";
import ReservationForm from "./components/ReservationForm";
import VkLogo from "./components/VkLogo";

function App() {
    return (
        <div className="App">
            <VkLogo />
            <ReservationForm />
        </div>
    );
}

export default App;
