import "./Login.css"
import bg from "../assets/background/LP.png";
import bghandle from "../assets/background/Handle.png";
import * as motion from "motion/react-client"


function Login(){
    return (
    <>
    <div className="page-container">

        <img src={bghandle} className="handle-Image" alt="Logo" />
        <motion.img src={bg} className="lp-Image" transition={{duration:10}} animate={{rotate:360}}/>
        
        <div className="login-container">
            <h1>LOGIN</h1>
            <form className="form-container">
                <input className="inputfield" id="email" name="email" placeholder="Email"></input>
                <input className="inputfield" id="password" name="password" placeholder="Password"></input>
                <a>Forget password</a>
                <button className="form-button">Log in</button>
                <p>Dont have an account&nbsp;<a>register</a></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;