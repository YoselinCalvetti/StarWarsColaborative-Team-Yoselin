import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { store, actions } = useContext(Context)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
  let logged = await actions.login(email, password)
  if (logged === true) {
    navigate("/")
  }
    

  }

  return (
    <div className="d-flex justify-content-center " >
      <form onSubmit={handleSubmit} className="bg-white p-3 rounded-3">
        <div class="mb-3 ">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">No compartiremos tu email.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>


  )
}