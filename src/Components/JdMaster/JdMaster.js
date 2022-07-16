import React, {useState,useEffect} from 'react'
import { Container, Table,Row,Col,Button,Modal, Form } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer,toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {CSVLink} from "react-csv"
import './JdMaster.css'
import axios from 'axios';
import { SiPocket } from 'react-icons/si';




const JdMaster = () => {

  const [getdata,setgetdata] = useState([]);
  console.log(getdata.length)
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/allJd");
 
         setgetdata(res.data);
         
    }
    fetchPost();
     },[]);

     const [viewjd,setviewjd] = useState([]);
  console.log(viewjd.length)
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/viewjd");
 
         setviewjd(res.data);
         
    }
    fetchPost();
     },[]);


     //delete jd
     const deleteJD = async id => {
      await axios.delete(`http://162.240.67.205:5000/api/DJd/${id}`)
      window.location.reload();
    
    }
  
  // const csvData = [
  //   ["	JD number", "Assured Delivery Date-Time", "Client details", "JD status", "User name who accepted the JD", "Category", "Force to use our database?", "Exclusivity", "Cvs quality check", "priority tag(P)", "JD details", "Company", "Job description", "Terms of JD	", "remarks/comments", "Client Coordination", "Admin spoc", "Allow one candidate submission by user?", "JD Acceptance", "Submission Date", "Feedback from client updated by user", "Feedback from admin", "Cvs quality approval", "Status as per User	" ,"Offer", "JD upload date-time"],
  //   ["1232456", "5-5-22", "yes", "na", "isha", "A", "yes","yes", "na","na","na","na","yes","na","na","na","na","na","na","na"]
  // ];
  const Studentlist = [
    {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"JD number ", key:"id"},
    {label:"Assured Delivery Date-Time ", key:"Date"},
    {label:"Client details", key:"Clientname"},
    {label:"JD status", key:"JDtitle"},
    {label:"User name who accepted the JD", key:"JDlocation"},
    {label:"Category", key:"RecruiterID"},
    {label:"Force to use our database?", key:"Candidatename"},
    {label:"Exclusivity", key:"Currentdesignation"},
    {label:"Cvs quality check", key:"Currentsalary"},
    {label:"priority tag(P", key:"priority tag(P"},
    {label:"remarks", key:"remarks"},
    {label:"Job description", key:"Jobdescription"},
    {label:"Client cordination", key:"clientcordination"},
    {label:"Allow one candidate submission by user?", key:"Allow one candidate submission by user?"},
    {label:"Submission Date", key:"SubmissionDate"},
    {label:"Feedback from client updated by user", key:"jdtitle"},
    {label:"Feedback from admin", key:""},
    {label:"Cvs quality approval", key:""},
    {label:"Status as per User", key:""},
    {label:"JD upload date-time", key:"Date"}
   

]
const csvReport = {
  filename: 'Studentlist.csv',
  headers: headers,
  data: Studentlist
}
  
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  
  // jd Detail
  const [jddetail, setjd]=useState([])
  
  const HandleShow1 = (id) =>{
    setShow1(true);
    setjd(id)

  }
  



  const notify = () => toast.success("saved");
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = (id) =>{ 
    setJDnumber(id)
    setShow3(true);}


  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
// client Detail
  const [JDDetail,SetJDDetail] = useState([]);
