import React from 'react'
import Hoc from './Hoc'

const CompA = (props) => {
    const {handleCount,count,name}=props
    console.log(props)
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={handleCount}>{name}</button>
    </div>
  )
}

export default Hoc(CompA)