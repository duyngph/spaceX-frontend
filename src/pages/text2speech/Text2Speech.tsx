import React from 'react'
import { Box } from '@mui/material'
import RecordBox from '../../components/text2speech/RecordBox'

const Text2Speech = () => {
    return (
        <Box display="flex" flexDirection="column" mt="50px" >
            <Box display="flex" justifyContent="center" padding="20px" height="100%" alignItems="center">
                <Box textAlign="center">
                    <h3>Text to Speech Application</h3>
                    <h1>Automatic Text Recognition Technology</h1>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <RecordBox />
            </Box>
        </Box>
    )
}

export default Text2Speech
