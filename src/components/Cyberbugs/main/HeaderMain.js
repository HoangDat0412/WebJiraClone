import React from 'react'

export default function HeaderMain(props) {
    let name = props.projectName
    return (
        <div className="header">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                    <li className="breadcrumb-item">Project</li>
                    <li className="breadcrumb-item">{name}</li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Cyber Board
      </li>
                </ol>
            </nav>
        </div>


    )
}
