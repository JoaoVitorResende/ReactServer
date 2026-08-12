import React from "react";
import useUser from "../hooks/use-users";

export default function UserInfo(){
    const {user, userRequestStatus, getUser} = useUser();

    React.useEffect(() =>{
        getUser("jao");
    },[getUser])

    if(userRequestStatus === "loading"){
        return <div> Carregando usuario</div>
    }
    return(
        <ul>
            <li>Nome: {user?.name}</li>
            <li>userName: {user?.userName}</li>
        </ul>
    )
}