import React from 'react'

const GrandChlild = ({user}) => {
  return (
    <div style={{
        border: "1px solid red",
        width: "300px",
        height: "100px",
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "orange",
        color: 'white'
      }}>
        <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
    </div>
  )
}

export default GrandChlild;