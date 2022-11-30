import React from 'react'

const PracticeChild = (props) => {
  return (
    <div>
    <button onClick={props.handleCount}>+</button>
<h1>{props.value}</h1>
    </div>
  )
}

export default PracticeChild