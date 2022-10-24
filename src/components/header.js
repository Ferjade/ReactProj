import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Greetings from '../components/Greetings';
import Clock from '../components/DigitalClock';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const NavList = styled.a`
  text-decoration: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 1rem;
  position: relative;
  &:hover, &:focus {
    color: yellow;
  }
  &:active {
    color: red;
  }
`;

let fName = "Ferjade";
let lName = "Fortuito";

let Header = () => {
        return (
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
                </Typography>
                <Greetings
                  firstName = {fName}
                  lastName = {lName}/>
                <Clock/>
                <NavList>
                  <StyledLink to='/'><Button color="inherit">To Do</Button></StyledLink>
                  <StyledLink to='/aboutus'><Button color="inherit">About Us</Button></StyledLink>
                  <StyledLink to='/activity'><Button color="inherit">Activity</Button></StyledLink>
                  <StyledLink to='/portfolio'><Button color="inherit">Portfolio</Button></StyledLink>
                  <StyledLink to='/hook'><Button color="inherit">Hook</Button></StyledLink>
                  <StyledLink to='/contactUs'><Button color="inherit">ContactUs</Button></StyledLink>
                </NavList>
              </Toolbar>
            </AppBar>
          </Box>
        );
};
export default Header;