import React, { useState } from 'react'

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onClick={register}>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                <br/>
                <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' />
                <br/>
                <button type='submit' >Register</button>
            </form>
        </div>
    )
}

export default Register;
