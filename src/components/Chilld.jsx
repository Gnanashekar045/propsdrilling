import React from 'react'
import GrandChlild from './GrandChlild'

const Chilld = ({user}) => {
  return (
    <div style={{
        border: "1px solid red",
        width: "400px",
        height: "200px",
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "orange",
      }}>
        <GrandChlild user={user}/>
    </div>
  )
}

export default Chilld