import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
function App() {
  
const [length , setLength] = useState(8)
const [numberAllowed , setNumberAllowed] = useState(false)
const [charAllowed , setCharAllowed] = useState(false)
const [password , setPassword] = useState("")
const passRef = useRef(null)
 const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(charAllowed) str += "@#$%&*!?><"
  if(numberAllowed) str += "123456789"
  for(let i = 1 ; i<=length ; i++){
   let char = Math.floor(Math.random()*str.length+1)
   pass += str.charAt(char)
  }
  setPassword(pass)
 },
  [length , numberAllowed , charAllowed , setPassword]
)
const copyPassword = useCallback(()=>{
  passRef.current?.select();
  window.navigator.clipboard.writeText(password)
} , [password])
useEffect(()=>{
  passwordGenerator()
} , [length , numberAllowed , charAllowed , passwordGenerator])
  return (
    <>
    <div className='h-screen flex items-center justify-center bg-black'>
     <div className='min-w-md mx-auto shadow-md rounded-2xl bg-gray-700 text-amber-50 px-5 py-2'>
       <h2 className='text-center mb-2'>Password Generator</h2>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
       <input
       type='text'
       value={password}
       className='outline-none py-1 px-3 w-full bg-white text-black'
       placeholder='password'
       ref={passRef}
       >
       </input>
        <button 
        className='bg-blue-500 mr-2 px-3 shrink-0 outline-none'
        onClick={copyPassword}
        >copy</button>
      </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type='range'
         min={6}
         max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value) }}
        ></input>
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
       <input 
       className='ml-2'
       type="checkbox"
       defaultValue={numberAllowed}
       id="numberInput"
       onChange={()=>{
       setNumberAllowed((prev)=> !prev)
       }}
       />
       <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
       <input 
       className='ml-2'
       type="checkbox"
       defaultValue={charAllowed}
       id="numberInput"
       onChange={()=>{
       setCharAllowed((prev)=> !prev)
       }}
       />
       <label>Characters</label>
      </div>
     </div>
     </div>
    </div>
    </>
  )
}

export default App

