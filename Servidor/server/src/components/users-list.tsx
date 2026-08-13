import useUsers from "../hooks/use-users";

export default function UsersList()
{
    const {users, isLoadingUsers} = useUsers();

    if (isLoadingUsers){
        return <div>Carregando todos os usuarios..</div>
    }

    return(
        <ul>
            {users.map((user) =>(
                <li key={user.userName}>
                    Nome: {user.name} /Username: {user.userName}
                </li>
            ))}
        </ul>
    )
}
