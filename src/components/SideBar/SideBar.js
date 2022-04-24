import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <div className="sideBar">
        <ul>
          <li>
            <i className="fa-solid fa-table-columns"></i>
            <small>Dashboard</small>
          </li>
          <li>
            <i className="fa-solid fa-display"></i>
            <small>Workplace</small>
          </li>
          <li>
            <i className="fa-solid fa-mug-saucer"></i>
            <small>Holidays</small>
          </li>
          <li className="active-link">
            <i className="fa-solid fa-user-group "></i>
            <small>Employees</small>
            <small className="notification rounded-circle padge">5</small>
          </li>
          <li>
            <i className="fa-solid fa-hands-praying"></i>
            <small>inbound requests</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
