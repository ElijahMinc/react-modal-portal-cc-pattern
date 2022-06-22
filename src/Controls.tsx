import React, { useState } from 'react'
import App from './App'

interface ControlsProps {

}

export const Controls: React.FC<ControlsProps> = () => {
   const [toggle, setToggle] = useState(false)
   const [toggle2, setToggle2] = useState(false)


   return (
      <>
      {toggle && <App/>}

       <button onClick={() => setToggle(!toggle)}>Render Modals</button>


      </>

      )
}