import "./LandingPage.css"
import Taskbar from "../components/taskbar/Taskbar";
import SecondaryNavbar from "../components/taskbar/SecondaryNavbar";
import Collection from "../components/collection/Collection";

function LandingPage(){
  return (
  <>
    <SecondaryNavbar/>
    <Taskbar/>
    <div className='landing-page-container'>
      <h1>YOUR COLLECTION</h1>
      <Collection/>
    </div>
  </>
  )
}

export default LandingPage;