import React, {useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button, InputGroup,FormControl,Dropdown} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import axios from 'axios'
// import Select from 'react-select'
 import {useNavigate} from 'react-router-dom'

import "./Dashboard.css";
const Dashboard = () => {
  const navigate=useNavigate();
  const [getdata,setgetdata] = useState([]);
const [getCode, setCode]=useState([])
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/allClient");
 
         setgetdata(res.data);
    }
    fetchPost();
     },[]);
//code
const [client_Id, SetClient_Id]= useState()

const code=Math.floor(Math.random()*90000000)+10000000;
   
    useEffect(()=>{
     SetClient_Id(code)
    },[])




  const [checked, Setchecked]=useState(false)
  const handleCheck = () => Setchecked(!checked)
  const [checked1, Setchecked1]=useState(false)
  const handleCheck1 = () => Setchecked1(!checked1)
  const [checked2, Setchecked2]=useState(false)
  const handleCheck2 = () => Setchecked2(!checked2)
  const [checked3, Setchecked3]=useState(false)
  const handleCheck3 = () => Setchecked3(!checked3)
  const [checked4, Setchecked4]=useState(false)
  const handleCheck4 = () => Setchecked4(!checked4)
  const [checked5, Setchecked5]=useState(false)
  const handleCheck5 = () => Setchecked5(!checked5)
  const [checked6, Setchecked6]=useState(false)
  const handleCheck6 = () => Setchecked6(!checked6)
  const [checked7, Setchecked7]=useState(false)
  const handleCheck7 = () => Setchecked7(!checked7)
  const [checked8, Setchecked8]=useState(false)
  const handleCheck8 = () => Setchecked8(!checked8)
  const [checked9, Setchecked9]=useState(false)
  const handleCheck9 = () => Setchecked9(!checked9)
  const [checked10, Setchecked10]=useState(false)
  const handleCheck10 = () => Setchecked10(!checked10)
  const [checked11, Setchecked11]=useState(false)
  const handleCheck11 = () => Setchecked11(!checked11)

 
  const [selected8, Setselected8]=useState(false)
  const handleselected8 = () => Setselected8(!selected8)


  const submithandleform = (e) =>{
    e.preventDefault();
    const defaultemail=user.firstname+"."+user.lastname+"@talenttracker.in";
    axios.post('http://162.240.67.205:5000/api/users',{
      
      firstname:user.firstname,
      lastname:user.lastname,
      email:user.email,
      password:user.password,
      gender:user.gender,
      cLocation:user.cLocation,
      countryCode:user.countryCode,
      number:user.number,
      Aemail:defaultemail
     })
     .then((response) => {
      if (response && response.status === 200) {
      
        console.log(response.data)
        if (response.data) {
         
          const data = response.data;
          console.log(data)
          alert("sucessfully inserted")
      
    navigate('/');
        
        }
      }
    })
    .catch((error) => {
      if (
        error.response &&
        error.response.data &&
        error.response.status
      ) {
        console.log(error.response.data.status);
       
           alert("Email id allready exists")
      }
    });
    
    
    
    
    
    
        
      } 
    
    
      const [user, setUser]=useState({
        clientId:"",
        JDnumber:"",
      
        company_name:"",
        
      listofCompany:"",
      linkendInUrl:"",
      client_signup_rate:"",
      replacement_priod:"",
      
      payment_terms:"",
      companyadress:"",
      industry:"",
        
        companyType:"",
        companySize:"",
        ClientSpoc1Name:"",
        ClientSpoc2Name:"",
        ClientSpoc3Name:"",
        ClientSpoc1Email:"",
        ClientSpoc2Email:"",
        ClientSpoc3Email:"",
        ClientSpoc1MobileNumber:"",
        ClientSpoc2MobileNumber:"",
        ClientSpoc3MobileNumber:"",
        ClientSpoc1Designation:"",
        ClientSpoc2Designation:"",
        ClientSpoc3Designation:"",
        mobiledisclosed:"",
        Clientcompanywebsite:"",
        companynamedisclosed:"",
        UserCategory:"",
        ourdatabaseUsed:"",
      
        exclusivity:"",
        CVqualcheckreqbyAdmin:"",
        prioritytag:"",
        JDuploadDate:"",
        JDuploadtime:"",
        JDdes:"",
        JDtitle:"",
        SalaryBudget:"",
        education:"",
        totalexperience:"",
        JDlocation:"",
        roundsofinterview:"",
        noticeperiodprefgivenbyclient:"",
        minnumcvsubm:"",
        allowonecandidatesubmbyuser:"",
        noofworkingdays:"",
        status:"",
        feedback:"",
        rework:"",
        noofvacancies:"",
        clientcoordtobedoneby:"",
        AssuredDeliveryReqByClient:"",
        remarks:"",
        clientEmailListTo:"",
        clientEmailListCC:"",
        JDaudio:"",
        percentPayoutForIndIfusetalenttrackerdatabase:"",
        percentPayoutForconsulIfusetalenttrackerdatabase:"",
        percentPayoutForIndIfuseownportal:"",
        percentPayoutForconsulIfuseownportal:"",
        absSayForindIfusetalenttrackerdatabase:"",
        absPayForconsulIfusetalenttrackerdatabase:"",
        abspayForIndIfuseownportal:"",        abspayforconsulifuseownportal:"",
        preferredcompanyList:"",
         companyadress:"",
        
      
      })
      function handle(e){
        const newuser={...user}
        newuser[e.target.id]=e.target.value
      setUser(newuser)
      }
    
  
  // const options = [
  //   { value: 'Services', label: 'Services' },
  //   { value: 'Manufacturing', label: 'Manufacturing' },
  //   { value: 'IT- Information Technology', label: 'IT- Information Technology' },
  //   { value: 'Education', label: 'Education' },
  //   { value: 'Real estate/Construction', label: 'Real estate/Construction' },
  //   { value: 'Finance/BFSI', label: 'Finance/BFSI' },
  //   { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
  //   { value: 'Retail', label: 'Retail' },
  //   { value: 'Hospitality', label: 'Hospitality' },
  //   { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
  //   { value: 'FMCG', label: 'FMCG' },
  //   { value: 'Textile', label: 'Textile' },
  //   { value: 'Telecom', label: 'Telecom' },
  //   { value: 'logistics/supply chain', label: 'logistics/supply chain' },
  //   { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
  //   { value: 'Others', label: 'Others' },
  //   { value: 'Create', label: 'Create' }
  
  // ]
  
  return (
    <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
            <form action="http://162.240.67.205:5000/api/addJd" method="post" encType='multipart/form-data'>
            <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID  </Form.Label>
               
                <Form.Control type='text' placeholder='   ' name="clientId" onChange={e => setCode(e.target.value)} />
                </Col>
                {getdata.map((client)=>{
                  if(client.client_id==getCode){
                  return(<>
                 

                 
              <Row>

                
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3' >JD number  </Form.Label>
                <Form.Control type='text' placeholder=' Number  ' name="JDnumber" value={"JD-"+client_Id} />
                </Col>
               
              </Row>
              <Row>
              <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3' name="company_name" >Company Name </Form.Label>
                <Form.Control type='text' name="company_name" value={client.client_name}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List of preferred companies to source candidate  </Form.Label>
                <Form.Control type='text'  name="listofCompany" value={client.listOfPreferredCompaniesSourceCandidate} />
                </Col>
               
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company linkedin URL </Form.Label>
                <Form.Control type='text' name="linkendInUrl" value={client.client_company_linked_url}  />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>sign up rate with client</Form.Label>
                <Form.Control type='text' name='client_signup_rate' value={client.Agreed_signup_rate}  />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Replacement period</Form.Label>
                <Form.Control type='text'  name='replacement_priod' value={client.Agreed_replacement_period} />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Payment Terms</Form.Label>
                <Form.Control type='text' name='payment_terms' value={client.Agreed_payment_term}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>client company address (City, state) </Form.Label>
                <Form.Control type='text' name='companyadress' value={client.company_address} />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Industry</Form.Label>
                <Form.Control type='text' name="industry" value={client.client_industry} />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Company type</Form.Label>
                <Form.Control type='text' name="companyType" value={client.client_type}  />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size</Form.Label>
                <Form.Control type='text' name="companySize" value={client.company_size} />
                </Col>
              </Row>
              <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' name='ClientSpoc1Name' value={client.client_spoc} />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' name='ClientSpoc2Name' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' name='ClientSpoc3Name' />        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' name='ClientSpoc1Email' value={client.client_spoc_email_id}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' name='ClientSpoc2Email'  />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' name='ClientSpoc3Email'/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' name='ClientSpoc1MobileNumber' />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text' name='ClientSpoc2MobileNumber' />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' name='ClientSpoc3MobileNumber' />        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' value='na' name='ClientSpoc1Designation'
                />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' name='ClientSpoc2Designation' />        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className=''>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' name='ClientSpoc3Designation' />        
          
            
            </Col>
            </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number to be disclosed to user for this JD? (Y/N)</Form.Label>
                <Form.Control type='text' name='mobiledisclosed' value={client.client_spoc_Mobile_number}
               />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company website</Form.Label>
                <Form.Control type='text' name='Clientcompanywebsite' value={client.client_company_website} />
                </Col>
               
              </Row>
            <Row>
                
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company name to be disclosed to the candidate? </Form.Label>
                <Form.Control type='text' name='companynamedisclosed'  />
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD should be shown to which User Category?</Form.Label>
                <Form.Select aria-label="Default A example" name='UserCategory' >
                    
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="A&B">A&B</option>
                    <option value="B&C">B&C</option>
                    <option value="C&A">C&A</option>
                    <option value="A,B&C">A,B&C</option>
                    <option value="In house">In house</option>
                    <option value="A,B,C&In house">A,B,C&In house</option>
                    <option value="A & In house"> A & In house</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Force to use our database?</Form.Label>
                <Form.Check type="checkbox" label="You must use our database etc for this JD " />
                
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity </Form.Label>
                <Form.Select aria-label="Default 1 example" name='exclusivity'>
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">10</option>
                    <option value="unlimited">unlimited</option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check required by Admin? </Form.Label>
                <Form.Select aria-label="Default  example" name='CVqualcheckreqbyAdmin'>
                    
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>priority tag (P) </Form.Label>
                <Form.Check type="checkbox" label="Hot" value="p" name='prioritytag' />
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date  </Form.Label>
                <Form.Control type="date" name='JDuploadDate'/>
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Time</Form.Label>
                  <Form.Control type="time"  name='JDuploadtime'/>
                </Col>
                </Row>
                </Col>
              </Row>
             
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Job description</Form.Label>
                <i class="fa fa-paperclip" aria-hidden="true" ></i>
                <Form.Control type='file' name='JDdes'/>
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD Title</Form.Label>
                <Form.Control type='text' name='JDtitle' placeholder='  '/>
                </Col>
              </Row>
            
              <Row>
               
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Salary Budget -Lacs per annum </Form.Label>
                <Form.Control type='text'name='SalaryBudget' placeholder=' '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Education </Form.Label>
                <Form.Control type='text' name='education' placeholder='  '/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Total Experience - Years</Form.Label>
                <Form.Control type='text' name='totalexperience' placeholder='  '/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>work location of JD  </Form.Label>
                <Form.Select aria-label="Default  example" name='JDlocation'>
                    
                    <option value="Delhi">Delhi</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Noida">Noida</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Jaipur">Jaipur</option>
                    <option>Create </option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Rounds of interview </Form.Label>
                {/* <Select isMulti options={options} /> */}
                <Form.Select aria-label="Default  example" name='roundsofinterview'>
                    
                    <option value="Telephonic">Telephonic</option>
                    <option value="Virtual(Google meet,Zoom calls , Team Meeting, Skype etc)">Virtual(Google meet,Zoom calls , Team Meeting, Skype etc)</option>
                    <option value="Face to Face">Face to Face</option>
                    <option value="Management/Hr Round">Management/Hr Round</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Notice period preference given by client  </Form.Label>
                <Form.Select aria-label="Default Immediate example" name='noticeperiodprefgivenbyclient'>
                    
                    <option value="Immediate">Immediate</option>
                    <option value="15 days">15 days</option>
                    <option value="20 days">20 days</option>
                    <option value="30days">30days</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                    </Form.Select>
                </Col>
                {/* <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Replacement period  </Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col> */}
              </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                <Form.Label  className='fw-bold mb-3 mt-3'> Minimum Number of cvs submissions required  </Form.Label>
                <Form.Select name="numberofcvs" aria-label="Default select example" >
                <option>3 </option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </Form.Select>
                </Form.Group>
                {/* <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Client Company name to disclosed to candidate</Form.Label>
                  <Form.Select name="disclosedtocandidate">
                    <option values="yes">Yes</option>
                    <option value='no'>No</option>
                  </Form.Select>
                </Form.Group> */}
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Allow one candidate submission by user? </Form.Label>
                <Form.Select aria-label="Default select example" name='allowonecandidatesubmbyuser'>
                    <option>NO</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </Form.Select>
                    <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Number of working days</Form.Label>
                  <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic" name='noofworkingdays'>
    Select
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item  >5</Dropdown.Item>
    <Dropdown.Item   >6</Dropdown.Item>
    <Dropdown.Item  onClick={handleselected8} >Create</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                   
                  {selected8? <div>
                    <Form.Control type='text' name='allowonecandidatesubmbyuser'> </Form.Control>
                    </div>:<></>}
                    
                 
                </Form.Group>
                </Col>
              </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> JD Status</Form.Label>
                    <Form.Check type="radio" label="Open (not accepted by any user) " name="status" value="open"/>
                    <Form.Check type="radio" label=" Pending delivery (accepted but not yet delivered)" name="status" value="pending"/>
                    <Form.Check type="radio" label=" Delivery done-await client feedback" name="status" value="delivery Done" />
                    <Form.Check type="radio" label=" Interview stage" name="status" value="inerview Stage"/>
                    <Form.Check type="radio" label="Offer stage " name="status" value="offer stage"/>
                    <Form.Check type="radio" label="Offer accepted - Serving Notice Period" name="status" value="offer accepted" />
                    <Form.Check type="radio" label="Joined"  name="status" value="join" />
                    <Form.Check type="radio" label="Rework (with reasons)" name="status" value="rework"/>
                    <Form.Label className='fw-bold mb-3 mt-3'> </Form.Label>
                    <Form.Select aria-label="Default  example" name='foodback'>
                    
                    <option value="CVs quality not good- No shortlisting from client for earlier submissions"> CVs quality not good- No shortlisting from client for earlier submissions </option>
                                       
                    <option value="No delivery made by the user who accepted the JD">No delivery made by the user who accepted the JD</option>
                    <option value="Client changed the JD criteria">Client changed the JD criteria</option>
                    <option value="Candidates backed out/didn’t turn up for the interview/rejected by client">Candidates backed out/didn’t turn up for the interview/rejected by client</option>
                    <option value="Delay from client in giving the feedback, now fresh sourcing required">Delay from client in giving the feedback, now fresh sourcing required</option>
                    <option value="Any other reason not covered above (text field-1000 characters for admin to enter)">Any other reason not covered above (text field-1000 characters for admin to enter)</option>
                    
                    </Form.Select> 
                    <Button variant='primary'>Create</Button>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'>Number of vacancies </Form.Label>
                    <Form.Control type='text' placeholder=' 1 ' name='noofvacancies'/>
                  
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Client Coordination</Form.Label>
                    <Form.Select aria-label="Default select example" name='clientcoordtobedoneby' >
                    <option>select</option>
                    <option value="User">User</option>
                   
                    
                    <option value="Admin">Admin</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Assured delivery time required by client (TAT)</Form.Label>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Remarks/comments</Form.Label>
                    <Form.Control type="text" placeholder='Remarks' name='remarks'></Form.Control>
                    </Col>
                    
                    <Col xs={6}>


<Form.Label className='fw-bold mb-3 mt-3'>client Email list</Form.Label>  
<Row>
  <Col xs={6}>
<InputGroup className="mb-2">
<InputGroup.Text>To</InputGroup.Text>
<FormControl id="inlineFormInputGroup" placeholder=" Email" name='clientEmailListTo'/>
</InputGroup>
</Col>
<Col xs={6}>
<InputGroup className="mb-2">
<InputGroup.Text>CC</InputGroup.Text>
<FormControl id="inlineFormInputGroup" placeholder=" Email"  name='clientEmailListCC'/>
</InputGroup>
</Col>
</Row>
</Col>
</Row>
                    {/* <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Select aria-label="Default 30days example">
                    <option>select</option>
                    <option value="1">Immediate</option>
                    <option value="1">30 days</option>
                    <option value="2">45 days</option>
                    <option value="1">60 days</option>
                    <option value="2">90 days</option>
                    </Form.Select>

                    </Col>
                
                <Row>
                 
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>create</option>
                    <option value="1">- 8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                    </Col>
                    </Row> */}
                    
                    <Row>
                      
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Audio JD</Form.Label>
                      <Form.Control type='file' name="jdaudio"  />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    {/* -------------------------Payout---------------------------------------------------------- */}
                  <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database."  value="% payout If you use Talent Tracker’s database."  onClick={handleCheck} />
                  {checked? <div>
                  
                    <Form.Check type="radio" label=" If consultancy" value="If consultancy" name='payoutType'  onClick={handleCheck4}/>
                    <Form.Check type="radio" label=" If Individual" value="If Individual" name='payoutType' onClick={handleCheck5}/>
    
  
                   </div>:<></>}
                  {checked4? <div>
                    <Form.Control type='text' name="percentPayoutForIndIfusetalenttrackerdatabase" ></Form.Control>
                    </div>:<></>}
                    
                  {checked5? <div>
                    <Form.Control type='text' name="percentPayoutForconsulIfusetalenttrackerdatabase"></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " name='percentpayoutforconsulifusetalenttrackerdatabase' value="% payout if you use your own portal- naukri/monster/times job etc" onClick={handleCheck1} />
                    {checked1? <div>
                      <Form.Check type="radio" label=" If consultancy" value="If consultancy" name='payoutType2' onClick={handleCheck6}/>
                    <Form.Check type="radio" label=" If Individual" value="If Individual" name='payoutType2' onClick={handleCheck7}/>
    
  
                   </div>:<></>}
                  {checked6? <div>
                    <Form.Control type='text' name="percentPayoutForIndIfuseownportal"></Form.Control>
                    </div>:<></>}
                    
                  {checked7? <div>
                    <Form.Control type='text' name="percentPayoutForconsulIfuseownportal"></Form.Control>
                    </div>:<></>}

                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " name='payout3' value="absolute value payout if use your own portal (Naukri/Monster/Timesjob etc)" onClick={handleCheck2} />
                    {checked2? <div>
                      <Form.Check type="radio" label=" If consultancy" value="If consultancy" name='payoutType3'  onClick={handleCheck8}/>
                    <Form.Check type="radio" label=" If Individual" value="If Individual" name='payoutType3' onClick={handleCheck9}/>
    
  
                   </div>:<></>}
                  {checked8? <div>
                    <Form.Control type='text' name="abspayForIndIfuseownportal"></Form.Control>
                    </div>:<></>}
                    
                  {checked9? <div>
                    <Form.Control type='text' name="abspayforconsulifuseownportal"></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " name='payout2' value="absolute value payout---if use Talent Trackers database." onClick={handleCheck3}/>
                    {checked3? <div>
                      <Form.Check type="radio" label=" If consultancy" value="If consultancy" name='payoutType4'  onClick={handleCheck10}/>
                    <Form.Check type="radio" label=" If Individual" value="If Individual" name='payoutType4' onClick={handleCheck11}/>
    
  
                   </div>:<></>}
                  {checked10? <div>
                    <Form.Control type='text' name="absSayForindIfusetalenttrackerdatabase"></Form.Control>
                    </div>:<></>}
                    
                  {checked11? <div>
                    <Form.Control type='text' name="absPayForconsulIfusetalenttrackerdatabase"></Form.Control>
                    </div>:<></>}
                  </Col>
                  {/* <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Industries  </Form.Label>
                  <Select isMulti options={options} />
                  </Col> */}
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client Company Address.</Form.Label>
                      <Form.Control as='textarea' />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3 ">Add a JD</Button>
                <Button variant="warning" className="mt-3 mx-5">Reset</Button>
                <Button variant="primary" className="mt-3 mx-5" type='submit'>
            <i className="fas fa-save me-3"></i>Save 
          &nbsp;&nbsp;</Button> 
            </>)}
                })}
            </form>
        </Container>
    </div>
  )
}

export default Dashboard