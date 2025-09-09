import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUsers } from "../store/userSlice";

const Users = () =>{

    //First products comes from store.js file, second products comes from productSlice.js under initialState
    const users = useSelector((state) => state.users.users); 
    console.log('Users:',users);

    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(fetchUsers());

    }, [dispatch]) 

    return(
        <>
        <h1>Users:{users.length}</h1>
        
        {users.map(user => (
            <div key={user.id}>
                <h2>{user.name}</h2>
            </div>
        ))}

        </>
    )
}

export default Users;