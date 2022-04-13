//mongodb+srv://minjoungk:<password>@merncamp.7baei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  
   import { useState } from "react";
    import axios from "axios";

    const Register = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");

    const handleSubmit = (e) => {
        //alert("works!")
        //console.log(name, email, password, secret);
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {
            name,
            email,
            password,
            secret,
        })

        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        
    };

        return (
            <div className="container-fluid">
                <div className="row py-5 bg-secondary text-light">
                    <div className="col text-center">
                        <h1>Register</h1>
                    </div>
                </div>

                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group p-2">
                                    <small>
                                        <label className="text-muted">Your Name</label>
                                    </small>
                                    <input
                                        defaultValue={name}
                                        //onChange = {(e) => console.log(e.target.value)}
                                        onChange = {(e) => setName(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter name"/>
                            </div>

                            <div className="form-group p-2">
                                <small>
                                    <label className="text-muted">Email Address</label>
                                </small>
                                <input
                                    defaultValue={email}
                                   // onChange = {(e) => console.log(e.target.value)}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"/>
                            </div>

                            <div className="form-group p-2">
                                <small>
                                    <label className="text-muted">Password</label>
                                </small>
                                <input
                                    defaultValue={password}

                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"/>
                            </div>

                            <div className="form-group p-2">
                                <small>
                                    <label className="text-muted">Your Name</label>
                                </small>
                                <select className="form-control">
                                    <option>What is you mother's name?</option>
                                    <option>WHat is your father's name?</option>
                                </select>

                                <small className="form-text text-muted">
                                    You can use this to reset your password if forgotten
                                </small>
                            </div>


                            <div className="form-group p-2">
                                <small>
                                    <label className="text-muted">Your Answer</label>
                                </small>
                                <input
                                    defaultValue={secret}
                                    onChange={(e) => setSecret(e.target.value)}
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Answer"/>
                            </div>

                            <div className="form-group p-2">
                                <button type="submit" className="btn btn-primary p-2">Submit</button>
                            </div>
                            



                            
                        </form>
                    </div>
                </div>

                
            </div>
        );
    };

    export default Register;