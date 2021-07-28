import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from "../assets/star.png"
import { DEVICE_ROUTE } from '../utilis/consts';

const DeviceItem = ({ device }) => {
   const history = useHistory();
   console.log(history);
   return (
      <Col md={3} className={'mt-3'} onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
         <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
            <Image width={150} heigt={150} src={device.img} />
            <div className=" text
            mt-1 d-flex justify-content-between align-items-center">
               <div>Samsung12121</div>
               <div className='d-flex align-items-center'>
                  <div>{device.rating}</div>
                  <Image src={star} />
               </div>
            </div>
            <div>{device.name}</div>
         </Card>
      </Col>
   );
}

export default DeviceItem;
