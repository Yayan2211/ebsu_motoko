import { useEffect, useState } from 'react';
import { dcToken_backend } from 'declarations/dcToken_backend';
import { Table, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { handleDownloadPDF } from './components/DownloadPDF';

function App() {
  const [allusers, setAllusers] = useState([]);

    useEffect(() => {
      dcToken_backend.readAll().then((result) => {
        console.log(result)
        setAllusers(result);
      });
    }, []);

    return (
      <>
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
        <Container fluid="md mt-3">
          <h5>User's Detail</h5>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="mt-3">
              {
                allusers.map((val, i) => (
                  <tr key={val[0]}>
                    <td>{i + 1}</td>
                    <td>{val[1].firstname}</td>
                    <td>{val[1].lastname}</td>
                    <td>{val[1].active}</td>
                    <td>
                      <Button variant="outline-primary" href={`/update/${val[0]}`}>UPDATE</Button> &nbsp;
                      <Button variant="success" onClick={() => handleDownloadPDF(val[0])}>Download PDF</Button> &nbsp;
                      {/* <Button variant="outline-danger" onClick={(e) => handleDelete(e, val[0])}>DELETE</Button> */}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Container>
      </>
    );
  }

export default App;
