import React, {useState, useEffect} from 'react'
import { Container, Table, Modal, Button, Form, Row, Col } from 'react-bootstrap'
import {  ButtonGroup} from 'react-bootstrap';
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";
import {  Radio, Rating } from "./RatingStyles";
import './MyProfile.css'
import { Link, useNavigate } from 'react-router-dom';
import {CSVLink} from "react-csv"
import axios from 'axios';
import userEvent from '@testing-library/user-event';

const RecruiterMaster = () => {
  const navigate=useNavigate();
//view all user
  const [getdata,setgetdata] = useState([]);
  
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/allUser");
 
     setgetdata(res.data);
    }
    fetchPost();
     },[]);

//view admin assign information
  const [adminassign,setadminassign] = useState([]);
  
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/allUser");
 
     setadminassign(res.data);
    }
    fetchPost();
     },[]);
   

//submit user Rating ***
const submithandleform = (e) =>{
  e.preventDefault();
  axios.post('http://162.240.67.205:5000/api/addRating',{
    
    category:user.category,
    userId:user.userId,
    date:user.date,
    rparamiter:user.rparamiter,
    rating:rate,
    
    
  }).then(res=>{
    if(res && res.status===200){
  navigate('/');
  }
   
  else{
    alert("try again")
  }
  })
  
      
    } 
    const [user, setUser]=useState({
      category:"",
      userId:"",
      date:"",
      rparamiter:"",
      
      
    
    })
    function handle(e){
      const newuser={...user}
      newuser[e.target.id]=e.target.value
    setUser(newuser)
    }

  const Studentlist = [
    {id:1, Date:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"User Id ", key:"id"},
    {label:"User Name ", key:"Clientname"},
    {label:"Date of addition", key:"LastAppraisal"},
    {label:"User Category", key:"RecuriterID"},
    {label:"How many Jd's", key:"id"},
    {label:"Cv quality check", key:"Candidatename"},
    {label:"Admin assigned information", key:"Candidatename"},
    {label:"Rating", key:"id"},
    {label:"Consultancy or Individual", key:"Candidatename"},
    {label:"Mobile No.", key:"candidatename"},
    {label:"Current location", key:"JDlocation"},
    {label:"Prefrence IT/non-IT", key:"candidatename"},
    {label:"Personal Information", key:"candidatename"},
    {label:"Work information", key:"candidatename"},
    {label:"Bank Details", key:"candidatename"}
   

]
const csvReport = {
  filename: 'Studentlist.csv',
  headers: headers,
  data: Studentlist
}

  const [rate, setRate] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
//admin assing information Show
const [assingId, setassingId]=useState([])
console.log(assingId)
const adminAssign=(id)=>{

  setassingId(id);
  setShow(true);
}

    const notify = () => toast.success("saved");
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = (id) => {
      setuserid(id)
      setShow1(true);}

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
//--------------------work informaton-------------------
const [work, setwork]=useState([]);
const [workId, setworkId]=useState([])

useEffect(()=>{
  const fetchPost= async ()=>{
   const res = await axios.get("http://162.240.67.205:5000/api/findUserwork");

   setwork(res.data);
  }
  fetchPost();
   },[]);

