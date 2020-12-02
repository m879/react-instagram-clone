import React from 'react';

import {Form,Container,Row,Col,Button} from 'react-bootstrap';
import  Username from './Username'; 


const Home = () => {

// class home extends React.Component {

  const [input,setInput]=React.useState(' ');

  // const [messages,setMessages]=React.useState(['Hello','Hi','Good']);
  // console.log(messages);
  console.log(input);
  // const sendMessage=(event)=>{
    // event.preventDefault();
    //  setMessages([...messages,input]);
    //  setInput('');
//  }

    // render() {
    return (
       <div  className="py-5" style={{margin:'0%',padding:'0%',boxSizing:'border-box'}}>
           <Container  className="my-5" >
    
            <Row className="py-5">
               <Col lg={3}></Col>
                <Col xs={12} lg={6} className="py-5" >
                   <Container className="py-5 bg-warning text-default font-weight-bolder">
                   <Form className="auto " style={{fontSize:'17px'}} action="/home">
   
                        <Form.Group controlId="formBasicPassword">
                         <Form.Label>Username</Form.Label>
                         <Form.Control 
                         value={input}                         
                         onChange={event=>setInput(event.target.value)}
                         type="text" placeholder="Username" required/>
                       </Form.Group>
                            <Button  
                            // onClick={sendMessage} 
                            variant="primary" type="submit" size="lg" className=" flex-center flex-auto ">
                            Sign In
                            </Button>
                    </Form>
                    {
                        <Username text={input}/>
                    } 
                   </Container>
               </Col>
               <Col lg={3}></Col>
            </Row>
           </Container>
       </div>
    );
  // }
}
 
export default Home;