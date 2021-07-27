import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utilis/consts';


const Auth = () => {
   const location = useLocation()
   const isLogin = location.pathname === LOGIN_ROUTE
   console.log(location);
   return (
      <Container
         className="d-flex justify-content-center align-items-center"
         style={{ height: window.innerHeight - 54 }}
      >
         <Card style={{ width: 600 }} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Log in' : 'Registration'}</h2>
            <Form className="d-flex flex-column ">
               <Form.Control
                  className="mt-3"
                  placeholder=" Your email..."
               />
               <Form.Control
                  className="mt-3"
                  placeholder=" Your password..."
               />
               <Row className="d-flex ustify-content-between mt-3 pl-3 pr-3">
                  {isLogin ?
                     <div>
                        <NavLink to={REGISTRATION_ROUTE}>
                           Registration!
                        </NavLink>
                     </div>
                     :
                     <div>
                        <NavLink to={LOGIN_ROUTE}>
                           Auth
                        </NavLink>
                     </div>
                  }
                  <Button
                     className="mt-3 align-self-end"
                     variant={"outline-success"}>
                     Enter
                  </Button>
               </Row>
            </Form>
         </Card>
      </Container>
   );
}

export default Auth;
