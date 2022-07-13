import React,{useState,useEffect} from 'react'
import { Container,Row, Col, Form ,Modal,Button, Table} from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { ToastContainer,toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {CSVLink} from "react-csv"
import axios from 'axios'

const Invoicing = () => {
  const [getdata,setgetdata] = useState([])

 
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/findInvoice");
 
         setgetdata(res.data);
    }
    fetchPost();
     },[]);
 

  const invoice = [
    {id:1, Date:"2-02-22", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
    {id:2, Date:"03-02-22", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
    {id:3, Date:"12-02-22", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
    {id:4, Date:"22-02-22", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
]
const headers = [
    {lable:"invoice Number ", key:"id"},
    {label:" Date ", key:"Date"},
    {label:"Client Name", key:"Clientname"},
    {label:"Client address", key:"JDlocation"},
    {label:"Client Address Line1", key:"JDlocation"},
    {label:"Client Address Line2", key:"JDlocation"},
    {label:"Client Address City", key:"JDlocation"},
    {label:"Client Address State", key:"Jdlocation"},
    {label:"Client Gst", key:"Currentsalary"},
    {label:"kind attn", key:"RecuriterID"},
    {label:"Candidate Name", key:"Clientename"},
    {label:"Designation", key:"Currentdesignation"},
    {label:"Date of joining", key:"Date"},
    {label:"Sign up rate", key:"Currentdesignation"},
    {label:"Submission Date", key:"SubmissionDate"},
    {label:"CTC", key:"Currentdesignation"},
    {label:"Invoice base value", key:"Currentdesignation"},
    {label:"Subtotal", key:"Currentdesignation"},
    {label:"CGST", key:"Currentdesignation"},
    {label:"SGST", key:"Currentdesignation"},
    {label:"IGST", key:"Currentdesignation"},
    {label:"Total invoice value", key:"Currentdesignation"},
    {label:"Amount in words", key:"Currentdesignation"}
   

]
const csvReport = {
  filename: 'invoice.csv',
  headers: headers,
  data: invoice
}

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const notify = () => toast.success("saved");
  return (
    <div>
         <Sidebar />
      <NavbarMenu />
      <ToastContainer/>
      <Container className='myprofile'>
            <Button variant='primary' onClick={handleShow} className='mb-2 mx-5'>Add Invoice </Button>&nbsp;
            <Button variant='danger'className='mb-2 mx-5'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
        </Container>
        <div className='jd-wraper' >
        <Container fluid className='table-data' >
        <Table responsive className='data-table' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th>Invoice Number</th>
                
                <th>Date</th>
                <th>Client Name </th>
                
                <th>Client Address-Line 1</th>
                <th>Client Address-Line 2</th>
                <th>Client Address - City</th>
                <th>Client Address - State</th>
                <th>Client GST </th>
                <th>Kind attn </th>
                <th>Candidate Name</th>
                <th>Designation</th>
                <th>Date of joining </th>
                <th>Sign up rate </th>
                <th>CTC</th>
                <th>Inoice Base value </th>
                <th>Subtota</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Total invoice value </th>
                <th>Amount in words </th>
                <th>Create</th>
                <th>Action</th>
                <th></th>
              
               </tr>
               </thead>
               <tbody>
               {getdata.map((jd)=>{
                return(
                  <>  
                   <tr>
                       <td><Form.Check type='checkbox'></Form.Check></td>





                       
                       <td>{jd.InvoiceNumber}</td>
                       <td>{jd.InvoiceDate}</td>
                       <td>{jd.CandidateName}</td>
                       <td>{jd.ClientAddress1}</td>
                       <td>{jd.ClientAddress2}</td>
                       <td>{jd.City}</td>
                       <td>{jd.State}</td>
                       <td>{jd.ClientGST}</td>
                       <td>{jd.Kindattn}</td>
                       <td>{jd.CandidateName}</td>
                       <td>{jd.Designation}</td>
                       <td>{jd.DateOfJoining}</td>
                       <td>{jd.SignUpRate}</td>
                       <td>{jd.CTC}</td>
                       <td>{jd.InvoiceBaseValue}</td>
                       <td>{jd.Subtotal}</td>
                       <td>{jd.CGST}</td>
                       <td>{jd.IGST}</td>
                       <td>{jd.SGST}</td>
                       <td>{jd.TotalInvoiceValue}</td>
                       <td>{jd.AmountInWords}</td>
                      <td><Button variant='primary'  className='mb-2 '>create  </Button></td>
                       
                       
                       <td><Button variant='success' as={Link} to='/invoice-edit' ><i className='fa fa-edit'></i> </Button></td>
                      
                       <td><Button variant="warning"  as={Link} to="/view-invoice"><i className='fa fa-eye'></i></Button></td>
                      
                      
                   </tr>
                   </>
                )
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
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Form action='http://162.240.67.205:4000/api/addinvoice' method='post'>
        <Modal.Body>

           
              <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Number</Form.Label>
                <Form.Control type='number'name="InvoiceNumber" placeholder=''></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Date</Form.Label>
                 <Form.Control type="date" name="InvoiceDate"/>
                </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>User ID</Form.Label>
                <Form.Control type='number'  name="UserID" placeholder=''></Form.Control>
                  </Col>
                  <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>Candidate  ID</Form.Label>
                <Form.Control type='number' placeholder='' name='CandidateID'></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                  <Form.Label  className='fw-bold mb-3 mt-3'>JD Number</Form.Label>
                <Form.Control type='number' placeholder='' name="JDNumber"></Form.Control>
                  </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client ID</Form.Label>
                <Form.Control type='number' placeholder='' name="ClientID"></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Name</Form.Label>
                 <Form.Control type="text" name="ClientName" />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                <Form.Control type='number' placeholder='Line 1' name='ClientAddress1'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address</Form.Label>
                 <Form.Control type="text" placeholder='Line 2' name='ClientAddress2' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - City</Form.Label>
                <Form.Control type='number' placeholder='City' name='City'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client Address - State</Form.Label>
                 <Form.Control type="text" placeholder='State' name='state'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Client GST</Form.Label>
                <Form.Control type='number' placeholder='' name='ClientGST'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Kind attn</Form.Label>
                 <Form.Control type="text" name='Kindattn' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Candidate Name</Form.Label>
                <Form.Control type='number' placeholder='' name='CandidateName'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Designation</Form.Label>
                 <Form.Control type="text" name='Designation' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Sign up rate</Form.Label>
                <Form.Control type='number' placeholder='' name='SignUpRate'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Date Of Joining</Form.Label>
                 <Form.Control type="date"  name='DateOfJoining'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CTC</Form.Label>
                <Form.Control type='text' placeholder='' name='CTC'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Invoice Base Value</Form.Label>
                 <Form.Control type="text" name='InvoiceBaseValue'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Subtotal</Form.Label>
                <Form.Control type='number' placeholder='' name='Subtotal'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>CGST</Form.Label>
                 <Form.Control type="text" name='CGST' />
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>IGST</Form.Label>
                <Form.Control type='text' placeholder=''name='IGST'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>SGST</Form.Label>
                 <Form.Control type="text" name='SGST'/>
                </Col>
                </Row>
                <Row>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Total Invoice Value</Form.Label>
                <Form.Control type='text' placeholder='' name='TotalInvoiceValue'></Form.Control>
                </Col>
                <Col xs={6}>
                <Form.Label  className='fw-bold mb-3 mt-3'>Amount In Words</Form.Label>
                 <Form.Control type="text" name='AmountInWords'/>
                </Col>
                </Row>
               

                </Modal.Body>
                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={notify}>Save</Button>
        </Modal.Footer>
        </Form>
                </Modal>
        
        
    </div>
  )
}

export default Invoicing