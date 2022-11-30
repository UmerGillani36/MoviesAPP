


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavDropdown,SplitButton,Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg'
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [trigger ,setTrigger]=React.useState(false);

  const handleDrawerToggle = () => {
   
    setMobileOpen(!mobileOpen);
    setTrigger(!trigger);
  };

  const navlinkstyle={

    textDecoration:'none',
    color:'black',
    fontSize: '16px',
    margin:'0px 8px',

  }
  const dropdownstyle={

    textDecoration:'none',
    color:'black',
    fontSize: '13px',
    margin:'0px 18px',
    textAlign:'left',
    lineHeight:'14px'

  }
  const drawer = (
    <Box  sx={{  display:'flex' , flexDirection:'column'}}>
      <Box>
      <IconButton><SettingsIcon/></IconButton>
      <Typography>Alarabia</Typography>
      </Box>
      <button style={{height:'35px',fontSize:'16px',fontWeight:'600',borderRadius:'4px',marginLeft:'15px', width:'210px',backgroundColor:'#006169',color:'white'}} > Sign up or Log in</button>
      <Divider />
      <NavLink to='/' style={navlinkstyle }>Blog</NavLink>
      <NavLink to='/' style={navlinkstyle}>Find an Agency</NavLink>
      <NavLink to='/' style={navlinkstyle}>Floor Plans</NavLink>


      


       
      {/* <div className="mt-2" style={{display:'flex'}}>
        <SplitButton
          // align='start'
          title="Guides"
          id="dropdown-menu-align-responsive-2"
          style={{color:'white'}}
        >
          <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
        </SplitButton>
      </div> */}
      <NavDropdown style={navlinkstyle}  className="DropDown" title="Guides" id="guide-dropdown">

<NavDropdown.Item >
  <NavLink to='/' style={dropdownstyle}>Area Guides</NavLink>
</NavDropdown.Item>
<NavDropdown.Item >
  <NavLink to='/' style={dropdownstyle}>Building Guides</NavLink>
</NavDropdown.Item>
<NavDropdown.Item >
  <NavLink to='/' style={dropdownstyle}>School Guides</NavLink>
</NavDropdown.Item>

</NavDropdown>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{height:'69px',marginBottom:'10px'}}>
      <AppBar  sx={{position:'absolute',backgroundColor:{xs:'transparent',sm:'#fff'}}} elevation={0}>
        <Toolbar sx={{ display: 'flex' ,justifyContent:'space-around',alignItems:'center'}}>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color:'black', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <IconButton sx={{backgroundColor:'transparent'}} size='large'>
            <Logo style={{ width:'125px',height:'32px'}}/>
          </IconButton>
          
          <Box sx={{ display: { xs: 'none', sm:'flex' } }}>
            <NavLink to='/' style={navlinkstyle }>Blog</NavLink>
            <NavLink to='/' style={navlinkstyle}>Find an Agency</NavLink>
            <NavLink to='/' style={navlinkstyle}>Floor Plans</NavLink>

            

            <NavDropdown style={navlinkstyle} align='end' className="DropDown" title="Guides" id="guide-dropdown">

              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>Area Guides</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>Building Guides</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>School Guides</NavLink>
              </NavDropdown.Item>

            </NavDropdown>

           


            <NavDropdown style={navlinkstyle} align='end' className="DropDown" title="Market Intelligence" id="market-intelligence-dropdown">

              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>TruValue™</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>Property Prices</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item style={{position:'relative'}}>
                <NavLink to='/' style={dropdownstyle}>Dubai Transactions
                <span 
                style={{width:'24px',position:'absolute',top:'5px',textAlign:'center',borderRadius:'2px',fontWeight:'bold',fontSize:'8px',backgroundColor:'#ff1d1d21' , color:'#f12424d4'}}>
                  NEW 
                  </span>
                  </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>Trends</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>New Projects</NavLink>
              </NavDropdown.Item>

            </NavDropdown>

            <NavLink to='/' style={navlinkstyle}>Agent Portal</NavLink>



            <NavDropdown style={navlinkstyle} align='end' className="DropDown" title="Events" id="events-dropdown">

              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>B3DXB 2022</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <NavLink to='/' style={dropdownstyle}>Your Home Your Choice</NavLink>
              </NavDropdown.Item>


            </NavDropdown>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}




export default Header;
