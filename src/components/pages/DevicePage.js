import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../../assets/bigStar.png';

const DevicePage = () => {
  const device = { id: 1, name: 'iphon 12 pro', price: 212112, rating: 5, img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg' };
  const descrition = [
    { id: 1, title: 'RAM', descrition: '5gb' },
    { id: 2, title: 'Camer', descrition: '12mp' },
    { id: 3, title: 'СPU', descrition: 'Apple A14 Bionic' },
    { id: 4, title: 'Cores', descrition: '6 cores' },
    { id: 5, title: 'Accumulator', descrition: 'Li-lon' },

  ]
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div className="d-flex justify-content-between align-items-center"
              style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex  align-items-center justify-content-around"
            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
          >
            <h3>from: {device.price} USD</h3>
            <Button variant={'outline-dark'}>add in basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3" >
        <h1>Characteristic</h1>
        {descrition.map(d =>
          <Row key={d.id} style={{ background: d.id % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
            {d.title}: {d.descrition}
          </Row>
        )}
      </Row>

    </Container>
  );
}

export default DevicePage;
