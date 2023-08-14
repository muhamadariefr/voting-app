import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
    const [active, setActive] = useState(1);
    let navigate = useNavigate();
    return (
        <div className="d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100 sidebar-adm">
            <div>
                <a href="" className="p-3 fs-4 fw-bold">
                    <i class="fa-solid fa-dragon px-2"></i>
                    Voting<span className="fs-4 text-primary">App</span>
                </a>
                <hr className="text-white mt-2" />
                <ul className="nav nav-pills flex-column mt-2">
                    <li
                        className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
                        onClick={(e) => setActive(1)}
                    >
                        <Link to="/admin" className="p-1">
                            <i className="bi bi-speedometer2 me-3 fs-4"></i>
                            <span className="fs-4">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li
                        className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
                        onClick={(e) => setActive(2)}
                    >
                        <Link to="/users" className="p-1">
                            <i className="bi bi-people me-3 fs-4"></i>
                            <span className="fs-4">
                                Users
                            </span>
                        </Link>
                    </li>
                    <li
                        className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
                        onClick={(e) => setActive(3)}
                    >
                        <Link to="/order" className="p-1">
                            <i className="bi bi-table me-3 fs-4"></i>
                            <span className="fs-4">
                                Orders
                            </span>
                        </Link>
                    </li>
                    <li
                        className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
                        onClick={(e) => setActive(4)}
                    >
                        <Link to="/report" className="p-1">
                            <i className="bi bi-grid me-3 fs-4"></i>
                            <span className="fs-4">
                                Report
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <hr className="text-white" />
                <div className="nav-item p-2">
                    <a href="" className="p-1">
                        <i className="bi bi-person-circle me-2 fs-5"></i>
                        <span className="fs-5">
                            Administrator
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
