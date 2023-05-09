import Axios from 'axios'
import { DOMAIN_CYCBERBUGS, TOKEN } from '../util/constants/settingSystem'

export const cycberbugsService ={
    siginCycberBugs : (userLogin)=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/users/signin`,
            method:"POST",
            data:userLogin,
        })
    },
    getAllProjectCategory:()=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/ProjectCategory`,
            method:"GET"
        })
    },
    createProject:(newProject)=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/Project/createProject`,
            method:"POST",
            data:newProject
        })
    },
    getproject:()=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/Project/getAllProject`,
            method:"GET"
        })
    },
    updateProject: (projectUpdate)=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/Project/updateProject?projectId=${projectUpdate.id}`,
            method:"PUT",
            data:projectUpdate,
            headers:{'Authorization':'Bearer' + localStorage.getItem(TOKEN)}
        })
    },
    deleteProject: (id)=>{
        return Axios({
            url:`${DOMAIN_CYCBERBUGS}/Project/deleteProject?projectId=${id}`,
            method:"DELETE",
            headers:{'Authorization':'Bearer' + localStorage.getItem(TOKEN)}
        })
    }

}



