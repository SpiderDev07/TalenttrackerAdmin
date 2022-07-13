import React,{useState,useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col,Form , Button,Table , Modal} from 'react-bootstrap'
import Select from 'react-select'
import { ToastContainer,toast  } from 'react-toastify'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'

const Client = () => {
    const [show, setShow] = useState(false);
    const [GetData, SetPost] = useState([]);
    
    const [client_Id, SetClient_Id]= useState()

    const code=Math.floor(Math.random()*90000000)+10000000;
   
    useEffect(()=>{
     SetClient_Id(code)
    },[])
    
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`http://162.240.67.205:5000/api/allClient`);
        SetPost(res.data);
      }
      fetchPosts();
    },[id]);
    //delete jd
    const deleteclient = async id => {
      await axios.delete(`http://162.240.67.205:5000/api/deleteclient/${id}`)
      window.location.reload();
    
    }




    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
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
     <Sidebar />
        <NavbarMenu />
        <ToastContainer />  
        <Container className='myprofile'>
            <Button variant='primary' onClick={handleShow} className='mx-5 mb-3 mt-3'>Add Client</Button>&nbsp;
            <Button variant='danger ' className='mx-5 mb-3 mt-3'><i className='fa fa-download'></i></Button>
        </Container>
        <div className='jd-wraper' >
        <Container fluid className='table-data'>
        <Table responsive className='data-table' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th>Client ID</th>
                
                <th>Client Name</th>
                <th>Client Location </th>
                <th>Client Industry</th>
                <th>Client Spoc</th>
                <th>Client Spoc mobile number</th>
                <th>Client Spoc email Id</th>
                <th>Client GST</th>
                <th>Client Type</th>
                <th>Date/Month/year of adding client</th>
                <th>Agreed Sign up Rate</th>
                <th>Agreed payment terms</th>
                <th>Agreed replacement period</th>
                <th>Admin comments/remarks</th>
                <th>Action</th>
               </tr>
               </thead>

               <tbody>
               {GetData.map((Client)=>{
    return(<>



                   <tr>
                       <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>{Client.client_id}</td>
                       <td>{Client.client_name}</td>
                       <td>{Client.client_location}</td>
                       <td>{Client.client_industry}</td>
                       <td>{Client.client_spoc}</td>
                       <td>{Client.client_spoc_Mobile_number}</td>
                       <td>{Client.client_spoc_email_id}</td>
                       <td>{Client.client_GST}</td>
                       <td>{Client.client_type}</td>
                       <td>{Client.Agreed_signup_rate}</td>
                       <td>{Client.Agreed_payment_term}</td>
                       <td>{Client.Agreed_replacement_period}</td>
                       <td>{Client.Admin_remarks}</td>
                       <td>na</td>
                       <td><Button variant="success" as={Link} to={`/edit-client-master/${Client._id}`}><i className='fa fa-edit'></i></Button></td>
                       <td> <Button variant='danger' onClick={()=>deleteclient(Client._id)}><i className='fa fa-trash'></i></Button></td>    

                   </tr>

                   </>)
})}

                   
                  
                   
               </tbody>
               </Table>
            </Container> 
            </div>
{/*----------------- Add Client Form------------------------------------------ */}


            <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       

            <Form action='http://162.240.67.205:5000/api/addclient' method='post'>
              <Row>
                <Col xs={6}>
        
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='text' name='client_id'  value={"CI-"+client_Id}  />
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                <Form.Control type='text' name='client_name' placeholder='Enter Client Name'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Location</Form.Label>
                <Form.Control type='text' name='client_location' placeholder='Location'/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client industry </Form.Label>
                <Select isMulti options={options} name="client_industry" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc </Form.Label>
                <Form.Control type='text' name="client_spoc" placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc mobile number  </Form.Label>
                <Form.Control type='text' name="client_spoc_Mobile_number" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client spoc email ID </Form.Label>
                <Form.Control type='text' name="client_spoc_email_id" placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST   </Form.Label>
                <Form.Control type='text' name="client_GST" placeholder=''/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client type</Form.Label>
                <Form.Select aria-label="Default select example" name="client_type">
                    <option>select</option>
                    <option value="Start up">Start Up</option>
                    <option value="sme">Sme</option>
                    <option value="Public limited">public limited</option>
                    <option value="Mnc">Mnc</option>
                    <option value="Mid size private limited">Mid size private limited</option>
                    <option value="Large corporation">Large corporation</option>
                    <option value="Not known">Not known</option>
                    
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date/month/year of adding client</Form.Label>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed sign up rate </Form.Label>
                <Form.Select aria-label="Default 8.33% example" name="Agreed_signup_rate">
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
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed payment terms</Form.Label>
                <Form.Select aria-label="Default 30days example" name="Agreed_payment_term">
                    
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
                <Form.Label  className='fw-bold mb-3 mt-3'>Agreed replacement period</Form.Label>
                <Form.Select aria-label="Default 3 months example" name="Agreed_replacement_period">
                    <option>3 months</option>
                    <option value="1">3 months</option>
                    <option value="2">6 months</option>
                    </Form.Select>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Admin comments/remarks </Form.Label>
                <Form.Control type='text' placeholder='' name="Admin_remarks"/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3' name="company_address">Company Address </Form.Label>
                <Form.Control type='text' placeholder=''/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>List Of preferred companies to source candidate </Form.Label>
                <Form.Control type='text' placeholder='' name="listOfPreferredCompaniesSourceCandidate"/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Company Website </Form.Label>
                <Form.Control type='text' placeholder='' name="client_company_website"/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Company Linkedin URL </Form.Label>
                <Form.Control type='text' placeholder='' name="client_company_linked_url"/>
                </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Company Size </Form.Label>
                <Form.Select aria-label="Default select Company Size example" name="company_size">
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
                </Row>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit'  variant="primary" onClick={notify}>Save</Button>
        </Modal.Footer>
                </Form>
                </Modal.Body>
         
                </Modal>
                          
            
    </div>
  )
}

export default Client