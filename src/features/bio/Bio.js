import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchUsers, input, submit} from "./bioSlice";

export default function Bio() {
    const name = useSelector((state) => state.bio.name) 
    const email = useSelector((state) => state.bio.email)
    const users = useSelector((state) => state.bio.users)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     console.log(name,email)
    // })

    // dispatch(fetchUsers())

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     dispatch(submit())
    // }

    // return(
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" value={name} onChange={(e) => {
    //             dispatch(input({
    //                 key: 'name',
    //                 data: e.target.value
    //             }))
    //         }}/>
    //         <input type="email" value={email} onChange={(e) => {
    //             dispatch(input({
    //                 key: 'email',
    //                 data: e.target.value
    //             }))
    //         }}/>
    //         <input type="submit"></input>
    //     </form>
    // )

    return(
        <div>
            <button type="submit" onClick={(e) => {
                dispatch(fetchUsers())
            }}>
                Get Data
            </button>
            <ul>
                {users.map(user => (<li>{user.name}</li>))}
            </ul>
        </div>
    )
}