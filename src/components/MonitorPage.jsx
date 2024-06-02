import React, { useEffect, useState } from "react";
import "./MonitorPage.scss";

const MonitorPage = ({ hide_screen }) => {
    const [show_details, setShowDetails] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            (hide_screen) && setShowDetails(true);
        }, 0);
    }, [show_details]);

    return (
        <div id="monitor_wrapper" className={ (show_details) ? "" : "hidden" }>
            <div id="monitor_details">
                <h2>FRONTEND DEVELOPER <span>AND</span> UI/UX DESIGNER</h2>

                <div id="actions">
                    <button>SERVICES</button>
                    <button>PROJECTS</button>
                </div>
            </div>
            <img src="https://ucarecdn.com/58424937-0f19-4336-aa14-7a2b2add5a55/ytac_full_profile.png" alt="Ruelito Ytac Profile" />
        </div>
    )
}

export default MonitorPage;