import { USER_SIGIN_API } from "../constants/Cycberbugs/Cyberbugs"

export const siginCycberbugAction = (userName,password)=>{
    return {
        type:USER_SIGIN_API,
        userLogin:{
            email:userName,
            password:password
        }
    }
}

