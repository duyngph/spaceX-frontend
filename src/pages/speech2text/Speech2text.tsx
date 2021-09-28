import React from 'react'
import { Box } from '@mui/material'
import RecordBox from '../../components/speech2text/RecordBox'


const Speech2text = () => {
    return (
        <Box display="flex" flexDirection="column" mt="50px">
            <Box display="flex" justifyContent="center" padding="20px" height="100%" alignItems="center">
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

export default Speech2text
