import {SyncOutlined} from '@ant-design/icons';

const AuthForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
}) => (


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
        <button 
         disabled={!name || !password || !secret || !email}
         className="btn btn-primary p-2">{loading ? <SyncOutlined spin className="py-1"/> : "Submit"}</button>
    </div>
       
</form>
)

export default AuthForm;