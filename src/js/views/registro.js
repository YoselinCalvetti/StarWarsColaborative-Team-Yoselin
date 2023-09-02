import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";


export const Registro = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { store, actions } = useContext(Context)

    function handleSubmit() {
        console.log(email, password);

    }

    return (
        <div className="d-flex justify-content-center" >

            <form className="bg-white p-3 rounded-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>


    )
}