console.log(JDDetail)
  const HandleShow4 = (id) =>{
    var jdId=id;
   
    setShow4(true);
    SetJDDetail(jdId);
 
// useEffect(()=>{
//      axios.get(`http://localhost:4000/api/JdbyId/${jdId}`).then((responce)=>{
 
//       SetJDDetail(responce.data);
    
//      })
//     },[])
   
    //SetJDDetail(jdId);
}
  
    const [jdNumber, setJDnumber]=useState([])
    
  


  
   
  

  const [show5, setShow5] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = (id) =>{
    setJDnumber(id)
    setShow5(true);}
  const [show6, setShow6] = useState(false);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = (id) =>{
    setJDnumber(id)
     setShow6(true);}
  const [show7, setShow7] = useState(false);

  const handleClose7 = () => setShow7(false);
  const handleShow7 = (id) =>{
    setJDnumber(id)
     setShow7(true);}
  const [show8, setShow8] = useState(false);

  const handleClose8 = () => setShow8(false);
  const handleShow8 = (id) =>{ 
    setJDnumber(id)
    setShow8(true);}
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        
        <Container className='myprofile' >
          <Button variant='success' as={Link} to='/filter-jd-master'><i className='fa fa-filter'>Filter</i></Button>
          <Button className='mb-2 mx-5' variant='danger'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fas fa-download' /></CSVLink></Button>
         </Container>
         
         <div className='jd-wraper' >  
       <Container fluid className='table-data'>
       
        <Table responsive className='data-table' hover >
            <thead>
                <tr>
                  <th></th>
                <th>JD number</th>
                <th>Company</th>
                            <th>Assured Delivery Date-Time </th>
                            <th>Client details</th>
                            <th>Username who accepted the JD</th>
                            <th>UserID who accepted the JD</th>
                            <th>JD status </th>
                            
                            <th>Category</th>
                            <th>Force to use our database? </th>
                            <th>Exclusivity</th>
                            <th> Cvs quality check</th>
                          
                            <th>priority tag(P) </th>
                            <th>JD details</th>
                           <th>Client ID</th>
                            
                            
                            <th>Job description </th>
                            <th>Terms of JD</th>
                            <th>remarks/comments</th>
                            <th>Client Coordination </th>
                            <th>Admin spoc </th>
                            <th>Client Spoc</th>
                            <th>Client Email List</th>
                          
                            <th>Allow one candidate submission by user?  </th>
                            <th>JD Acceptance</th>
                            <th>Submission Date</th>
                            <th>Exchange notes with admin</th>
                            <th>Feedback from admin </th>
                            <th>Cvs quality approval</th>
                            <th>Status as per User</th>
                            <th>Submit</th>
                            <th>Offer</th>
                            <th>Payout</th>
                            <th>JD upload date-time</th>
                            <th>Clientspoc mobile,number to be disclosed to user for this JD?</th>
                            <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
              {getdata.map((jd)=>{
                
                return(
                  <>            <tr>
               <td><Form.Check type='checkbox'></Form.Check></td>
                    <td>{jd.JDnumber}</td>
                    <td   className='position'>{jd.company_name} <td className='absolute'> <span className='d-flex'> 
            
            <i className="fas fa-globe me-2" as={Link} to="'/www.talenttracker.com" ></i> | <i className="fab fa-linkedin ms-2 me-2" as={Link} to='/'></i> | <i className="fas fa-info-circle ms-2"  onClick={() => HandleShow4(jd._id)}></i>  </span></td></td>
                    <td>{jd.AssuredDeliveryReqByClient}</td>
                    <td>client details</td>
                     
                    <td>user Name</td>
                    
                    <td>76543456</td>
                    <td>{jd.status}</td>
                    <td>{jd.UserCategory}</td>
                    <td >{jd.ourdatabaseUsed}</td>
                    <td>{jd.exclusivity}</td>
                      <td>{jd.CVqualcheckreqbyAdmin}</td>
                      <td>{jd.prioritytag}</td>


                    <td  onClick={() => HandleShow1(jd._id)} style={{color:'green', textDecoration:'underline'}}><i className='fa fa-briefcase'></i></td>
                    <td>{jd.clientId}</td>
                                      
                   
                    <td >{jd.JDdes}</td>
                    <td onClick={()=>handleShow5(jd.JDnumber)} style={{color:'orange', textDecoration:'underline'}}><i className='fa fa-eye'></i></td>
                   
                    <td>{jd.remarks}</td>
                    
                    
                    <td>{jd.clientcoordtobedoneby}</td>
                    <td onClick={()=>handleShow6(jd.JDnumber)} style={{color:'brown' ,textDecoration:'underline'}}><i className='fa fa-user'></i></td>
                    <td onClick={()=>handleShow7(jd.JDnumber)} style={{color:'black' ,textDecoration:'underline'}}><i className='fas fa-user-circle'></i></td>
                    <td>{jd.clientEmailListTo}</td>
                    <td>{jd.allowonecandidatesubmbyuser}</td>
                    <td  onClick={()=>handleShow3(jd.JDnumber)} style={{color:'red', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                    <td ></td>
                    <td ><Button variant='success' onClick={()=>handleShow8(jd.JDnumber)} >AddText</Button></td>
                    <td >{jd.feedback}</td>
                    <td ><Button variant='warning' as={Link} to="/">Approve</Button></td>
                    <td></td>
                    <td><Button variant='warning' as={Link} to='/jd-template'><i className='fa fa-paper-plane'></i></Button></td>
                    <td  onClick={handleShow2} style={{color:'blue', textDecoration:'underline'}}><i className='fa fa-info-circle'></i></td>
                  
                  
                    <td>Payout </td>
                    <td>{jd.JDuploadDate}
                    {jd.JDuploadtime}</td>
                    <td>{jd.mobiledisclosed}</td>
                    <td>  <Button variant='primary' as={Link} to={`/edit-jd-master/${jd._id}`}><i className='fa fa-edit'></i></Button></td>
                    
                   <td> <Button variant='danger' onClick={()=>deleteJD(jd._id)}><i className='fa fa-trash'></i></Button></td>    
                </tr>
                </>
                )
              })}

                </tbody>
            </Table>
            
            
            
            </Container>
            </div>
            <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getdata.map((JD)=>{
            if(JD._id==jddetail){
            
            return(<>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href={`${JD.Clientcompanywebsite}`} className='mx-3'>{JD.Clientcompanywebsite}</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href={`${JD.linkendInUrl}`} className='mx-3'>{JD.linkendInUrl}</a>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Client company name to be disclosed to the candidate?: <span className='text-muted'> {JD.companynamedisclosed}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Experience: <span className='text-muted'>{JD.totalexperience}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary: <span className='text-muted'> {JD.SalaryBudget}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> {JD.education}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work Location: <span className='text-muted'>{JD.JDlocation}</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted'>{JD.roundsofinterview}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-home"></i> Industry: <span className='text-muted'> services</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="	far fa-address-card"></i> list of preferred companies to source candidates: <span className='text-muted'>{JD.listofCompany}</span></h6>
            
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-book me-2"></i> JD Tittle: <span className='text-muted'> {JD.JDtitle}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Mininum number of submissions required: <span className='text-muted'> {JD.minnumcvsubm}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i>Audio JD: <span className='text-muted'> {JD.Clientcompanywebsite}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> {JD.noticeperiodprefgivenbyclient}</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-user"></i> admin spoc)
: <span className='text-muted'> {JD.Clientcompanywebsite}</span></h6>
            </Col>
            </Row>
            </>)} })}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Offer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
                <h6 className='fw-bold mt-5 mx-3'> Todays Date Time :<span className='text-muted'> 22/05/2022  12:00pm</span> </h6>
                <h6 className='fw-bold mt-5 mx-3'> Jd Number :<span className='text-muted'> 10065432</span> </h6>
                <h6 className='fw-bold mt-5 mx-3'> User ID :<span className='text-muted'> 100765</span></h6>
                <h6 className='fw-bold mt-5 mx-3'> Candidate ID :<span className='text-muted'> 100765432</span> </h6>
            
            <h6 className='fw-bold mt-5 mx-3'>  Client ID :<span className='text-muted'> 1007654rui</span></h6>
            
            <h6 className='fw-bold mt-5 mx-3'>  Offer Candidate Name :<span className='text-muted'> john</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Offered Designation :<span className='text-muted'> 100</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Candidate Work Location: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offered CTC: <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Sign up Rate :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Base Invoice Value: <span className='text-muted'> 6788</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Offer Accepted?: <span className='text-muted'> yes</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> DOJ :<span className='text-muted'> 12-march-2021</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Resigned?: <span className='text-muted'> NO</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Copy Of Resignation Received?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User Incentives :<span className='text-muted'> 10000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Joined?: <span className='text-muted'> No</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> User comments/remarks: <span className='text-muted'> good</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>JD Acceptance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {viewjd.map((lockjd)=>{
            if(lockjd.JDNo==jdNumber)
            return(<>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> User ID who accepted the JD :<span className='text-muted'> {lockjd.userId}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  User name who accepted the JD: <span className='text-muted'> Delhi</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Date time of accepting : <span className='text-muted'> 20,000</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Assured delivery date-time :<span className='text-muted'> 20%</span></h6>
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> payout :<span className='text-muted'> 20%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>User has chosen to use Own portal/our portal : <span className='text-muted'> 6788</span></h6>
           
            </Col>
            </Row>
            </>)
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      //model4 
      
      <Modal show={show4} onHide={handleClose4} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        {getdata.map(function(JD){
          if(JD._id==JDDetail){
          return(<> 
    
            <Row>
                {/* <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Tittle :<span className='text-muted'> Talent</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Industry: <span className='text-muted'> Services</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-browser me-2"></i>Client Name : <span className='text-muted'> Isha</span></h6>
            
            </Col> */}

            </Row>
            <Row>
                <Col xs={6}>
                

                  
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
               <Form.Control type='text' value= {JD.clientId} />
                </Col>
                
               
              </Row>
              <Row>
              <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Name</Form.Label>
                <Form.Control type='text' value={JD.company_name}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List of preferred companies to source candidate  </Form.Label>
                <Form.Control type='text' value={JD.listofCompany}/>
                </Col>
               
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company linkedin URL </Form.Label>
                <Form.Control type='text' value={JD.linkendInUrl}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>sign up rate with client</Form.Label>
                <Form.Control type='text' value={JD.client_signup_rate}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Replacement period</Form.Label>
                <Form.Control type='text' value={JD.replacement_priod}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Payment Terms</Form.Label>
                <Form.Control type='text' value={JD.payment_terms}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>client company address </Form.Label>
                <Form.Control type='text' value={JD.companyadress}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Industry</Form.Label>
                <Form.Control type='text' value={JD.industry}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Company type</Form.Label>
                <Form.Control type='text' value={JD.companyType}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size</Form.Label>
                <Form.Control type='text' value={JD.companySize}/>
                </Col>
              </Row>
              <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc1Name}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc2Name}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc3Name}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc1Email}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc2Email}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc3Email}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc1MobileNumber}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text'value={JD.ClientSpoc2MobileNumber}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc3MobileNumber}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc1Designation}/>        
          
            
            </Col>
            <Col xs={8}>
               <Form.Label className=''>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc2Designation}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' value={JD.ClientSpoc3Designation}/>        
          
            
            </Col>
            </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number to be disclosed to user for this JD? (Y/N)</Form.Label>
                <Form.Control type='text' value={JD.mobiledisclosed}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company website</Form.Label>
                <Form.Control type='text' value={JD.Clientcompanywebsite}/>
               
               </Col>
              
              </Row>
              </>)}  })}  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show5} onHide={handleClose5} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" >Terms Of JD</i></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {getdata.map(function(term){
          if(term.JDnumber==jdNumber){
          return(<>
            <Row>
                <Col xs={6}>
                         
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Notice Period preference given by client :<span className='text-muted'> {term.noticeperiodprefgivenbyclient}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>  Sign up rate with client: <span className='text-muted'>{term.client_signup_rate}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i>Payment term : <span className='text-muted'> {term.payment_terms}</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Replacement period :<span className='text-muted'> {term.replacement_priod}</span></h6>
           
            
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Number of submission required : <span className='text-muted'> {term.minnumcvsubm}</span></h6>
            {/* <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Your Payout :<span className='text-muted'> 20%</span></h6> */}
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i>Assured delivery required by the client(TAT): <span className='text-muted'>{term.AssuredDeliveryReqByClient}</span></h6>
           
            </Col>
            </Row>
            </>)}})}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Admin Spoc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {getdata.map(function(spoc){
          if(spoc.JDnumber==jdNumber){
          return(<>
    
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Name</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1Name}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Email</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1Email}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Mobile Number</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1MobileNumber}/>        
          
            
            </Col>
            </Row>
            </>)}})}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Admin Spoc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {getdata.map(function(spoc){
          if(spoc.JDnumber==jdNumber){
          return(<>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1Name}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc2Name}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc3Name}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1Email}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc2Email}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc3Email}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1MobileNumber}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc2MobileNumber}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc3MobileNumber}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc1Designation}/>        
          
            
            </Col>
            <Col xs={8}>
               <Form.Label className=''>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc2Designation}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' value={spoc.ClientSpoc3Designation}/>        
          
            
            </Col>
            </Row>
            </>)}})}
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
            show={show8}
            size="lg"
            onHide={handleClose8}
            backdrop="static"
            keyboard={false} >
            <Modal.Header closeButton>
              <Modal.Title>Exchange notes with admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Control as="textarea" rows={3} />
                </Form>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default JdMaster