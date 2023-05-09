const initialState = {
  projectList:[
      {
          "id": 1,
          "projectName": "Web jira",
          "description": "web quản lý task dự án",
          "categoryId": 1,
          "alias": "web-jira",
          "deleted": false,
          "member":[

          ]
      },
      {
          "id": 2,
          "projectName": "App jira",
          "description": "app quản lý task dự án",
          "categoryId": 3,
          "alias": "app-jira",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 3,
          "projectName": "Phần mềm jira",
          "description": "phần mềm quản lý công việc",
          "categoryId": 2,
          "alias": "phan-mem-jira",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 4,
          "projectName": "string",
          "description": "string",
          "categoryId": 1,
          "alias": "string",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 5,
          "projectName": "project name",
          "description": "<p>adskajdksjahd</p>",
          "categoryId": 2,
          "alias": "project-name",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 6,
          "projectName": "newproject123",
          "description": "<p>dsadsada</p>",
          "categoryId": 1,
          "alias": "newproject123",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 7,
          "projectName": "thoa",
          "description": "<p>front end remote</p>",
          "categoryId": 1,
          "alias": "thoa",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 8,
          "projectName": "alice",
          "description": "<p>test post</p>",
          "categoryId": 1,
          "alias": "alice",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      },
      {
          "id": 9,
          "projectName": "alice nguyen",
          "description": "<p>323</p>",
          "categoryId": 1,
          "alias": "alice-nguyen",
          "deleted": false,
          "member":[
            {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
            {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
          ]
      }
  
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case "UPDATE_PROJECT_ALL":
    state.projectList = action.data
    return { ...state }
  case "NEW_PROJECT_WE":
    let haha = {
      id:state.projectList.length + 1,
      projectName:action.newProject.projectName,
      description:action.newProject.description,
      categoryId: action.newProject.categoryId,
      alias:"new hahaah",
      delete:false
    }
    state.projectList.push(haha)
    return {...state}
  case "PUT_NEW_PROJECT":
    console.log("DMMMM");
    let dmdmm = [...state.projectList]
    let index = dmdmm.findIndex((item)=> item.id = action.projectUpdate.id)
    if(index !== -1){
        dmdmm[index] = action.projectUpdate
    }
    state.projectList = dmdmm
    console.log("ủa alo",state.projectList);
    return {...state}
  case "DELETE_PROJECT":
    let newListproject = [...state.projectList]
    newListproject = newListproject.filter((item)=> item.id != action.id)
    state.projectList = newListproject
    return {...state}
  case "ADD_MEMBER_TO_PROJECT":
    let ListprojectM = [...state.projectList]

    let indexM = ListprojectM.findIndex((item)=> item.id == action.projectId);

    let listMember = action.listMem
    let memberId = action.memberId

    let indexMem = listMember.findIndex((item)=> item.userId == memberId)
    let newMem = listMember[indexMem]
    ListprojectM[indexM].member.push(newMem)
    state.projectList = ListprojectM
    return {...state}
  default:
    return state
  }
}
