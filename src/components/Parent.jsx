import React from 'react'
import Chilld from './Chilld'

const Parent = ({user}) => {
  return (
    <div style={{
        border: "1px solid red",
        width: "500px",
        height: "300px",
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "pink",
      }} >
        <Chilld user={user}/>
    </div>
  )
}

export default Parent