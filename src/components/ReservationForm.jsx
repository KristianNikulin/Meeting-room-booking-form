import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { optionsTower } from "../helpers/options";
import { optionsFloor } from "../helpers/options";
import { optionsRoom } from "../helpers/options";
import { optionsTime } from "../helpers/options";
import { customStyles } from "../helpers/custom";

const ReservationForm = () => {
    const [selectedTower, setSelectedTower] = useState(optionsTower[0]);
    const [selectedFloor, setSelectedFloor] = useState(optionsFloor[0]);
    const [selectedRoom, setSelectedRoom] = useState(optionsRoom[0]);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedInterval, setSelectedInterval] = useState(optionsTime[0]);
    const [comment, setComment] = useState("");

    const handleTowerChange = (selectedOption) => {
        setSelectedTower(selectedOption);
    };

    const handleFloorChange = (selectedOption) => {
        setSelectedFloor(selectedOption);
    };

    const handleRoomChange = (selectedOption) => {
        setSelectedRoom(selectedOption);
    };

    const handleIntervalChange = (selectedOption) => {
        setSelectedInterval(selectedOption);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const day = String(selectedDate.getDate()).padStart(2, "0");
        const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
        const year = selectedDate.getFullYear();

        const reservationData = {
            tower: selectedTower.value,
            floor: selectedFloor.value,
            room: selectedRoom.value,
            date: `${day}/${month}/${year}`,
            time: selectedInterval.value,
            comment,
        };

        console.log(JSON.stringify(reservationData));
        handleClear();
    };

    const handleClear = () => {
        setSelectedTower(optionsTower[0]);
        setSelectedFloor(optionsFloor[0]);
        setSelectedRoom(optionsRoom[0]);
        setSelectedDate(new Date());
        setSelectedInterval(optionsTime[0]);
        setComment("");
    };

    return (
        <div className="reservation-form">
            <h1>Нужна переговорка? Бронируй!</h1>
            <label>Башня:</label>
            <Select value={selectedTower} onChange={handleTowerChange} options={optionsTower} styles={customStyles} />
            <label>Этаж:</label>
            <Select value={selectedFloor} onChange={handleFloorChange} options={optionsFloor} styles={customStyles} />
            <label>Номер переговорной:</label>
            <Select value={selectedRoom} onChange={handleRoomChange} options={optionsRoom} styles={customStyles} />
            <label>Дата:</label>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" className="form-control" styles={customStyles} />
            <label>Интервал времени:</label>
            <Select value={selectedInterval} onChange={handleIntervalChange} options={optionsTime} styles={customStyles} />
            <label>Комментарий:</label>
            <textarea value={comment} onChange={handleCommentChange} maxLength="200" />
            <div className="btn-container">
                <button className="submit-btn" type="submit" onClick={handleSubmit}>
                    Отправить
                </button>
                <button className="clear-btn" onClick={handleClear}>
                    Очистить
                </button>
            </div>
        </div>
    );
};

export default ReservationForm;
