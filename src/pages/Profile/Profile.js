import React from 'react'

export default function Profile() {
    if(localStorage.getItem('userLogin')){
        return(
            <div>
                profile
            </div>
        )
    }else{
        alert('Vui lòng đăng nhập để vào trang này')
    }

}
