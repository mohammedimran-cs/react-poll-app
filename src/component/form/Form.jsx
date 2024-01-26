import React, { useContext } from 'react'
import Name from './input/Name'
import Country from './input/Country'
import Email from './input/Email'
import Title from './title/Title'
import Favorite from './Favorite/Favorite'
import Btn from './Button/Btn'
import MyContext from './MyContext'


const Form = () => {

  const { user , setUser } = useContext(MyContext);

  const handleChange = (event) => {
    let {name , value} =event.target;
    value = value.trim();
    setUser((prevalue) => {
      let newUser = {...prevalue}
      newUser[name] = value
       return newUser
    });
  }

  return (
    <form>
        <Name value ={user.uName}  handleChange = {handleChange}/>
        <Country value ={user.country}  handleChange = {handleChange}/>
        <Email value ={user.email}  handleChange = {handleChange}/>
        <Title />
        <Favorite value ={user.favoritePlayer}  handleChange = {handleChange}/>
        <Btn />
    </form>
  )
}
export default Form

