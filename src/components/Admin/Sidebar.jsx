import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Table,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Sidebar({ value }) {
    let [active, setActive] = useState(value);
    let navigate = useNavigate();

    // setActive => value;

    const handleActiveTab = (value) => {
        setActive(value);
    }

    useEffect(() => {
        console.log('Active tab:', active);
    }, [active]);

    return (


        <div className="d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-3 vh-100 sidebar-adm">
            <div>
                <a href="" className="p-3 fs-4 fw-bold">
                    <i className="fa-solid fa-box-archive pe-2"></i>
                    Voting<span className="fs-4 text-primary">App</span>
                </a>
                <hr className="text-white mt-2" />
                <ul className="nav nav-pills flex-column mt-2">
                    <Link to="/admin" className="p-1" onClick={() => handleActiveTab(1)}>
                        <li
                            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
                        >
                            <i className="bi bi-speedometer2 me-3 fs-4"></i>
                            <span className="fs-5">
                                Dashboard
                            </span>
                        </li>
                    </Link>
                    <Link to="/users" className="p-1" onClick={() => handleActiveTab(2)}>
                        <li
                            className={active === "2" ? "active nav-item p-2" : "nav-item p-2"}
                        >
                            <i className="bi bi-person me-3 fs-4"></i>
                            <span className="fs-5">
                                Users
                            </span>
                        </li>
                    </Link>
                    <Link to="/order" className="p-1" onClick={() => handleActiveTab(3)}>
                        <li
                            className={active === "3" ? "active nav-item p-2" : "nav-item p-2"}
                        >
                            <i class="bi bi-people-fill me-3 fs-4"></i>
                            <span className="fs-5">
                                Candidate
                            </span>
                        </li>
                    </Link>
                    <Link to="/report" className="p-1" onClick={() => handleActiveTab(4)}>
                        <li
                            className={active === "4" ? "active nav-item p-2" : "nav-item p-2"}
                        >
                            <i className="bi bi-grid me-3 fs-4"></i>
                            <span className="fs-5">
                                Report
                            </span>
                        </li>
                    </Link>
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

Sidebar.defaultProps = {
    value: 1
};

export default Sidebar;

