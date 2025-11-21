import { Container, Row, Col, Button } from "react-bootstrap";
import "./Settings.css";

const Settings = function () {
  return (
    <Container className="d-flex flex-column my-5 p-4 p-md-5 text-white">
      <h1>Account</h1>
      <hr className="border border-secondary" />
      <Row className="d-flex">
        <Col>
          <p className="fs-5 text-white">MEMBERSHIP & BILLING</p>
          <Button variant="outline-danger">Cancel Membership</Button>
        </Col>

        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p className="fw-bold">student@strive.school</p>
              <p className="text-secondary">Password: *********</p>
              <p className="text-secondary">Phone: 321 044 1279</p>
            </div>

            <div className="d-flex flex-column text-end">
              <p className="text-link">Change account email</p>
              <p className="text-link">Change password</p>
              <p className="text-link">Change phone number</p>
            </div>
          </div>

          <hr className="border border-secondary" />

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <i className="bi bi-paypal"></i>
              <p className="fw-bold ms-2">admin@strive.school</p>
            </div>
            <div className="d-flex flex-column text-end">
              <p className="text-link">Update payment info</p>
              <p className="text-link">Billing details</p>
            </div>
          </div>

          <hr className="border border-secondary" />

          <div className="d-flex flex-column text-end">
            <p className="text-link">Redeem gift card or promo code</p>
            <p className="text-link">Where to buy gift cards</p>
          </div>
        </Col>

        <hr className="border border-secondary" />
      </Row>
      <Row>
        <Col>
          <p className="fs-5 text-white">PLAN DETAILS</p>
        </Col>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between">
            <p className="fw-bolder">Premium</p>
            <p className="text-link text-end">Change plan</p>
          </div>
        </Col>
        <hr className="border border-secondary" />
      </Row>
      <Row>
        <Col>
          <p className="fs-5 text-white">SETTINGS</p>
        </Col>

        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column text-start">
              <p className="text-link">Parental controls</p>
              <p className="text-link">Test participation</p>
              <p className="text-link">Manage download devices</p>
              <p className="text-link">Activate a device</p>
              <p className="text-link">Recent device streaming activity</p>
              <p className="text-link">Sign out of all devices</p>
            </div>
          </div>
        </Col>

        <hr className="border border-secondary" />
      </Row>
      <Row>
        <Col>
          <p className="fs-5 text-white">MY PROFILE</p>
        </Col>

        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column w-75">
              <div className="d-flex mb-3 align-items-center">
                <img
                  src="/avatar.jpg"
                  alt="User Avatar"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <p className="fw-bold mx-2">Strive Student</p>
              </div>

              <div className="d-flex">
                <div className="d-flex flex-column text-start">
                  <p className="text-link">Language</p>
                  <p className="text-link">Playback settings</p>
                  <p className="text-link">Subtitle appearance</p>
                </div>

                <div className="d-flex flex-column text-start mx-5">
                  <p className="text-link">Viewing activity</p>
                  <p className="text-link">Ratings</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column text-end">
              <p className="text-link">
                Manage profile <br /> add profile email
              </p>
            </div>
          </div>
        </Col>

        <hr className="border border-secondary" />
      </Row>
    </Container>
  );
};
export default Settings;
