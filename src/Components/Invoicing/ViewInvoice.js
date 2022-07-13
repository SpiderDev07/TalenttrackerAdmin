import React,{useState, useEffect} from 'react'
import { Container,Form,Col,Row,Button} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const ViewInvoice = () => {

  const navigate=useNavigate();
  const [getdata,setgetdata] = useState([]);
  
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/allJd");
 
         setgetdata(res.data);
    }
    fetchPost();
     },[]);
 
   
      const [user, setUser]=useState({
        year:"",
        month:"",
        clientName:"",
      
      })
      function handle(e){
        const newuser={...user}
        newuser[e.target.id]=e.target.value
      setUser(newuser)
      }


  return (
    <div>
        <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
      <Form >
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Year</Form.Label>
                <Form.Control type='text' value={user.year} id='year' onChange={(e)=>handle(e)}/>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Month</Form.Label>
                <Form.Control type='text' placeholder='Enter Month' value={user.month} id='month' onChange={(e)=>handle(e)}/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Enter Client name</Form.Label>
                <Form.Control type='text' placeholder='' value={user.className} id='clientName' onChange={(e)=>handle(e)}/>
                </Col>
                
                </Row>
                <Button variant='success' type='submit' as={Link} to='/' className='mt-3'>seacrh</Button>
                </Form>
                
      </Container>
    </div>
  )
}

export default ViewInvoice