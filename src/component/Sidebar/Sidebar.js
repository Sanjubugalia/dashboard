import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons';
import {Link} from "react-router-dom"
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h1 className="sidebartitile">
                            Dashboard
                        </h1>
                    </div>
                    <ul className="sidemunulist">
                        <li className="sidemeniitem">
                            <LineStyle />
                            <Link to="/">Home</Link>
                        </li>
                        <li className="sidemeniitem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidemeniitem">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h1 className="sidebartitile">
                            Quick Menu
                        </h1>
                    </div>
                    <ul className="sidemunulist">
                        <li className="sidemeniitem">
                            <LineStyle />
                            <Link to="/userlist">User</Link>
                        </li>
                        <li className="sidemeniitem">
                            <Timeline />
                            <Link to="/product">Product</Link>
                        </li>
                        <li className="sidemeniitem">
                            <TrendingUp />
                            Transaction
                        </li>
                        <li className="sidemeniitem">
                            <TrendingUp />
                            Report
                        </li>
                    </ul>
                </div>
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h1 className="sidebartitile">
                            Notifications
                        </h1>
                    </div>
                    <ul className="sidemunulist">
                        <li className="sidemeniitem">
                            <LineStyle />
                            Mail
                        </li>
                        <li className="sidemeniitem">
                            <Timeline />
                            Feedback
                        </li>
                        <li className="sidemeniitem">
                            <TrendingUp />
                            Massage
                        </li>
                    </ul>
                </div>
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h1 className="sidebartitile">
                            Staff
                        </h1>
                    </div>
                    <ul className="sidemunulist">
                        <li className="sidemeniitem">
                            <LineStyle />
                            Manage         
                       </li>
                        <li className="sidemeniitem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidemeniitem">
                            <TrendingUp />
                            Report
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar