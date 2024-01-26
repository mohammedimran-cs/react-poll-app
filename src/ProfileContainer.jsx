import React from 'react'
import MessiImage from './component/profile/MessiImage'
import RonaldoImage from './component/profile/RonaldoImage'

const profileContainer = () => {
  return (
    <div id="profile">
      <RonaldoImage />
      <h1>VS</h1>
      <MessiImage />
        </div>
  )
}

export default profileContainer