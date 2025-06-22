import { useState } from "react";

function Tourch() {
    const [isOn, setOnOff] = useState(false);

    return (
        <div className="tourch">
            <h1>Tourch</h1>
            <div className="tourch-content">
                <p> Tourch is <code>{isOn ? 'On' : 'Off'}</code></p>
                <button onClick={() => setOnOff(!isOn)}>{isOn ? 'Turn Off' : 'Turn On'}</button>
            </div>
        </div>
    );
}

export default Tourch;
