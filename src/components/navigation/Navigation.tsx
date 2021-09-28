import styled from '@emotion/styled'
import { styled as muiStyled } from '@mui/material/styles';
import { Button, Menu, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import navData from './config'

const data = navData

const Navigation = ({logout , isAuth} :any) => {

    const handleLogout = () => {
        logout()
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between" padding="20px">
            <Box textAlign="center" width="400px" sx={{
                a : {
                    textDecoration: 'none',
                    color: '#000',
                    fontWeight: '600'
                }
            }}>
                <a href="/">Your Logo is Here</a>
            </Box>
            <Box display="flex" width="400px" justifyContent="center" className="nav-link" alignItems="center">
                {
                    data.map((entry) => {
                        if(entry.child !== undefined) {
                            return(
                            <div>
                                <StyledButton
                                    variant="text"
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <h4>
                                        {entry.name}
                                    </h4>
                                    
                                </StyledButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {
                                        entry.child.map((child) => {
                                            return (
                                                <a style={{textDecoration: 'none', color: '#000'}} href={child.href}>
                                                    <MenuItem onClick={handleClose}> {child.name} </MenuItem>
                                                </a>
                                            )
                                        })
                                    }
                                </Menu>
                            </div>
                            )
                        }
                        return(
                            <NavLink key={entry.name} href={entry?.href} >
                                {entry.name}
                            </NavLink>
                        )
                    })
                }
            </Box>
            <Box className="nav-link" width="400px" textAlign="center" display="flex" alignItems="center">
                {
                    isAuth ? <NavLink onClick={handleLogout}>Log Out</NavLink>:<NavLink href="/login">Log In</NavLink>
                }
                {console.log(isAuth)}
                <NavLink>Contact</NavLink>
                <InvestButton variant="contained">Try For Free</InvestButton>
            </Box>
        </Box>
    )
}

const NavLink = styled.a`
    text-decoration: none;
    color: #000;
    font-weight: 600;
    margin-right: 30px;
`
const InvestButton = styled(Button)`
    box-shadow: none;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 5px;
    font-family: inherit;
    text-transform: none
`

const StyledButton = muiStyled(Button)({
    color: '#000',
    textTransform: 'none',
    fontSize: '16px',
    marginRight: '20px'
  });

export default Navigation
