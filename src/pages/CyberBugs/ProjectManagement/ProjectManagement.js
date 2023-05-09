import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Button } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../../components/Cyberbugs/Form/FormEditProject/FormEditProject";
import { message, Popconfirm ,Popover,AutoComplete, Input } from "antd";
import { NavLink } from "react-router-dom";

const textConfirm = "Are you sure to delete this task?";
const descriptionConfirm = "Delete the task";

export default function ProjectManagement(props) {
  //popover
  const {userSearch} = useSelector(state => state.UserCyberBugsReducer)
  const textPopover = <span>New Member Id</span>;

  const contentPopover = (
    <div>

    </div>
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "GET_ALL_SAGA_PROJECT",
    });
  }, []);

  const projectList = useSelector(
    (state) => state.ProjectCyberBugsReducer.projectList
  );
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({ filteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
      render:(text,record,index)=>{
        return <NavLink to={`/projectdetail/${record.id}`}>{text}</NavLink>
      }
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      // render: (text, record, index) => {
      //     let contentJSX = ReactHtmlParser(text);

      //     return <div>
      //         {contentJSX}
      //     </div>
      // }
    },
    {
      title: "Members",
      key: "member",
      dataIndex: "member",
      render: (text, record, index) => {
        return (
          <div>
            {record.member?.slice(0, 3).map((item, index) => {
              return <Button>{item.name}</Button>;
            })}
            <Popover
              placement="topLeft"
              title={textPopover}
              content={    <AutoComplete
                style={{ width: "100%" }}
                onSearch={(value) => {
                  dispatch({
                    type:"GET_USER_API",
                    keyWord:value
                  })
                }}
                // placeholder="input here"
                options={userSearch?.map((user,index)=>{
                  return {lable:user.name,value:user.userId}
                })}    
                onSelect={
                  (value,option)=>{
                    
                    console.log("user",option.value);
                    console.log("projectID",record.id);
                    dispatch({
                      type:"ADD_MEMBER_TO_PROJECT_SAGA",
                      memberId:option.value,
                      projectId:record.id
                    })
                  }
                }
              />}
              trigger="click"
            >
              <Button>+</Button>
            </Popover>
          </div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        return (
          <div>
            <button
              className="btn mr-2 btn-primary"
              onClick={() => {
                dispatch({
                  type: "OPEN_FORM_EDIT_PROJECT",
                  Component: <FormEditProject />,
                  title:"Create New Project"
                });

                dispatch({
                  type: "EDIT_PROJECT",
                  projectEditModel: record,
                });
              }}
            >
              <FormOutlined style={{ fontSize: 17 }} />
            </button>
            <Popconfirm
              placement="topLeft"
              title={textConfirm}
              description={descriptionConfirm}
              onConfirm={() => {
                message.info("Clicked on Yes.");
                dispatch({
                  type: "DELETE_PROJECT_SAGA",
                  id: record.id,
                });
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button className="btn btn-danger">
                <DeleteOutlined style={{ fontSize: 17 }} />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container-fluid mt-5">
      <div
        style={{
          marginLeft: 70,
          whiteSpace: "nowrap",
        }}
      ></div>
      <h3>Project management</h3>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  );
}
