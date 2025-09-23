import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../store/slice/couterSlide'
export default function Counter() {
    const result = useSelector((data:any)=>{
        return data.couterSlice.value
    })
    const dispatch = useDispatch()
    const increments = ()=>{
        dispatch(increment())
        console.log(result)
    }
    const decrements = ()=>{
        dispatch(decrement())
        console.log(result)
    }
    const resets = ()=>{
        dispatch(reset())
        console.log(result)
    }
  return (
    <div>Giá trị counter là:
        {result}
        <button onClick={increments}>Tăng</button>
        <button onClick={decrements}>Giảm</button>
        <button onClick={resets}>Reset</button>
    </div>
  )
}
