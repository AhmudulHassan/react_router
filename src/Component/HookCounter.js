import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]= useState(0)
  return (
    <div onClick={()=>setCount(count+1)}>Count{count}</div>
    
  )
}

export default HookCounter

// import React,{useState} from 'react'

// function HookCounter() {
//     const [count,setCount]= useState(0)
    
//   return (
//     <div onClick={setCount(count+1)}>Count{count}</div>
//   )
// }
