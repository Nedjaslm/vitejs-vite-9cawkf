import React from 'react'
import retangulo from './assets/retangulo.svg'
import login from './assets/login.svg'
import ifal from './assets/ifal.svg'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className="ret" >
        <img width="1191px"  src={retangulo} />
       </div>
       <div className="login">
         <img src={login} />
         </div>
         <div className="if">
           <img width="120px" height="100px" src={ifal} />
           </div>
           <div className="c">
             <img height="100px" src={} />
             </div>
             
    </div>
  )
}

export default App
