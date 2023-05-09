import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login(props) {
    const navigate = useNavigate()
    // const [userLogin,setUserLogin] = useState({
    //     taiKhoan:'',
    //     matKhau:''
    // })

    const userLogin = useRef({
        taiKhoan:'',
        matKhau:'',
    })

    const handleChange = (event) =>{
        const {name,value} = event.target
            userLogin.current[name] = value
    }

    const handleLogin = (event)=>{
        event.preventDefault();
        if(userLogin.current.taiKhoan === 'dat' && userLogin.current.matKhau ==='dat'){
            navigate('home',true)
            localStorage.setItem("userLogin",JSON.stringify(userLogin.current))
        }else{
            alert('false')
        }
    }

 return (

    <form className='container' onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>Tài Khoản</p>
            <input name='taiKhoan' className='form-control' onChange={handleChange}></input>
        </div>
        <div className='form-group'>
            <p>Mật Khẩu</p>
            <input name='matKhau' className='form-control' onChange={handleChange}></input>
        </div>
        <div className='form-group'>
            <button className='btn btn-success'>
                Đăng Nhập
            </button>
        </div>

    </form>
  )
}
