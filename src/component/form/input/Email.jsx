import React from 'react'


const Email = (props) => {
  return (
  <input onChange={(event) => {props.handleChange(event)}} value = {props.value} name = "email" type="email" id="email" placeholder="Email Address" />  )
}

export default Email