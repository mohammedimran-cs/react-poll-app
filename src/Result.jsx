import React, { useContext } from 'react'
import InnerDiv from './component/showResult/InnerDiv'
import MyContext from './component/form/MyContext'

const Result = () => {
  
  const { showResult , winner} = useContext(MyContext);

  const style1 = {
    display : "none"
  }
  const style2 = {
    display : "block"
  }

  return (
    <div className="show-result" style={showResult ? style1 : style2}>
        <div className="outer-div">
            <h1>The GOAT is ?</h1>
            <InnerDiv name = {`messi`} percentage = {winner.messiPercentage} />
            <InnerDiv name = {`ronaldo`} percentage = {winner.ronaldoPercentage} />
        </div>
    </div>
  )
}

export default Result