const workinformation=(id)=>{
setworkId(id)
setShow2(true);
}

    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const [Bank, setBank] = useState([]);
    const [userid, setuserid]=useState([]);

      useEffect(()=>{
        const fetchPost= async ()=>{
         const res = await axios.get("http://162.240.67.205:5000/api/findBankdetail");
     
         setBank(res.data);
        }
        fetchPost();
         },[]);
    

   const backdetail=(userIDdata)=>{
    
    setuserid(userIDdata)
    setShow3(true);
    }
   

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    
    
    const handleShow4 = (id) => {
      setworkId(id)

      setShow4(true);}
   
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container>
          <div className='top-button'>
       
            <div className='mb-2'>
            
          <ButtonGroup>
            <Button variant='success'  as={Link} to='/Filter' className=' mb-3 mt-3'><i className="fa fa-filter me-2" style={{color:'#fff'}} ></i>Filter</Button>
            
          </ButtonGroup>
         
          <Button variant='danger' className='mx-5 mb-3 mt-3'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
            </div>
            </div>
            </Container>
            <div className='jd-wraper' >  
       <Container fluid className='table-data'>
       
        <Table responsive className='data-table' hover >
            <thead>
                <tr>
                  <th></th>
                    <th>User Id</th>
                    <th>User name</th>
                    <th>Date Of adddition </th>
                    <th>User Category</th>
                    <th>How Many JD's</th>
                    <th>Cv Quality Check</th>
                    <th>Admin Assigned Information</th>
                    <th>Rating</th>
                    <th>Consultancy or Individual</th>
                    <th>Mobile No.</th>
                    <th>Current Location</th>
                    <th>Prefrence IT/NON-IT</th>
                    <th>Personal Information</th>
                    <th>Work Information</th>
                    
                    <th>Bank Details</th>
                    
                </tr>
            </thead>

            <tbody>
              {getdata.map((user)=>{

return(<>
                <tr>
                  <td><Form.Check type='checkbox'/></td>
                    <td>{user.userId}</td>
                    <td>{user.firstname}</td>
                    <td>{user.date}</td>
                     <td>{user.Acategory}</td>
                    <td>{user.AmaxJDinaday}</td>
                    <td>{user.ACVqualityCheck}</td>
                    <td  onClick={()=>adminAssign(user.userId)} style={{color:'blue', textDecoration:'underline'}}><i class="fa fa-user" aria-hidden="true"></i></td>
                    <td  onClick={()=>handleShow4(user.userId)} style={{color:'yellow', textDecoration:'underline'}}><i class="fa fa-star" aria-hidden="true"></i></td>
                    <td>{user.WIInd_Or_Consul}</td>
                    <td>{user.number}</td>
                    <td>{user.cLocation}</td>
                    <td>{user.WIpref}</td>
                    <td onClick={()=>handleShow1(user.userId)} style={{color:'orange', textDecoration:'underline'}}><i class="fa fa-address-book" aria-hidden="true"></i></td>
                    <td onClick={()=>workinformation(user.userId)} style={{color:'red', textDecoration:'underline'}}><i class="fa fa-briefcase" aria-hidden="true"></i></td>
                    <td onClick={()=>backdetail(user.userId)} style={{color:'green', textDecoration:'underline'}}><i class="fa fa-home" aria-hidden="true"></i></td>
                </tr>
                </>)

              })}
            </tbody>
        </Table>
         </Container>
         </div>
       
        <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Admin Assigned Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        {getdata.map((assign)=>{
            if(assign.userId==assingId){
              return(<>
        <form>
         
            <Row>
              <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3' >User Category :<span className='text-muted'> {assign.Acategory}</span></h6 >
                
                <h6 className='fw-bold mt-5 mb-5 mx-3'>How many JDs a user can unlock in a day? :<span className='text-muted'> {assign.AmaxJDinaday}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>CVs quality check required for this user ID? :<span className='text-muted'> {assign.ACVqualityCheck}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Detail JD (doc, pdf file sent by client) to be shown to a particular user even if he or she is  accepting the JD?  :<span className='text-muted'> {assign.AJDprivilege}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3' >Password :<span className='text-muted'> {assign.Adefpassword}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Suspension of user account :<span className='text-muted'> 20%</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to remove candidate’s mobile number from the tracker sheet :<span className='text-muted'> {assign.Armvmobno}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to write special remarks, comments in the tracker sheet :<span className='text-muted'> {assign.Awrite}</span></h6 >
                </Col><Col xs={6}><h6 className='fw-bold mt-5 mb-5 mx-3'>Admin can make it compulsory for user to use own / our database :<span className='text-muted'> {assign.ComUsedOnDatabase}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Don't allow user to edit the status :<span className='text-muted'>{assign.Aupdtstatus}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Payout :<span className='text-muted'> {assign.fixedpayout}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Designation :<span className='text-muted'> {assign.Adesignation}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>System generated Official email ID of user :<span className='text-muted'> {assign.Aemail}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow one candidate submission by user? :<span className='text-muted'> {assign.Aonecandidatesubm}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Client Spoc mobile number to be shown to this user? :<span className='text-muted'> yess</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>The user is a consultancy or individual?:<span className='text-muted'> {assign.WIInd_Or_Consul}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Allow user to update the “status” field in “My Workspace :<span className='text-muted'> {assign.Aupdtstatus}</span></h6 >
                <h6 className='fw-bold mt-5 mb-5 mx-3'>Client coordination :<span className='text-muted'> {assign.Aclientcoord}</span></h6 >
                </Col></Row>
               
        </form>  </>) }
               
              })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {getdata.map((Pinfo)=>{
            if(Pinfo.userId==userid){
              return(<>
          <Container>
            <Row>
              <Col xs={6}>
        <Form.Label className='fw-bold mb-3 mt-3'>First Name </Form.Label>
          <Form.Control type='text' value={Pinfo.firstname}/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Last Name </Form.Label>
          <Form.Control type='text'value={Pinfo.lastname}/>
          </Col>
          </Row>
          <Row>
            <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Personal Email</Form.Label>
          <Form.Control type='text' value={Pinfo.email}/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Mobile Number</Form.Label>
          <Form.Control type='text' value={Pinfo.password}/>
          </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <Form.Label className='fw-bold mb-3 mt-3'>Current Location-City,State</Form.Label>
          <Form.Control type='text' value='patna , Bihar'/>
          </Col>
          <Col xs={6}>
          <Form.Label className='fw-bold mb-3 mt-3'>Password</Form.Label>
          <Form.Control type='password' value={Pinfo.password}/>
          </Col>
          </Row>
          </Container>
          </>)}})}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/* ------------------------------------------------Work Information---------------------------------------------------------------------------------------------------- */}
     
      
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Work Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {work.map((workinfo)=>{
            if(workinfo.userId==workId){
              return(<>
          <Container>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Highest Qualification</Form.Label>
        <Form.Control type='text'  value={workinfo.WIHighestQualification}/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Graduation</Form.Label>
        <Form.Control type='text' value={workinfo.WIGraduation}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Date of Birth</Form.Label>
        <Form.Control type='text' value={workinfo.WIdob}/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Languages Known</Form.Label>
        <Form.Control type='text' value={workinfo.WIlanguage}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>No. of Years Recruitment Experience (india/International)</Form.Label>
        <Form.Control type='text' value={workinfo.WIrecexp}/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>preferred sectors to JDs? - IT/non IT/ Both</Form.Label>
        <Form.Control type='text' value={workinfo.WIpref}/>
              </Col>
            </Row>
            <Row>
              
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Currently employed for some organization as a full time employee?</Form.Label>
        <Form.Control type='text' value={workinfo.WIcurrempstatus}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Are you a consultancy or an individual?</Form.Label>
        <Form.Control type='text' value={workinfo.WIInd_Or_Consul}/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>Do you have Own portal for candidate sourcing? (Naukri, Monster,  Times jobs, shine etc?)</Form.Label>
        <Form.Control type='text' value={workinfo.WIOwnportalavailable}/>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>preferred industries to take JDs? 
</Form.Label>
        <Form.Control type='text' value='services'/>
              </Col>
              <Col xs={6}>
              <Form.Label className='fw-bold mb-3 mt-3'>handle PAN India JDs or only regional?</Form.Label>
        <Form.Control type='text' value='yes'/>
              </Col>
           </Row>
                              
              
        </Container>
        </>) }
               
              })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>User Bank Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <form>
{Bank.map((userBank)=>{
  if(userBank.userId==userid)
  return(<>
            
      
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Name as per bank account</Form.Label>
                        <Form.Control type="text" value={userBank.BDnameasba}></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Bank Name</Form.Label>
                        <Form.Control type="text" value={userBank.BDNameofbank}></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Number</Form.Label>
                        <Form.Control type="text" value={userBank.BDaccno}></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> IFSC</Form.Label>
                        <Form.Control type="text" value={userBank.BDIFSC}></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Account Type</Form.Label>
                        <Form.Control type="text" value={userBank.BDNameofbank}></Form.Control>
                    </Col>
                    <Col sx={6}>
                        <Form.Label className='fw-bold mb-3 mt-3'> Branch Location</Form.Label>
                        <Form.Control type="text" value={userBank. BDbranchloc}></Form.Control>
                    </Col>
                </Row>
                </>)
})}
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

{/* -----------------------------------------Rating ------------------------------------------------- */}

      <Modal show={show4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form onSubmit={(e)=>submithandleform(e)}>
                 
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Category</Form.Label>
                        <Form.Select aria-label="Default select example" value={user.category} id='category' onChange={(e)=>handle(e)}>
                    <option>select</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    </Form.Select>

                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>User ID</Form.Label>
                        <Form.Control type='text' placeholder='Enter your user Id'  value={workId} id='userId' onChange={(e)=>handle(e)}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Months & Year</Form.Label>
                        <Form.Control type='date' placeholder=' Enter Months & Year' value={user.date} id='date' onChange={(e)=>handle(e)}/>
                        </Col>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Rating Parameter</Form.Label>
                        <Form.Control type='text' placeholder=' Out of 10' value={user.rparamiter} id='rparamiter' onChange={(e)=>handle(e)}/>
                        <i className='fas fa-star'  />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    {/* <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' /> */}
             
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                        <Form.Label className='fw-bold mb-3'>Final Rating</Form.Label>
                        
                        <Container>
      {[...Array(10)].map((item, index) => {
        const rating = index + 1;
        return (
          <label>
            <Radio
              type="radio" 
              onClick={() => {
                setRate(rating);
               
              }}
            />
            <Rating>
              <FaStar
                color={
                  rating < rate || rating === rate
                    ? "FFDF00"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
                   
          
                        </Col>
                        <Button type='submit' variant="primary" onClick={handleClose4} >
            Save 
          </Button> 
                    </Row>
                </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        
    </div>
  )
}

export default RecruiterMaster