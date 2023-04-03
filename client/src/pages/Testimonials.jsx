import { React } from "react";
import {  Card, CardImg, CardGroup, CardTitle, CardText, CardBody, CardSubtitle, CardHeader, Row, Col } from "reactstrap";

const Testimonials = () => {
return (
	<>
	<h1>What People Are Saying About Thomas</h1>

    <div>

    <Row>
        
    <CardGroup>
    <Col sm="6">
    <Card className="my-2"
    color= "primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        Testimonial #1
    </CardHeader>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  </Col>

  <Col sm="6">
  <Card className="my-2"
    color="primary"
    outline
    style={{
      width: '18rem'
    }}>
    <CardHeader>
        Testimonial #2
    </CardHeader>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        This card has supporting text below as a natural lead-in to additional content.
      </CardText>
    </CardBody>
  </Card>
  </Col>

</CardGroup>

</Row>

</div>


	</>
);
};

export default Testimonials;