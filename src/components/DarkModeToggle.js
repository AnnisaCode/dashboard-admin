import React from 'react';

const DarkModeToggle = ({ toggleDarkMode, isDarkMode }) => {
    return (
        <div className="dark-mode-toggle">
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode} checked={isDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
