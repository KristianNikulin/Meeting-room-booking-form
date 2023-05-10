import React from "react";
import VK_LOGO from "../img/vk_logo.svg";

const VkLogo = () => {
    return (
        <img
            style={{ boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)", borderRadius: "25px" }}
            src={VK_LOGO}
            alt="vk logo"
        />
    );
};

export default VkLogo;
