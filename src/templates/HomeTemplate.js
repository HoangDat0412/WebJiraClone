import React from 'react'
import Header from '../components/Home/Header/Header'
import { Outlet } from 'react-router-dom'
import LoadingComponent from '../components/GlobalSetting/LoadingComponent/LoadingComponent'
import Model from '../HOC/Model/Model'
export default function HomeTemplate() {
  return (
    <div>
        <Header/>
        {/* <Model/> */}
        <LoadingComponent/>
        <Outlet/>
        
    </div>
  )
}
