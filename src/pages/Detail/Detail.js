import React,{useState} from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const param = useParams();

    console.log(param);
    const id = param.id 

  return (
    <div>
        Detail
        {id}
    </div>
  )
}
