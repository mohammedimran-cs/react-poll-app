import React from 'react'

const Name = (props) => {

  return (
    <input onChange={(event) => {props.handleChange(event)}} value = {props.value} name = "uName" type="text" id="name" placeholder="Name" />
  )
}

export default Name


