import React from 'react'
import HeaderMain from './main/HeaderMain'
import InfoMain from './main/InfoMain'
import ContentMain from './main/ContentMain'
import ModalCyberBugs from './ModalCyberBugs/ModalCyberBugs'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function CyberbugsHome(props) {
  const param = useParams()
  const projectId = param.projectId
   const listproject = useSelector(state => state.GetprojectDetailReducer.listProjectDetail)
   let index = listproject.findIndex(item => item.id = projectId)
   let projectDetail
   if(index !== -1){
     projectDetail = listproject[index]
   }

   console.log("projectDetail", projectDetail);

  return (
    <div className='main'>
        <HeaderMain projectName={projectDetail.projectName}/>

        <InfoMain members={projectDetail.members} description={projectDetail.description}/>
        <ContentMain projectDetail={projectDetail}/>
        <ModalCyberBugs/>
    </div>
  )
}
