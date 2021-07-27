import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utilis/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
   const { user } = useContext(Context)
   return (
      <Navbar bg="primary" variant="dark">
         <Container>
            <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>mini-store</NavLink>
            {user.setIsAuth ?
               <Nav className="ml-auto">
                  <Button>Admin</Button>
                  <Button>Log in</Button>
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
