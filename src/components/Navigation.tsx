import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navigation = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" padding="20px">
            <Box textAlign="center" width="300px">
                <h4>Your Logo is Here</h4>
            </Box>
            <Box className="nav-link" textAlign="center" width="900px">
                <NavLink href="#" >
                    Tutorial
                </NavLink>
                <NavLink href="#">
                    Resources
                </NavLink>
                <NavLink href="#">
                    Support
                </NavLink>
            </Box>
            <Box className="nav-link" textAlign="center" width="300px">
                <NavLink>Login</NavLink>
                <NavLink>Contact</NavLink>
                <InvestButton variant="contained">Try For Free</InvestButton>
            </Box>
        </Box>
    )
}

const NavLink = styled.a`
    margin-right: 30px;
    text-decoration: none;
    color: #000;
    font-weight: 600
`
const InvestButton = styled(Button)`
    box-shadow: none;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 5px;
    font-family: inherit;
    text-transform: none
`

export default Navigation
