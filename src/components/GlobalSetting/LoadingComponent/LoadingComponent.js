import React from 'react'
import styleLoading from './LoadingComponent.module.css'
//C:\visual studio code\Front end\React js project\khoahoc4\src\components\GlobalSetting\LoadingComponent.module.css

import { useSelector } from 'react-redux'
export default function LoadingComponent() {
  let {isLoading} = useSelector( state => state.LoadingReducer)
  if(isLoading){
    return (
      <div className={styleLoading.bgLoading}>
           <img src={require('../../../assets/imgLoading/loading.gif')} />
      </div>
    )
  }else{
    return ''
  }
}


