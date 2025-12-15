import "./Login.css"
import bg from "../assets/background/LP.png";
import bghandle from "../assets/background/Handle.png";
import gloss from "../assets/background/gloss.png";
import vinylCollection from "../assets/background/vinyl_Collection.png";
import * as motion from "motion/react-client"
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    return (
    <>
    <div className="page-container">

        <img src={bghandle} className="handle-Image" alt="Logo" />
        <img src={vinylCollection} className="vinyl-Collection-Image" alt="Logo" />
        <div className="LP">
            <img src={gloss} className="gloss-Image" alt="Logo" />
            <motion.img src={bg} className="lp-Image" transition={{duration:10}} animate={{rotate:360}}/>
        </div>
       
        <div className="login-container">
            <h1>LOGIN</h1>
            <form className="form-container" onSubmit={(e) => { e.preventDefault(); navigate('/landingpage'); }}>
                <input className="inputfield" id="email" name="email" placeholder="Email"></input>
                <input className="inputfield" id="password" name="password" placeholder="Password"></input>
                <a>Forgot password</a>
                <button type="submit" className="form-button">Log in</button>
                <p>Dont have an account?&nbsp;<a>register here!</a></p>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login;