import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <Container className="intro text-white d-flex justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1>Nonton Sepuasnya</h1>
          <h1>Tanpa Perlu Bayar</h1>
          <Button className="btn-secondary mt-3" href="#trending">
            Lihat Semua
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
