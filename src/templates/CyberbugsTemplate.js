import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarCyberbugs from '../components/Cyberbugs/SidebarCyberbugs'
import "../index.css"
import MenuCyberbugs from '../components/Cyberbugs/MenuCyberbugs'
import DrawerCyberBugs from '../HOC/CyberbugsHOC/ModalCyberbugs'
// import Notification from '../components/Cyberbugs/Notification/Notification'


export default function CyberbugsTemplate() {
  return (
    <div className='jira'>
        {/* <Notification/> */}
        <DrawerCyberBugs/>
        <SidebarCyberbugs/>
        <MenuCyberbugs/>
        <Outlet/>
    </div>
  )
}
