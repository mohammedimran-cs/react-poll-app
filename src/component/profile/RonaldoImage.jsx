import React from 'react'
import RonaldoName from './RonaldoName'
import ronaldo from './ronaldo.jpg'

const RonaldoImage = () => {
  return (
    <div className="col">
        <img src={ronaldo} alt='ronaldo'/>
        <RonaldoName />
        </div>
  )
}

export default RonaldoImage