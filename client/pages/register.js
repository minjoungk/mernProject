//mongodb+srv://minjoungk:<password>@merncamp.7baei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  
   import { useState } from "react";
    import axios from "axios";
    import { toast } from "react-toastify";
    import { Modal } from "antd";
    import Link from "next/link";
    import AuthForm from "../components/forms/AuthForm";


    const Register = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      
        //console.log(name, email, password, secret);
        e.preventDefault();
        try{
            setLoading(true);
            //ERROR: Make sure to change hard-coded path to the path using `${process.env.NEXT_PUBLIC_API}/register`
            const {data} = await axios.post('http://localhost:8000/api/register', 
            {
                name,
                email,
                password,
                secret,
            });

            setOk(data.ok);
            //ERROR: Below code suppose to empty out the textfield, but below code doesn't work.
            setName(' ');            
            setEmail(' ');
            setPassword(' ');
            setSecret(' ');
            setLoading(false);

        } catch(err){
            toast.error(err.response.data);
            setLoading(false);
            
        }
   
    }

        return (
            <div className="container-fluid">
                <div className="row py-5  text-light bg-default-image">
                    <div className="col text-center">
                        <h1>Register</h1>
                    </div>
                </div>

                



                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                        <AuthForm
                            handleSubmit={handleSubmit}
                            name = {name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            secret={secret}
                            setSecret={setSecret}
                            loading={loading}

                        />

                    </div>
                </div>



                <div className="row">
                    <div className="col">
                        <Modal
                            title="Congratulation"
                            visible={ok}
                            onCancel={() => setOk(false)}
                            footer={null}
                        >
                            <p>You have successfully registered</p>
                            <Link href="/login">
                                <a className="btn btn-primary btn-sm">Login</a>
                            </Link>
                        </Modal>
                    </div>
                </div>



            </div>
        );
    };

    export default Register;