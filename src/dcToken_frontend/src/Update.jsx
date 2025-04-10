import { useEffect, useState } from 'react';
import { dcToken_backend } from 'declarations/dcToken_backend';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function Update() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [active, setActive] = useState('');

    const { id } = useParams();

    let id2 = parseInt(id, 10);

    useEffect(() => {
        dcToken_backend.read(id2).then((result) => {
            console.log(result)
            setFirstname(result[0].firstname);
            setLastname(result[0].lastname);
            setActive(result[0].active)
        });
    }, []);

    const handleUpdate = (e) => {

        const data =
        {
            firstname: firstname,
            lastname: lastname,
            active: active
        }

        dcToken_backend.update(id2, data).then((result) => {
            console.log(result)
            alert("Successfully update user");
            window.location.href = "/";
        });
    };

    return (

        <>
            <Navbar bg="primary" data-bs-theme="dark">
            <Container className="d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                {/* Left side: brand and nav links */}
                <div className="d-flex align-items-center">
                <Navbar.Brand href="/">EBSU</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#" active>Update User</Nav.Link>
                </Nav>
                </div>

                {/* Center image */}
                <div className="text-center">
                <img
                    src="/ebsu_banner.png"
                    alt="EBSU Banner"
                    style={{ height: 'auto', width: '400px' }}
                />
                </div>

                {/* Right image */}
                <div className="d-flex align-items-center">
                <img
                    src="/dvo_logo.png"
                    alt="DVO Logo"
                    style={{ height: '40px' }}
                />
                </div>
            </Container>
            </Navbar>
            <br></br>
            <br></br>
            <Container fluid="md mt-3">
                <h5>Update User</h5>
                <Form>
                    <Form.Group className="mb-3 mt-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='firstname' value={firstname}
                            onChange={(e) => setFirstname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastname' value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Active</Form.Label>
                        <Form.Select value={active} onChange={(e) => setActive(e.target.value)}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="outline-success" onClick={handleUpdate}>Update</Button> &nbsp;
                    <Button variant="outline-secondary" href="/">Cancel</Button>
                </Form>
            </Container>
        </>
    )
}