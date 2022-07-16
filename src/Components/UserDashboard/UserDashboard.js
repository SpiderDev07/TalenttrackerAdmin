import React,{useState, useEffect}  from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import { Form  , Container , Row , Col , Button ,Table} from 'react-bootstrap';
import {CSVLink} from "react-csv"
import './UserDashboard.css'
import axios from 'axios';

const UserDashboard = () => {
    const [getdata, setgetdata]=useState([])
    const [Userid, setUserid]=useState([])
    const [Name, setName]=useState([])

     const [viewjd,setviewjd] = useState([]);
     

    

  console.log("view lock jd",viewjd.length)
  useEffect(()=>{
    const fetchPost= async ()=>{
     const res = await axios.get("http://162.240.67.205:5000/api/viewjd");
 
         setviewjd(res.data);
         
    }
    fetchPost();
     },[]);
    
        const fetchPost= async ()=>{
         axios.get("http://162.240.67.205:5000/api/todayUser").then((res)=>{
            setgetdata(res.data);

         })
     
             
        }
       
         
   

      
        
    
    const thisweek=async ()=>{
        axios.get("http://162.240.67.205:5000/api/weekendUser").then((res)=>{
            setgetdata(res.data);

         })
        
    }
    const thismonth=()=>{
        axios.get("http://162.240.67.205:5000/api/thisMonthUser").then((res)=>{
            setgetdata(res.data);

         })
        
    }
    const lastmonth=()=>{
        axios.get("http://162.240.67.205:5000/api/lastMonthUser").then((res)=>{
            setgetdata(res.data);

         })
        
    }
    const lastyear=()=>{
        axios.get("http://162.240.67.205:5000/api/lastYearUser").then((res)=>{
            setgetdata(res.data);

         })
        
    }

    
   
    const Studentlist = [
        {id:2, Date:"8765467898", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"A",Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
        {id:1, Date:"9876787654", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"B",Candidatename:"no", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
        {id:4, Date:"9834567633", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"C", Candidatename:"yes", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
        {id:3, Date:"8976542133", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"in-house", Candidatename:"yes", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
    ]
    const headers = [
        {lable:"User Id ", key:"id"},
        {label:"User Name ", key:"Clientname"},
        {label:"Location", key:"JDlocation"},
        {label:"User Category", key:"RecuriterID"},
        {lable:"No. of mobile numbers/emails viewed /downloaded ", key:"Date"},
        {label:"No. of JDs locked ", key:"id"},
        {label:"No. of JDs at interview stag", key:"id"},
        {label:"No. of successful closures", key:"id"},
        {label:"No. of JDs at offer stage", key:"id"},
        {label:"No. of JD delivered/submitted but feedback pending from client", key:"id"},
        {label:"No.of pending delivery submissions by user after locking the JDs", key:"id"},
        {label:"No. of JD rework", key:"id"},
        {label:"My user rating", key:"id"},
        {label:"My total payouts/incentives", key:"id"}
       
       
    
    ]
    const csvReport = {
      filename: 'Studentlist.csv',
      headers: headers,
      data: Studentlist
    }

   const [hide, sethide] = React.useState(false);
   const HandleHide = () => sethide(!hide);

   const [data, setdata] = useState([Studentlist]);
   const [order,setorder] = useState("ASC");
    const sorting =(col)=>{
     if(order ==="ASC"){
         const sorted = [...data].sort((a,b)=>
         a[col]>b[col] ? 1 :-1
    ) ;
    setdata(sorted);
    setorder("DSC")
    if(order ==="DSC"){
        const sorted = [...data].sort((a,b)=>
        a[col]<b[col] ? 1 :-1
   ) ;
   setdata(sorted);
   setorder("ASC")
}
     }
    };

  return (
    <div>
         <Sidebar />
        <NavbarMenu />
        <ToastContainer />
        <Container className='myprofile'  >
            <div>
                <Button variant='outline-secondary'  className='mx-2' onClick={fetchPost}>Today</Button>
                <Button variant='outline-secondary' className='mx-2'onClick={thisweek}>This Week</Button>
                <Button variant='outline-secondary'  className='mx-2'onClick={thismonth}>This Month</Button>
                <Button variant='outline-secondary'  className='mx-2'onClick={lastmonth}>Last Month</Button>
                <Button variant='outline-secondary'  className='mx-2'>Last Quarter</Button>
                <Button variant='outline-secondary'  className='mx-2'onClick={lastyear}>Last Year</Button>
            </div>
            <Form>
            <Row>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User ID </Form.Label>
                <Form.Control type='text' placeholder='Enter User ID' onChange={e => setUserid(e.target.value)}/>
               
                </Col>
                <Col xs={4}>
                <Form.Label  className='fw-bold mb-3 mt-3'>User Name </Form.Label>
                <Form.Control type='text' placeholder='Enter User Name' onChange={e => setName(e.target.value)}/>
                
                </Col>
                <Col xs={4}>
                
               
                </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                <Button variant='primary' onClick={HandleHide} className='mx-5 mb-3 mt-3'>Search</Button>
                </Col><Col xs={4}>
                <Button variant='danger' className='mx-5 mb-3 mt-3' ><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fa fa-download'></i></CSVLink></Button>
                </Col>
                
                </Row>
                    </Form>
                    </Container>
                       
           <div className={hide? 'hide1': 'hide'}>
            <div className='jd-wraper' >
            <Container  fluid className='table-data ' >
                <Table responsive className='data-table ' hover>
                    <thead>
                        <tr>
                            <th></th>
                <th  onClick={()=> sorting("id")}><i className='fa fa-sort'>User Id</i></th>
                <th> User Name </th>
                <th>Location</th>
                <th>Category</th>
                <th>No. of mobile numbers/emails viewed /downloaded</th>
                <th>No. of JDs locked </th>
                <th>No. of JDs at interview stag </th>
                <th>No. of successful closures</th>
                <th>No. of JDs at offer stage </th>
                <th>No. of JD delivered/submitted but feedback pending from client</th>
                <th>No.of pending delivery submissions by user after locking the JDs</th>
                <th>No. of JD rework </th>
                <th>My user rating</th>
                <th>My total payouts/incentives</th>
               </tr>
               </thead>
               <tbody>
                   
                   {getdata.map((Studentlist)=>{ 
                    if(Studentlist.userId==Userid || Studentlist.firstname==Name){
                        
                    return( <>
                   <tr >
                   <td><Form.Check type='checkbox'></Form.Check></td>
                       <td>{Studentlist.userId}</td>
                       <td>{Studentlist.firstname} {Studentlist.lastname}</td>
                       <td>{Studentlist.cLocation}</td>
                       
                       <td>{Studentlist.Acategory}</td>
                       
                        
                       
                       
                       
                       <td>{Studentlist.id}</td>
                       <td>{viewjd.length}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id} </td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       <td>{Studentlist.id}</td>
                       
                 </tr> </> )
}
})}
                   

               </tbody>
               </Table>
               </Container>
               </div>
               </div> 

               
            
    
    </div>
  )
}

export default UserDashboard