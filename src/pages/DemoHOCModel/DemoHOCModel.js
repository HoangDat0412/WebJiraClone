import React from 'react'
import { useDispatch } from 'react-redux'
import Login from '../Login/Login'
import Register from '../Register/Register'
export default function DemoHOCModel() {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={ () => dispatch({
        type:"OPEN_FORM",
        Component:<Register/>
      })} type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        Đăng Ký
      </button>

      <button onClick={()=> dispatch({
        type:"OPEN_FORM",
        Component:<Login/>
      })} type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        Đăng Nhập
      </button>
    </div>
  )
}
