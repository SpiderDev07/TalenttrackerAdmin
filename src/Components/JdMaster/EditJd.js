import React,{useState, useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button , InputGroup,Modal ,FormControl} from 'react-bootstrap'
import { ToastContainer  } from 'react-toastify';
import Select from 'react-select'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const EditJd = () => {
  
  
  const [company_name, Setcompany_name] = useState([]);
  const [clientId, SetclientId] = useState([])
	
	const [JDnumber,SetJDnumber]= useState([])

const [listofCompany,SetlistofCompany]=useState([])
 
const [linkendInUrl,SetlinkendInUrl]=useState([])
const [client_signup_rate,Setclient_signup_rate]=useState([])
const [replacement_priod,Setreplacement_priod]=useState([])

const [payment_terms,Setpayment_terms]=useState([])
const [companyadress,Setcompanyadress]=useState([])
const [industry,Setindustry]=useState([])
	
	const [companyType,SetcompanyType]=useState([])
	const [companySize,SetcompanySize]=useState([])
	const [ClientSpoc1Name,SetClientSpoc1Name]=useState([])
	const [ClientSpoc2Name,SetClientSpoc2Name]=useState([])
	const [ClientSpoc3Name,SetClientSpoc3Name]=useState([])
	const [ClientSpoc1Email,SetClientSpoc1Email]=useState([])
	const [ClientSpoc2Email,SetClientSpoc2Email]=useState([])
	const [ClientSpoc3Email,SetClientSpoc3Email]=useState([])
	const [ClientSpoc1MobileNumber,SetClientSpoc1MobileNumber]=useState([])
	const [ClientSpoc2MobileNumber,SetClientSpoc2MobileNumber]=useState([])
	const [ClientSpoc3MobileNumber,SetClientSpoc3MobileNumber]=useState([])
	const [ClientSpoc1Designation,SetClientSpoc1Designation]=useState([])
	const [ClientSpoc2Designation,SetClientSpoc2Designation]=useState([])
	const [ClientSpoc3Designation,SetClientSpoc3Designation]=useState([])
	const [mobiledisclosed,Setmobiledisclosed]=useState([])
	const [Clientcompanywebsite,SetClientcompanywebsite]=useState([])
	const [companynamedisclosed,Setcompanynamedisclosed]=useState([])
	const [UserCategory,SetUserCategory]=useState([])
	const [ourdatabaseUsed,SetourdatabaseUsed]=useState([])
	 

	const [exclusivity,Setexclusivity]=useState([])  
		
	 
	const [CVqualcheckreqbyAdmin,SetCVqualcheckreqbyAdmin]=useState([])
	 
	const [prioritytag,Setprioritytag]=useState([])
	 
	const [JDuploadDate,SetJDuploadDate]=useState([])
	
	 
	const [JDuploadtime,SetJDuploadtime]=useState([])
		
	 
	const [JDdes,SetJDdes]=useState([])
	 
	const [JDtitle,SetJDtitle]=useState([])
	
	 
	const [SalaryBudget,SetSalaryBudget]=useState([])
	 
	const [education,Seteducation]=useState([])
	 
	const [totalexperience,Settotalexperience]=useState([])	 
	const [JDlocation,SetJDlocation]=useState([])
		
	 
	const [roundsofinterview,Setroundsofinterview]=useState([])
		
	 
	const [noticeperiodprefgivenbyclient,Setnoticeperiodprefgivenbyclient]=useState([])
	
	 
	const [minnumcvsubm,Setminnumcvsubm]=useState([])
	const [allowonecandidatesubmbyuser,Setallowonecandidatesubmbyuser]=useState([])
		
	 
	const [noofworkingdays,Setnoofworkingdays]=useState([])
		
	 
	const [status,Setstatus]=useState([])
	
	 
	const [feedback,Setfeedback]=useState([])
	const [rework,Setrework]=useState([])
	 
	const [noofvacancies,Setnoofvacancies]=useState([])
		
	 
	const [clientcoordtobedoneby,Setclientcoordtobedoneby]=useState([])
	const [remarks,Setremarks]=useState([])
	 
	const [clientEmailListTo,SetclientEmailListTo]=useState([])
	 
	const [clientEmailListCC,SetclientEmailListCC]=useState([])
	 
	const [JDaudio,SetJDaudio]=useState([])
	 
	const [percentpayoutforindifusetalenttrackerdatabase,Setpercentpayoutforindifusetalenttrackerdatabase]=useState([])
	 
	const [percentpayoutforconsulifusetalenttrackerdatabase,Setpercentpayoutforconsulifusetalenttrackerdatabase]=useState([])
	 
	const [percentpayoutforindifuseownportal,Setpercentpayoutforindifuseownportal]=useState([])
	 
	const [percentpayoutforconsulifuseownportal,Setpercentpayoutforconsulifuseownportal]=useState([])
	const [abspayforindifusetalenttrackerdatabase,Setabspayforindifusetalenttrackerdatabase]=useState([])
	const [abspayforconsulifusetalenttrackerdatabase,Setabspayforconsulifusetalenttrackerdatabase]=useState([])
	 
	const [abspayforindifuseownportal,Setabspayforindifuseownportal]=useState([])
	const [abspayforconsulifuseownportal,Setabspayforconsulifuseownportal]=useState([])
	const [preferredcompanyList,SetpreferredcompanyList]=useState([])

	

  const {id} = useParams();


  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get(`http://162.240.67.205:5000/api/JdbyId/${id}`);

 
     Setcompany_name(res.data.company_name);
   
	
	
SetlistofCompany(res.dada.listofCompany)
 
SetlinkendInUrl(res.dada.linkendInUrl);
// Setclient_signup_rate(res.dada.client_signup_rate)
// Setreplacement_priod(res.dada.replacement_priod)

// Setpayment_terms(res.dada.payment_terms)
// Setcompanyadress(res.dada.companyadress)
// Setindustry(res.dada.industry)
	
 	SetcompanyType(res.dada.companyType)
 	SetcompanySize(res.dada.companySize)
 SetClientSpoc1Name(res.dada.ClientSpoc1Name)
 SetClientSpoc2Name(res.dada.ClientSpoc2Name)
	SetClientSpoc3Name(res.dada.ClientSpoc3Name)
 	SetClientSpoc1Email(res.dada.ClientSpoc1Email)
 	SetClientSpoc2Email(res.dada.ClientSpoc2Email)
 SetClientSpoc3Email(res.dada.ClientSpoc3Email)
 	SetClientSpoc1MobileNumber(res.dada.ClientSpoc1MobileNumber)
 	SetClientSpoc2MobileNumber(res.dada.ClientSpoc2MobileNumber)
 	SetClientSpoc3MobileNumber(res.dada.ClientSpoc3MobileNumbe)
 	SetClientSpoc1Designation(res.dada.ClientSpoc1Designation)
 	SetClientSpoc2Designation(res.dada.ClientSpoc2Designation)
 	SetClientSpoc3Designation(res.dada.ClientSpoc3Designation)
 	Setmobiledisclosed(res.dada.mobiledisclosed)
 	SetClientcompanywebsite(res.dada.etClientcompanywebsite)
 	Setcompanynamedisclosed(res.dada.companynamedisclosed)
 	SetUserCategory(res.dada.UserCategory)
 	SetourdatabaseUsed(res.dada.ourdatabaseUsed)
	 

 	Setexclusivity(res.dada.exclusivity)
		
	 
// 	SetCVqualcheckreqbyAdmin(res.dada.CVqualcheckreqbyAdmin)
	 
// 	Setprioritytag(res.dada.prioritytag)
	 
// 	SetJDuploadDate(res.dada.JDuploadDate)
	
	
// 	SetJDuploadtime(res.dada.JDuploadtime)
		
	 
// 	SetJDdes(res.dada.JDdes)
	 
 	SetJDtitle(res.dada.JDtitle)
	
	 
	SetSalaryBudget(res.dada.SalaryBudget)
	 
	Seteducation(res.dada.education)
	 
 	Settotalexperience(res.dada.totalexperienc)	 
	SetJDlocation(res.dada.JDlocation)
		
	 
 	Setroundsofinterview(res.dada.roundsofinterview)
		
	 
	Setnoticeperiodprefgivenbyclient(res.dada.noticeperiodprefgivenbyclient)
	
	 
 	Setminnumcvsubm(res.dada.minnumcvsubm)
 	Setallowonecandidatesubmbyuser(res.dada.allowonecandidatesubmbyuser)
		
 	Setnoofworkingdays(res.dada.noofworkingdays)
		
	 
	Setstatus(res.dada.status)
	
	 
	 //Setfeedback(res.dada
	// Setrework(res.dada
	 
	// Setnoofvacancies(res.dada
		
	 
	// Setclientcoordtobedoneby(res.dada
	// Setremarks(res.dada
	 
	// SetclientEmailListTo(res.dada
	 
	// SetclientEmailListCC(res.dada
	 
	// SetJDaudio(res.dada
	 
	// Setpercentpayoutforindifusetalenttrackerdatabase(res.dada
	 
	// Setpercentpayoutforconsulifusetalenttrackerdatabase(res.dada
	 
	// Setpercentpayoutforindifuseownportal(res.dada
	 
	// Setpercentpayoutforconsulifuseownportal(res.dada
	// Setabspayforindifusetalenttrackerdatabase(res.dada
	// Setabspayforconsulifusetalenttrackerdatabase(res.dada
	 
	// Setabspayforindifuseownportal(res.dada
	// Setabspayforconsulifuseownportal(res.dada
	// SetpreferredcompanyList(res.dada



    }
    fetchPost();
     },[]);
   
   //edit
  
  //  const [picture,SetPicture]=useState({file:[]});
  
  //  const handler=(event)=>{
  //   SetPicture(event.target.files[0]);
  // }

  // const formData=new FormData();
  // formData.append("JDdes",picture);
  // console.log(formData)
 
  const UpdateHair=()=>{
  
    console.log("edit jd")
    
    axios.put(`http://162.240.67.205:5000/api/editJd/${id}`,{company_name:company_name,

    //listofCompany:listofCompany,
     
    // linkendInUrl:linkendInUrl,
    // client_signup_rate:client_signup_rate, 
    // replacement_priod:replacement_priod,
    
    // payment_terms:payment_terms,
    // companyadress:companyadress,
    // industry:industry,
      
    //   companyType:companyType,
    //   companySize:companySize, 
    //   ClientSpoc1Name:ClientSpoc1Name,
    //   ClientSpoc2Name:ClientSpoc2Name,
    //   ClientSpoc3Name:ClientSpoc3Name, 
    //   ClientSpoc1Email:ClientSpoc1Email,
    //   ClientSpoc2Email:ClientSpoc2Email,
    //   ClientSpoc3Email:ClientSpoc3Email,
    //   ClientSpoc1MobileNumber:ClientSpoc1MobileNumber,
    //   ClientSpoc2MobileNumber:ClientSpoc2MobileNumber ,
    //   ClientSpoc3MobileNumber:ClientSpoc3MobileNumber,
    //   ClientSpoc1Designation:ClientSpoc1Designation,
    //   ClientSpoc2Designation:ClientSpoc2Designation ,
    //   ClientSpoc3Designation:ClientSpoc3Designation,
    //   mobiledisclosed:mobiledisclosed,
    //   Clientcompanywebsite:Clientcompanywebsite ,
    //   companynamedisclosed:companynamedisclosed, 
    UserCategory:UserCategory, 
    //   ourdatabaseUsed:ourdatabaseUsed,
       
    
      exclusivity:exclusivity,  
        
       
    //   CVqualcheckreqbyAdmin:CVqualcheckreqbyAdmin,
       
    //   prioritytag:prioritytag,
       
    //   JDuploadDate:JDuploadDate,
      
       
    //   JDuploadtime:JDuploadtime,
        
       
    //   JDdes:JDdes,
       
    //   JDtitle:JDtitle,
      
       
    //   SalaryBudget:SalaryBudget,
       
    //   education:education,
       
    //   totalexperience:totalexperience,	 
    //   JDlocation:JDlocation,
        
       
    //   roundsofinterview:roundsofinterview,
        
       
    //   noticeperiodprefgivenbyclient:noticeperiodprefgivenbyclient,
      
       
    //   minnumcvsubm:minnumcvsubm,
    //   allowonecandidatesubmbyuser:allowonecandidatesubmbyuser,
        
       
    //   noofworkingdays:noofworkingdays,
        
       
    //   status:status,
      
       
    //   feedback:feedback,
    //   rework:rework,
       
    //   noofvacancies:noofvacancies,
        
       
    //   clientcoordtobedoneby:clientcoordtobedoneby,
    //   remarks:remarks,
       
    //   clientEmailListTo:clientEmailListTo,
       
    //   clientEmailListCC:clientEmailListCC,
       
    //   JDaudio:JDaudio,
       
    //   percentpayoutforindifusetalenttrackerdatabase: percentpayoutforconsulifusetalenttrackerdatabase,
       
    //   percentpayoutforconsulifusetalenttrackerdatabase: percentpayoutforconsulifuseownportal,
       
    //   percentpayoutforindifuseownportal: percentpayoutforindifuseownportal,
       
    //   // percentpayoutforconsulifuseownportal: percentpayoutforconsulifuseownportal.percentpayoutforconsulifuseownportal,
    //   abspayforindifusetalenttrackerdatabase: abspayforindifusetalenttrackerdatabase,
    //   abspayforconsulifusetalenttrackerdatabase: abspayforconsulifusetalenttrackerdatabase,
       
    //   abspayforindifuseownportal: abspayforindifuseownportal,
    //   abspayforconsulifuseownportal: abspayforconsulifuseownportal,
    //   preferredcompanyList: preferredcompanyList,
    
    }).then(()=>{
      alert("Update successfull")
    })
  }
    



    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
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

  
    const options = [
      { value: 'Services', label: 'Services' },
      { value: 'Manufacturing', label: 'Manufacturing' },
      { value: 'IT- Information Technology', label: 'IT- Information Technology' },
      { value: 'Education', label: 'Education' },
      { value: 'Real estate/Construction', label: 'Real estate/Construction' },
      { value: 'Finance/BFSI', label: 'Finance/BFSI' },
      { value: 'Healthcare/Pharm', label: 'Healthcare/Pharm' },
      { value: 'Retail', label: 'Retail' },
      { value: 'Hospitality', label: 'Hospitality' },
      { value: 'Public Sector/Philonthropy/Associations', label: 'Public Sector/Philonthropy/Associations' },
      { value: 'FMCG', label: 'FMCG' },
      { value: 'Textile', label: 'Textile' },
      { value: 'Telecom', label: 'Telecom' },
      { value: 'logistics/supply chain', label: 'logistics/supply chain' },
      { value: 'Media/Publishing/Entertainment', label: 'Media/Publishing/Entertainment' },
      { value: 'Others', label: 'Others' },
      { value: 'Create', label: 'Create' }
    
    ]
  return (
    <div>
        <div className='dashboard'>
      <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className="jd-cont">
      <Form  encType='multipart/form-data'>
          <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD should be shown to which User Category?</Form.Label>
                <Form.Select aria-label="Default A example" defaultValue={UserCategory} onChange={e =>  SetUserCategory(e.target.value)}>
                   
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
                <Form.Check type="checkbox" label="You must use our database etc for this JD " onChange={e =>  (e.target.value)}/>
                
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Exclusivity </Form.Label>
                <Form.Select aria-label="Default 1 example" defaultValue={exclusivity} onChange={e =>  Setexclusivity(e.target.value)}>
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">10</option>
                    <option value="7">unlimited</option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CVs quality check required by Admin? </Form.Label>
                <Form.Select aria-label="Default  example" defaultValue={CVqualcheckreqbyAdmin} onChange={e =>  SetCVqualcheckreqbyAdmin(e.target.value)}>
                    
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>priority tag (P) </Form.Label>
                <Form.Check type="checkbox" label="Hot " />
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>JD upload date  </Form.Label>
                <Form.Control type="date" defaultValue={JDuploadDate} onChange={e =>  SetJDuploadDate(e.target.value)}/>
                </Col>
                <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Time</Form.Label>
                  <Form.Control type="time" defaultValue={JDuploadtime} onChange={e =>  SetJDuploadtime(e.target.value)}/>
                </Col>
                </Row>
                </Col>
              </Row>
             
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Job description</Form.Label>
                <i class="fa fa-paperclip" aria-hidden="true" ></i>
                <Form.Control type='file' name='JDdes'   defaultValue={JDdes} onChange={e =>  SetJDdes(e.target.value)} />
                
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> JD Title</Form.Label>
                <Form.Control type='text' placeholder='  ' defaultValue={JDtitle} onChange={e =>  SetJDtitle(e.target.value)}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client name </Form.Label>
                <Form.Control type='text' placeholder='  ' defaultValue={company_name} onChange={e =>  Setcompany_name(e.target.value)}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Website </Form.Label>
                <i class="fa fa-globe" aria-hidden="true" as={Link} to='/www.talenttracker.com'></i>
                <Form.Control type='text' placeholder='  ' defaultValue={Clientcompanywebsite} onChange={e =>  SetClientcompanywebsite(e.target.value)}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client company Linkedin URL </Form.Label>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <Form.Control type='text' placeholder='  ' defaultValue={linkendInUrl} onChange={e =>  SetlinkendInUrl(e.target.value)}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Salary Budget -Lacs per annum </Form.Label>
                <Form.Control type='text' placeholder=' ' defaultValue={SalaryBudget} onChange={e =>  SetSalaryBudget(e.target.value)}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Education </Form.Label>
                <Form.Control type='text' placeholder='  ' defaultValue={education} onChange={e =>  Seteducation(e.target.value)}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'> Total Experience - Years</Form.Label>
                <Form.Control type='text' placeholder='  ' defaultValue={totalexperience} onChange={e =>  Settotalexperience(e.target.value)}/>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>work location of JD  </Form.Label>
                <Form.Control type='text' defaultValue={JDlocation} onChange={e =>  SetJDlocation(e.target.value)}/>
                <Form.Select aria-label="Default  example" defaultValue={JDlocation} onChange={e =>  SetJDlocation(e.target.value)}>
                    
                    <option value="1">Delhi</option>
                    <option value="2">Gurgaon</option>
                    <option value="3">Noida</option>
                    <option value="4">Mumbai</option>
                    <option value="5">Pune</option>
                    <option value="6">Ahmedabad</option>
                    <option value="7">Chennai</option>
                    <option value="8">Kolkata</option>
                    <option value="9">Hyderabad</option>
                    <option value="10">Banglore</option>
                    <option value="11">Jaipur</option>
                    <option>Create </option>
                   
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Rounds of interview </Form.Label>
                {/* <Select isMulti options={options} /> */}
                <Form.Select aria-label="Default  example" defaultValue={roundsofinterview} onChange={e =>  Setroundsofinterview(e.target.value)}>
                    
                    <option value="1">Telephonic</option>
                    <option value="2">Virtual(Google meet,Zoom calls , Team Meeting, Skype etc)</option>
                    <option value="3">Face to Face</option>
                    <option value="4">Management/Hr Round</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Notice period preference given by client  </Form.Label>
                <Form.Select aria-label="Default Immediate example" defaultValue={noticeperiodprefgivenbyclient} onChange={e =>  Setnoticeperiodprefgivenbyclient(e.target.value)}>
                    
                    <option value="1">Immediate</option>
                    <option value="2">15 days</option>
                    <option value="3">20 days</option>
                    <option value="4">30days</option>
                    <option value="5">2 months</option>
                    <option value="6">3 months</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Replacement period  </Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={replacement_priod} onChange={e =>  Setreplacement_priod(e.target.value)}>
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col>
              </Row>
              <Row>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Today’s date-time</Form.Label>
                  <Form.Control type="text" defaultValue={JDuploadDate} onChange={e =>  SetJDuploadDate(e.target.value)}></Form.Control>
                  </Col>
                  
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Jd Number</Form.Label>
                  <Form.Control type="text" placeholder='Remarks' defaultValue={JDnumber} onChange={e =>  SetJDnumber(e.target.value)}></Form.Control>
                  </Col>
                  </Row>
              <Row>
                <Col xs={6}>
                  <Form.Group>
                <Form.Label  className='fw-bold mb-3 mt-3'> Minimum Number of cvs submissions required  </Form.Label>
                <Form.Select name="numberofcvs" aria-label="Default select example" defaultValue={minnumcvsubm} onChange={e =>  Setminnumcvsubm(e.target.value)}>
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
                <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Client Company name to disclosed to candidate</Form.Label>
                  <Form.Select name="disclosedtocandidate" defaultValue={companynamedisclosed} onChange={e =>  Setcompanynamedisclosed(e.target.value)}>
                    <option values="yes">Yes</option>
                    <option value='no'>No</option>
                  </Form.Select>
                </Form.Group>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Allow one candidate submission by user? </Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={allowonecandidatesubmbyuser} onChange={e =>  Setallowonecandidatesubmbyuser(e.target.value)}>
                    <option>NO</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                    <Form.Group className='mt-3'>
                  <Form.Label className="fw-bold">Number of working days</Form.Label>
                  <Form.Select name="numberofworkingday" defaultValue={noofworkingdays} onChange={e =>  Setnoofworkingdays(e.target.value)}>
                    <option values="5">5</option>
                    <option value='6'>6</option>
                  </Form.Select>
                </Form.Group>
                </Col>
              </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> JD Status</Form.Label>
                    <Form.Check type="checkbox" label="Open (not accepted by any user) " />
                    <Form.Check type="checkbox" label=" Pending delivery (accepted but not yet delivered)" />
                    <Form.Check type="checkbox" label=" Delivery done-await client feedback" />
                    <Form.Check type="checkbox" label=" Interview stage" />
                    <Form.Check type="checkbox" label="Offer stage " />
                    <Form.Check type="checkbox" label="Offer accepted - Serving Notice Period" />
                    <Form.Check type="checkbox" label="Joined" />
                    <Form.Check type="checkbox" label="Rework (with reasons)"/>
                    <Form.Label className='fw-bold mb-3 mt-3'> </Form.Label>
                    <Form.Select aria-label="Default  example" defaultValue={rework} onChange={e =>  Setrework(e.target.value)}>
                    
                    <option value="1"> CVs quality not good- No shortlisting from client for earlier submissions </option>
                                       
                    <option value="2">No delivery made by the user who accepted the JD</option>
                    <option value="3">Client changed the JD criteria</option>
                    <option value="4">Candidates backed out/didn’t turn up for the interview/rejected by client</option>
                    <option value="5">Delay from client in giving the feedback, now fresh sourcing required</option>
                    <option value="6">Any other reason not covered above (text field-1000 characters for admin to enter)</option>
                    
                    </Form.Select> 
                    <Button variant='primary'>Create</Button>
                    </Col>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number to be disclosed to user for this JD?  </Form.Label>
                <Form.Select aria-label="Default yes example" defaultValue={mobiledisclosed} onChange={e =>  Setmobiledisclosed(e.target.value)}>
                    
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    </Form.Select>
                    </Col>
                
              </Row>
              <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Name</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc1Name} onChange={e =>  SetClientSpoc1Name(e.target.value)} />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Name</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc2Name} onChange={e =>  SetClientSpoc1Name(e.target.value)}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Name</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc3Name} onChange={e =>  SetClientSpoc3Name(e.target.value)}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Email</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc1Email} onChange={e =>  SetClientSpoc1Email(e.target.value)}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Email</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc2Email} onChange={e =>  SetClientSpoc2Email(e.target.value)}/>        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Email</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc3Email} onChange={e =>  SetClientSpoc3Email(e.target.value)}/>        
                      
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Mobile Number</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc1MobileNumber} onChange={e =>  SetClientSpoc1MobileNumber(e.target.value)}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Mobile Number</Form.Label>  
               <Form.Control type='text'defaultValue={ClientSpoc2MobileNumber} onChange={e =>  SetClientSpoc2MobileNumber(e.target.value)} />        
                      
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Mobile Number</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc3MobileNumber} onChange={e =>  SetClientSpoc3MobileNumber(e.target.value)}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc1 Designation</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc1Designation} onChange={e =>  SetClientSpoc1Designation(e.target.value)}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc2 Designation</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc2Designation} onChange={e =>  SetClientSpoc2Designation(e.target.value)}/>        
          
            
            </Col>
            <Col xs={4}>
               <Form.Label className='fw-bold mb-3 mt-3'>Client Spoc3 Designation</Form.Label>  
               <Form.Control type='text' defaultValue={ClientSpoc3Designation} onChange={e =>  SetClientSpoc3Designation(e.target.value)}/>
               </Col>
               </Row>
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List of preferred companies to source candidate  </Form.Label>
                <Form.Control type='text' value='talenttracker' defaultValue={preferredcompanyList} onChange={e =>  SetpreferredcompanyList(e.target.value)}/>
                </Col>
              </Row>
              <Row>
              
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size</Form.Label>
                <Form.Select aria-label="Default select Company Size example" defaultValue={companySize} onChange={e =>  SetcompanySize(e.target.value)}>
                    <option>select Company Size</option>
                    <option value="0-1">0-1</option>
                    <option value="2-10">2-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501-1000">501-1000</option>
                    <option value="1001-5000">1001-5000</option>
                    <option value="10000+">10000+</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3' onClick={handleShow6} style={{color:'blue' ,textDecoration:'underline'}}><i className='fa fa-user'></i>  Admin spoc (single point of contact)</Form.Label>
                    
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <Form.Label  className='fw-bold mb-3 mt-3'> Client Email List</Form.Label>
                        <Row>
                            <Col xs={6}>

                          
                        <InputGroup className="mb-2">
        <InputGroup.Text>To</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder=" Email" defaultValue={clientEmailListTo} onChange={e =>  SetclientEmailListTo(e.target.value)}/>
      </InputGroup>
      </Col>
      <Col xs={6}>
      <InputGroup className="mb-2">
        <InputGroup.Text>CC</InputGroup.Text>
        <FormControl id="inlineFormInputGroup" placeholder=" Email" defaultValue={clientEmailListCC} onChange={e =>  SetclientEmailListCC(e.target.value)}/>
      </InputGroup>
      
      </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Client Coordination</Form.Label>
                    <Form.Select aria-label="Default select example" defaultValue={clientcoordtobedoneby} onChange={e =>  Setclientcoordtobedoneby(e.target.value)}>
                    <option>select</option>
                    <option value="1">User</option>
                   
                    
                    <option value="2">Admin</option>
                    </Form.Select>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Assured delivery time required by client (TAT)</Form.Label>
                    <Form.Control type="date" defaultValue="test" onChange={e =>  Set(e.target.value)}></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Remarks/comments</Form.Label>
                    <Form.Control type="text" placeholder='Remarks' defaultValue={remarks} onChange={e =>  Setremarks(e.target.value)}></Form.Control>
                    </Col>
                    <Col xs={6}>
                    <Form.Label className='fw-bold mb-3 mt-3'> Payment Terms</Form.Label>
                    <Form.Select aria-label="Default 30days example" defaultValue={payment_terms} onChange={e =>  Setpayment_terms(e.target.value)}>
                    <option>select</option>
                    <option value="1">Immediate</option>
                    <option value="1">30 days</option>
                    <option value="2">45 days</option>
                    <option value="1">60 days</option>
                    <option value="2">90 days</option>
                    </Form.Select>

                    </Col>
                </Row>
                <Row>
                 
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'>Sign Up Rate </Form.Label>
                    <Form.Control type="text" placeholder='' defaultValue={client_signup_rate} onChange={e =>  Setclient_signup_rate(e.target.value)}></Form.Control>
                    </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                    
                    <Form.Select aria-label="Default select example" defaultValue={client_signup_rate} onChange={e =>  Setclient_signup_rate(e.target.value)}>
                    <option>create</option>
                    <option value="1">- 8.33%</option>
                    <option value="2">7.5%</option>
                    <option value="3">7%</option>
                    <option value="4">10%</option>
                    <option value="5">6%</option>
                    <option value="6">12%</option>
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Audio JD</Form.Label>
                      <Form.Control type='file' name="jdaudio" accept="Audio/mp3" defaultValue={JDaudio} onChange={e =>  SetJDaudio(e.target.value)}/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label className='fw-bold mb-3 mt-3'>Your Payout</Form.Label>
                  <Form.Check type="checkbox" label="% payout If you use Talent Tracker’s database. " onClick={handleCheck} />
                  {checked? <div>
                  
                    <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck4}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck5}/>
    
  
                   </div>:<></>}
                  {checked4? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked5? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" % payout if you use your own portal- naukri/monster/times job etc " onClick={handleCheck1} />
                    {checked1? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck6}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck7}/>
    
  
                   </div>:<></>}
                  {checked6? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked7? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}

                    <Form.Check type="checkbox" label=" absolute value payout if use your own portal (Naukri/Monster/Timesjob etc) " onClick={handleCheck2} />
                    {checked2? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck8}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck9}/>
    
  
                   </div>:<></>}
                  {checked8? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked9? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    <Form.Check type="checkbox" label=" absolute value payout---if use Talent Trackers database. " onClick={handleCheck3}/>
                    {checked3? <div>
                      <Form.Check type="checkbox" label=" If consultancy"  onClick={handleCheck10}/>
                    <Form.Check type="checkbox" label=" If Individual"  onClick={handleCheck11}/>
    
  
                   </div>:<></>}
                  {checked10? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                    
                  {checked11? <div>
                    <Form.Control type='text'></Form.Control>
                    </div>:<></>}
                  </Col>
                  <Col xs={6}>
                  <Form.Label className='fw-bold mb-3 mt-3'> Industries  </Form.Label>
                  <Select isMulti options={options} defaultValue={industry} onChange={e =>  Setindustry(e.target.value)}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">Client Company Address.</Form.Label>
                      <Form.Control as='textarea' defaultValue={companyadress} onChange={e =>  Setcompanyadress(e.target.value)}/>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group className="mt-3">
                      <Form.Label className="fw-bold">CVs Quality Approval</Form.Label>
                      <Form.Select aria-label="Default select example" defaultValue="test" onChange={e =>  Set(e.target.value)}>
                    <option>create</option>
                    <option value="Approved">Approved</option>
                    <option value="Non-Approved">Non-Approved</option>
                    </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" className="mt-3 mx-5">Edit</Button>
                <Button variant="danger" className="mt-3 mx-5">Close</Button>
                <Button variant="primary" className="mt-3 mx-5" onClick={UpdateHair}>
            <i className="fas fa-save me-3"></i>Save 
          &nbsp;&nbsp;</Button>
          </Form>
          {/* </>)
        })} */}
      </Container>
      <Modal show={show6} onHide={handleClose6} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-info-circle me-3" ></i>Admin Spoc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Name</Form.Label>  
               <Form.Control type='text' defaultValue="test" onChange={e =>  Set(e.target.value)}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Email</Form.Label>  
               <Form.Control type='text' defaultValue="test" onChange={e =>  Set(e.target.value)}/>        
          
            
            </Col>
            </Row>
            <Row>
            <Col xs={6}>
               <Form.Label className=''>Admin Spoc Mobile Number</Form.Label>  
               <Form.Control type='text' defaultValue="test" onChange={e =>  Set(e.target.value)}/>        
          
            
            </Col>
            </Row>
            
            </Form> 


         
         
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    
    </div>
  )
}

export default EditJd
