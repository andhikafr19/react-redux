import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button aria-label="Increment value" onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}