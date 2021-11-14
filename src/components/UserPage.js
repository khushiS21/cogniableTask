import React from 'react'
import { Link } from 'react-router-dom'
import "../components/UserPage.css"
export const UserPage = (item) => {
    return (
        <>
        <div className ="top ">
            <i></i> 
            <Link to='/'><p>Back to home</p></Link>
         </div>
        <section className="main">
        <div className="left-container"> 
        <div className="person-detail">
        <img src="/data/pic.jpg" alt="person"></img>
        <div className="person-creds ">
        <h4>Cristofer Dias</h4>
        <p style={{color:"grey"}}>+394584838338</p>
        <p style={{color:"grey"}}>James.Boats@la.com</p>
        <p style={{color:"grey"}}>DOB: <span style={{  fontWeight:"bold" , color:"black"}}>12 june 1995</span></p>
        <p style={{color:"grey"}}>Gender:<span  style={{fontWeight:"bold" , color:"black"}}>Male</span>
        </p>
        <p style={{color:"grey"}}>Adress:<span style={{fontWeight:"bold" , color:"black"}} > 3/B, 4th Floor,Plot,Rd 19/A,banglore 1214</span></p>
        </div>
        </div>
         
         <div className="records">
         <div className="top-button">
          <button>Peak</button>
          <button>Cogniable</button>
          <button>Research Participant </button>
        </div>
        <div className="records-head">
            <h5>Records</h5>
         </div>
         <div className="basis">
        <ul className="listOne">
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Allergic to:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Height:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Weight:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Diagnosis:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Date Of Diagno:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>SSN/Aadhar:</p></li>
        <li><i class="fa fa-circle" aria-hidden="true"></i><p style={{color:"grey"}}>Languages:</p></li>
         </ul>
         <ul className="listTwo">
         <li><p style={{fontWeight:"bold" , color:"black"}}>Meat and Nut</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>5'6in</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>56kg</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>N/a</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>N/a</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>11544111dd234</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>English|Hindi</p></li>
         </ul>
         </div>

         </div>

         <div className="guardian-info">
             <ul className="guardian-list">
            <li><h5>Guardians info</h5></li>
             <li><p style={{color:"grey"}}>Guardians Name:<span style={{fontWeight:"bold" , color:"black"}}>    Cristopher</span></p></li>
             <li><p style={{color:"grey"}}>Guardians Cell No.<span style={{fontWeight:"bold" , color:"black"}}>    +327473828383</span></p></li>
             <li><p style={{color:"grey"}}>Fathers Name<span style={{fontWeight:"bold" , color:"black"}}>   Crist</span></p></li>
             <li><p style={{color:"grey"}}>Fathers cell no.<span style={{fontWeight:"bold" , color:"black"}}>   +8532478253298732</span></p></li> 
             <li><p style={{color:"grey"}}>Mothers name;<span style={{fontWeight:"bold" , color:"black"}}>  Adrea</span></p></li>
             <li><p style={{color:"grey"}}>mothers cell no.<span style={{fontWeight:"bold" , color:"black"}}>   +2834210492429</span></p></li>
             </ul>

         </div>
         </div>
         <div className="right-container">
         <div className="top-right">
            <p>Status</p> 
            <button className="active-button">active</button>
            <Link to="/forms"><button className="update-button">update info</button></Link>
            </div> 
        <div className="genral-info-container">
         <ul className="genralListOne">
          <li><h5>Genral info</h5></li>
         <li><p style={{color:"grey"}}>Admission no.:</p></li>
         <li><p  style={{color:"grey"}}>Admission date :</p></li>
         <li><p style={{color:"grey"}}>Created at:</p></li>
         <li><p style={{color:"grey"}}>Last login:</p></li>
         <li><p style={{color:"grey"}}>Clinic location:</p></li>
         <li><p style={{color:"grey"}}>location Ctegories:</p></li>
         <li><p style={{color:"grey"}}>joined at:</p></li>
         </ul>
         <ul className="genralListTwo">
         <li><p style={{fontWeight:"bold" , color:"black"}}>Admission no.:</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>Admission date :</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>Created at</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>Last login:</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>Clinic location</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>location Ctegories:</p></li>
         <li><p style={{fontWeight:"bold" , color:"black"}}>joined at:</p></li>
         </ul>

       </div> 
       <div className="staff">
       <ul classname="staffListOne">
         <li><h5>Staff assigned</h5></li>
         <li><p style={{color:"grey"}}>case manager:</p></li>
         <li><p style={{color:"grey"}}>authorised:</p></li>
         <li><p style={{color:"grey"}}>staff:</p></li>
        </ul>
        <ul className="staffListTwo">
         <li><p style={{color:"grey"}}>Anmie Global</p></li>
         <li><p style={{color:"voilet" , fontWeight:"bold "}}>Samuel John</p></li>
         <li><p style={{color:"grey"}}>...</p></li>
        </ul>

   </div>
  
         </div>
         </section>
         </>
    )
}
