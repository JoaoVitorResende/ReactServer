import React from "react";
import useUser from "../hooks/use-users";
import type { User } from "../models/user";

export default function UserNewForm()
{
    const formRef = React.useRef<HTMLFormElement>(null);
    const {createUser, userRequestStatus} = useUser();

    async function handleSubmit(event: React.FormEvent)
    {
        event.preventDefault();
        if(!formRef.current){
            return;
        }
        const data = new FormData(formRef.current);
        const userName = data.get('id');
        const name = data.get('name');

    if (typeof userName !== 'string' || typeof name !== 'string') {
        console.error('Campos inválidos');
        return;
    }

    const payload: User = { userName, name };

    await createUser(payload);
    }
    return(
        <form ref ={formRef} onSubmit = {handleSubmit}>
            <div>
                <input name="id" placeholder="UserName" required />
            </div>
            <div>
                <input name="name" placeholder="Name" required/>
            </div>
            <div>
                <button type="submit">
                    {userRequestStatus === "saving" ? "Criando...": "Criar usuario"}
                </button>
            </div>
        </form>
    )
}