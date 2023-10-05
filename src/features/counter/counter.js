import  React, {useState} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter(){
    const count= useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const [value, setValue ] = useState(0)
const handleClick = ()=>{
    console.log(value)
    dispatch(incrementByAmount(+value))
}
const addAsync=()=>{
const randomNumber = parseInt(Math.random()*100)
console.log(randomNumber)
dispatch(incrementByAmount(randomNumber))
}
return(
    <div>
        <div>
            <button aria-label = "Increment value"
            onClick={() => dispatch(increment())}> 
            
            Increment
            </button>
            <span>{count}</span>
            <button 
            aria-label = "Decrement value"
            onClick={() => dispatch(decrement())}
        >
            Decrement
            </button>

            <input type='number' onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={handleClick}>Add by value</button>
            <button onClick={addAsync}>Add Async</button>
            </div>
    </div>
)

}