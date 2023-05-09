import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const userLogin = useSelector(state => state.UserCyberBugsReducer.userLogin)
  return (
    <div>
home

    </div>
  )
}
