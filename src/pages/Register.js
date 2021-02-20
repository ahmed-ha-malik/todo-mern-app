import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const handleErrors = async (response) => {
    if(!response.ok) {
        const {message} = await response.json();
        console.log("message: ", message);
        throw Error(message);
    }
    return response.json();
}

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    
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
        })
        .then(handleErrors)
        .then(() => {
            history.push('/');
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    const history = useHistory();

    return (
        <div>
            <h1>Register</h1>
            {error && (<span style={{color: 'red'}}>{error}</span>)}
            <form onSubmit={register}>
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
