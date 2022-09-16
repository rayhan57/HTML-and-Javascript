import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import onePiece from "../assets/images/trending/onePiece.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-light text-center pt-2" id="trending">
          Sedang Trending
        </h1>
        <Row>
          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>

          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>

          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>

          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>

          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>

          <Col lg="4" className=" mt-3">
            <Card className="bg-dark text-white ">
              <Card.Img src={onePiece} alt="Card image" />
              <div className="p-2">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
