import React, { useState } from 'react';
import ProfileContainer from './ProfileContainer';
import Form from './component/form/Form';
import Result from './Result';
import MyContext from './component/form/MyContext'

const Main = () => {

  const [ showMain , setShowMain ] = useState( true );
  const [ showResult , setShowResult ] = useState( true );

  const [ user , setUser ] = useState({ uName : "", country : "", email : "",favoritePlayer : "" });

  const [ winner , setWinner ] =useState({ messiPercentage : '', ronaldoPercentage : '' });

  const style1 = { display : "flex" }
  const style2 = { display : "none" }

  return (
    <div>
      <MyContext.Provider value = {{
        setShowMain , setShowResult , setWinner , user , setUser , winner , showResult
        }}>
      <main style={showMain ? style1 : style2 }>
        <ProfileContainer />
        <Form />
        </main>
        <Result  />
        </MyContext.Provider>
</div>
  )
}

export default Main