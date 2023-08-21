import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../../components/user/User";
import { addUserAction, changeInputAction } from "../../redux/actions";

function UsersPage() {

    const { value, users } = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(value))
        console.log(value)
    }

    return (
        <div>
            {/* <h1>{value}</h1> */}
            <input type="text" placeholder="name" onChange={changeInput}></input>
            <button onClick={addUser}>add</button>
            <button>delete all</button>

            {users.map((users, idx) => <User key={idx} userName={users} />)}
        </div>
    )
}

export default UsersPage