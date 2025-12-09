import "./LandingPage.css"
import Taskbar from "../components/taskbar/Taskbar";

function LandingPage(){
    return (
    <>
      <Taskbar/>
      <div className='landing-page-container'>
        <h1>YOUR COLLECTION</h1>
      </div>
    </>
  )
}

export default LandingPage;