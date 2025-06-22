import { useState } from "react";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const pageStyle = {
        backgroundColor: isDark ? "#121212" : "#f2f2f2",
        color: isDark ? "#ffffff" : "#000000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease"
    };
    return (
        <div style={pageStyle}>
            <h2>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
            <button
                onClick={() => setIsDark(!isDark)}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: isDark ? "#333" : "#ddd",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
            >
                Toggle Theme
            </button>
        </div>
    );
}

export default DarkModeToggle;