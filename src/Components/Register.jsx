import React, { useContext, useState } from 'react';
import { econtex } from './Contex/Contex';


const Register = () => {

    let { handleRes } = useContext(econtex)

    let [err1, setErr] = useState("")

    let handleRegister = e => {

        e.preventDefault()
        let form = e.target

        let email = form.email.value
        let pass = form.password.value
        console.log(email, pass);
        handleRes(email, pass)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
            })
            .catch(err => {
                console.log(err);
            })

        if (pass.length < 6) {
            setErr("Password must be 6 charecter")
        }
        else {
            setErr("")
        }
    }


    return (
        <div>

            <form onSubmit={handleRegister}>
                <input type="email" name='email' />
                <input type="password" name="password" />
                <button type='submit'>Register</button>
                <span style={{ color: "red" }}>{err1}</span>
            </form>


        </div>
    );
};

export default Register;