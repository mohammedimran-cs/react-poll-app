import React from 'react'

const Favorite = (props) => {
  return (
    <div id="favorite">
    <div>
        <input onChange={(event) => {props.handleChange(event)}} value= "messi" checked = {props.value === "messi"} type="radio" id="messi" name="favoritePlayer"  />
        <label htmlFor="messi">Messi</label>
    </div>
    <div>
        <input onChange={(event) => {props.handleChange(event)}} value= "ronaldo" checked = {props.value === "ronaldo"} type="radio" id="ronaldo" name="favoritePlayer" />
        <label htmlFor="ronaldo">Ronaldo</label>
    </div>
</div>
  )
}

export default Favorite

