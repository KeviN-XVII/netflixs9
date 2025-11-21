import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Component } from "react";

class Profile extends Component {
  state = {
    checked1: false,
    checked2: false,
  };
  render() {
    return (
      <>
        <Container
          className="d-flex flex-column p-5 p-md-4 text-white"
          style={{ width: "500px", margin: "50px auto" }}
        >
          <h1 className="fs-1">Edit Profile</h1>
          <Row>
            <hr className="border border-white-50" />
            <Col className="col-3 d-flex flex-column align-items-center mb-4">
              <img
                src="/avatar.jpg"
                alt="Avatar"
                style={{ width: "130px", height: "130px", objectFit: "cover" }}
              />
            </Col>
            <Col className="col-9 d-flex flex-column px-4">
              <div>
                <p className="bg-secondary p-2">Strive Student</p>
                <Form.Group className="mb-4 w-50">
                  <Form.Label className="fs-5">Language:</Form.Label>
                  <Form.Select className="bg-black text-white">
                    <option>English</option>
                    <option>Italiano</option>
                    <option>Español</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <hr className="border border-white-50" />
              <div className="d-flex flex-column gap-1">
                <p className="fs-5">Maturity Settings:</p>
                <p className="bg-secondary py-1 px-2 d-block w-75 text-center">
                  ALL MATURITY RATINGS
                </p>
                <p>Show titles of all maturity ratings for this profile</p>
                <button className="btn btn-outline-light rounded-0 text-center">
                  EDIT
                </button>
                <hr className="border border-white-50" />
              </div>
              <div className="d-flex flex-column gap-3">
                <p className="fs-5">Autoplay controls</p>
                <Form>
                  <Form.Check
                    type="checkbox"
                    id="autoplay1"
                    label="Autoplay next episode in a series on all devices"
                    checked={this.state.checked1}
                    onChange={() =>
                      this.setState({ checked1: !this.state.checked1 })
                    }
                  />

                  <Form.Check
                    type="checkbox"
                    id="autoplay2"
                    label="Autoplay previews while browsing on all devices"
                    checked={this.state.checked2}
                    onChange={() =>
                      this.setState({ checked2: !this.state.checked2 })
                    }
                  />
                </Form>
              </div>
            </Col>
          </Row>
          <hr className="border border-white-50" />
          <div className="d-flex justify-content-center my-4 gap-2">
            <Button variant="light">SAVE</Button>
            <Button variant="outline-secondary">CANCEL</Button>
            <Button variant="outline-danger">DELETE PROFILE</Button>
          </div>
        </Container>
      </>
    );
  }
}
export default Profile;
