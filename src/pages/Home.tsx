import { Box } from '@mui/material'
import React from 'react'
import Navigation from '../components/Navigation'
import RecordBox from '../components/RecordBox'


const Home = ({logout , isAuth} : any) => {

   

    return (
        <Box display="flex" flexDirection="column">
            <Navigation logout={logout} isAuth={isAuth} />
            <Box display="flex" justifyContent="center" padding="20px" height="300px" alignItems="center">
                <Box textAlign="center">
                    <h3>Speech to Text Application</h3>
                    <h1>Automatic Voice Recognition Technology</h1>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <RecordBox/>
            </Box>
        </Box>
    )
}

export default Home
