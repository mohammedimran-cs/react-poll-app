import React from 'react'


const Country = (props) => {
  return (
    <input onChange={(event) => {props.handleChange(event)}} value = {props.value} name = "country" type="text" id="country" placeholder="Country" />
  )
}

export default Country