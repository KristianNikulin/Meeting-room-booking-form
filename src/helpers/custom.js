const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: "1px solid gray",
        borderRadius: "5px",
        boxShadow: "none",
        "&:hover": {
            outline: "none",
            borderColor: "#0077ff",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "white" : "black",
        backgroundColor: state.isSelected ? "#0077ff" : "white",
        "&:hover": {
            backgroundColor: state.isSelected ? "#0077ff" : "gray",
            color: "white",
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: "white",
    }),
};

export { customStyles };
