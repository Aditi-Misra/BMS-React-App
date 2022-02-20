import Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
function Registration() {
    const [Username, setUsername] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [Passwordd, setPasswordd] = useState("")

    function clearInput(){
        setUsername("");
        setEmailAddress("");
        setPasswordd("");
    }
    async function userPost(){
       const userDetails ={
        "username": Username,
        "email": EmailAddress,
        "password": Passwordd,
       }
    //    console.log(userPost);
       const response = await axios.post('http://localhost:5000/user-register', userDetails).then((data)=>{Swal.fire({
                                                                                                                title: `<strong>${data.data.message}</strong>`,
                                                                                                                icon: 'success',
                                                                                                                showCloseButton: true,
                                                                                                            });
                                                                                                            clearInput()}).catch((err)=>Swal.fire({
                                                                                                                    title: `<strong>${err.message}</strong>`,
                                                                                                                    icon: 'error',
                                                                                                                    showCloseButton: true,
                                                                                                                })
                                                                                                            );
                                                                                                        
        
    //    console.log(response);

    
    }
   
    return (
     <div>
         <Container style={{padding: "5%"}}>
                <Form>
                   <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={Username} onChange={(e)=>setUsername(e.target.value)}  placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={EmailAddress} onChange={(e)=>setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={Passwordd} onChange={(e)=>setPasswordd(e.target.value)}  type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary"  onClick={userPost}>
                        Submit
                    </Button>
                </Form>
        </Container>
     </div>
     
    );
  }
  
  export default Registration
;
  