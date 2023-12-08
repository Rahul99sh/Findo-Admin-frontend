import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaStoreAlt, FaBell, FaShoppingCart } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <Container fluid className="p-3 my-5">
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaStoreAlt /> Store Verification
              </Card.Title>
              <Card.Text>
                Verify and approve new stores to ensure the quality and authenticity of products offered on the platform.
              </Card.Text>
              <Card.Link href="/verify">Verify Stores</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaStoreAlt /> Apps Management
              </Card.Title>
              <Card.Text>
                Update Application status to work on backend.
              </Card.Text>
              <Card.Link href="/manageapps">Manage</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaBell /> Notify Users
              </Card.Title>
              <Card.Text>
                Send targeted notifications to users about new products, promotions, and other relevant updates.
              </Card.Text>
              <Card.Link href="#">Compose Notifications</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={4}>
          <Card>
            <Card.Body>
              <Card.Title>
                <FaShoppingCart /> Notify Shopkeepers
              </Card.Title>
              <Card.Text>
                Inform shopkeepers about orders, pending reviews, and important platform updates.
              </Card.Text>
              <Card.Link href="/storelist">Notify Shopkeepers</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
