import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MenuCyberbugs() {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    {/* <img src={require("../../assets/img/download.jfif")} alt /> */}
                </div>
                <div className="account-info">
                    <p>CyberLearn.vn</p>
                    <p>Report bugs</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card" />
                    <NavLink to="/cyberbugs">Cyber Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-credit-card" />
                    <NavLink to="/projectmanagement">Project Management</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" />
                    <NavLink to='/createproject'>Create Project</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                    <i className="fa fa-truck" />
                    <span>Releases</span>
                </div>
                <div>
                    <i className="fa fa-equals" />
                    <span>Issues and filters</span>
                </div>
                <div>
                    <i className="fa fa-paste" />
                    <span>Pages</span>
                </div>
                <div>
                    <i className="fa fa-location-arrow" />
                    <span>Reports</span>
                </div>
                <div>
                    <i className="fa fa-box" />
                    <span>Components</span>
                </div>
            </div>
        </div>


    )
}
