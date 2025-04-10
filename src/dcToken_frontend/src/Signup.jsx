import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Table, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { dvo_backend } from 'declarations/dcToken_backend';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
          <div className="d-flex align-items-center">
            <Navbar.Brand href="/">EBSU</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create" active>Create User</Nav.Link>
            </Nav>
          </div>

          <div className="text-center">
            <img
              src="/ebsu_banner.png"
              alt="EBSU Banner"
              style={{ height: 'auto', width: '400px' }}
            />
          </div>

          <div className="d-flex align-items-center">
            <img
              src="/dvo_logo.png"
              alt="DVO Logo"
              style={{ height: '40px' }}
            />
          </div>
        </Container>
      </Navbar>
      <br />
      <br />
       <div className="sign-form-container">
       <form>
        <Form.Label htmlFor="name">Full Name</Form.Label>
        <Form.Control type="text" id="name" value={formData.name} />

        <Form.Label htmlFor="address">Address</Form.Label>
        <Form.Control type="text" id="address" value={formData.address} />

        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control type="email" id="email" value={formData.email} />

        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control type="password" id="password" value={formData.password} />

        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long and contain letters and numbers.
        </Form.Text>
        <br />
        <div className="d-flex justify-content-center gap-4 mt-3">
        <Button onClick={() => navigate('/')} variant="secondary" type="submit">
          Back
        </Button>
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </div>
      </form>
    </div>
    </>
  );
}

export default SignUp;