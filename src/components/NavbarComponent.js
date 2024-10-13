import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
function NavbarComponent({defaultRole,setRole}) {
    return (
      <Navbar bg="dark" data-bs-theme="dark">
         <Container>
        
         <Navbar.Brand>Inventory</Navbar.Brand>
         <Form bg="dark">
        
        <Form.Check
          type="switch"
          id="custom-switch"
          label={defaultRole}
          style = {{color: 'white'}}
          onChange={() => setRole(defaultRole === 'admin' ? 'user' : 'admin')}
        />
        
        </Form>
         </Container>
         </Navbar>
    
     
    )
}

export default NavbarComponent
