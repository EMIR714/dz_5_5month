import React  from "react";
import { useDispatch } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions/actions";

function User({userInfo}) {
    const dispatch = useDispatch()

    const getOneUser = (event) => {
        dispatch(fetchUserOneInfo(event.target.value))
    }

    return (
        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>
            <li>username: {userInfo.username}</li>
            <li>website: {userInfo.website}</li>
            <li>
                <button value={userInfo.id} onClick={getOneUser}>get more</button>
            </li>
        </ul>
    )
}

export default User