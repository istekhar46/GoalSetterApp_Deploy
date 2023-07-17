import { FaGithub ,FaRegCopyright,FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container" style={{borderTop:'1px solid',}}>
       <div style={{display:'flex', marginTop:'10px',
                    justifyContent:'center',
                    alignItems:'center'}}>
        <h4 style={{padding:"2px"}}>istekhar khan</h4>
        <FaRegCopyright/>
       </div>
       <div style={{display:'flex',justifyContent:'center',
                    alignItems:'center'}}>
        <a style={{padding:'10px'}} target="_blanck" href="https://www.github.com/istekhar46"><FaGithub/></a>
        <a target="_blanck" href="https://www.linkedin.com/in/istekhar46"><FaLinkedin/></a>
       </div>
        </div>
  )
}

export default Footer