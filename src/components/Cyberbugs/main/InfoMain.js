import React from "react";

export default function InfoMain(props) {
  let members = props.members;
  return (
    <>
      <h3>{props.description}</h3>
      <div className="info" style={{ display: "flex" }}>
        <div className="search-block">
          <input className="search" />
          <i className="fa fa-search" />
        </div>
        <div className="avatar-group" style={{ display: "flex" }}>
          {members?.map((item, index) => {
            return (
              <div className="avatar">
                <img
                  src={item.avatar}
                  alt="1"
                />
              </div>
            );
          })}
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Only My Issues
        </div>
        <div style={{ marginLeft: 20 }} className="text">
          Recently Updated
        </div>
      </div>
    </>
  );
}
