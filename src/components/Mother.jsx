import React, { useContext } from 'react'

const Mother = () => {
    const [count, ccount]=useContext(0)
  return (
    <div>
      <p>This is  a counter example</p>
      <button onClick={ccount(count+1)}>click me</button>
    </div>
  )
}

export default Mother
