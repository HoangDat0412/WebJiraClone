const initialState = {
    listProjectDetail:[
        {
            alias:"project-update",
            create:{
                id:1, name:"tưởng"
            },
            description:"web sắp xếp lên lịch trình công việc ",
            id:1,
            listTask:[
                {
                    alias:"tồn đọng",
                    listTaskDetail:[],
                    statusId:"1",
                    statusName:"BACKLOG"
                },
                {
                    alias:"tồn đọng",
                    listTaskDetail:[],
                    statusId:"2",
                    statusName:"SELECTED FOR DEVELOPMENT"
                },
                {
                    alias:"tồn đọng",
                    listTaskDetail:[],
                    statusId:"3",
                    statusName:"IN PROGRESS"
                },
                {
                    alias:"tồn đọng",
                    listTaskDetail:[],
                    statusId:"4",
                    statusName:"DONE"
                },
            ],
            members:[
                {"userId":1,"name":"tưởng","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
                {"userId":2,"name":"đạt","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"},
                {"userId":3,"name":"trung","avatar":"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png"}
            ],
            projectCategory:{
                id:1,name:"Dự Án Web"
            },
            projectName:"web jira"
        }
    ]
}

export const GetprojectDetailReducer = (state = initialState,action) => {
  switch (action.type) {

  case "first":{

    return { ...state }
  }
    

  default:
    return state
  }
}
