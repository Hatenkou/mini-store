import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink, useHistory } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utilis/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
   const { user } = useContext(Context)
   const history = useHistory()
   return (
      <Navbar bg="primary" variant="dark">
         <Container>
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>mini-store</NavLink>
            {user.isAuth ?
               <Nav className="ml-auto">
                  <Button onClick={() => history.push(ADMIN_ROUTE)} >Admin</Button>
                  <Button onClick={() => history.push(LOGIN_ROUTE)} >Log out</Button>
               </Nav>
               :
               <Nav className="ml-auto">
                  <Button onClick={() => user.setIsAuth(true)}>Log in</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   );
});

export default NavBar;
