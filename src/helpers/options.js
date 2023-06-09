const optionsTower = [
    { value: "А", label: "А" },
    { value: "Б", label: "Б" },
];

const optionsFloor = [...Array(25)].map((_, index) => ({
    value: index + 3,
    label: index + 3,
}));

const optionsRoom = [...Array(10)].map((_, index) => ({
    value: index + 1,
    label: index + 1,
}));

const optionsTime = [
    { value: "9:00-10:00", label: "9:00 - 10:00" },
    { value: "10:00-11:00", label: "10:00 - 11:00" },
    { value: "11:00-12:00", label: "11:00 - 12:00" },
    { value: "12:00-13:00", label: "12:00 - 13:00" },
    { value: "13:00-14:00", label: "13:00 - 14:00" },
    { value: "14:00-15:00", label: "14:00 - 15:00" },
    { value: "15:00-16:00", label: "15:00 - 16:00" },
    { value: "16:00-17:00", label: "16:00 - 17:00" },
    { value: "17:00-18:00", label: "17:00 - 18:00" },
    { value: "18:00-19:00", label: "18:00 - 19:00" },
    { value: "19:00-20:00", label: "19:00 - 20:00" },
    { value: "20:00-21:00", label: "20:00 - 21:00" },
    { value: "21:00-22:00", label: "21:00 - 22:00" },
    { value: "22:00-23:00", label: "22:00 - 23:00" },
];

export { optionsTower, optionsFloor, optionsRoom, optionsTime };
