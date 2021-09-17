import styled from '@emotion/styled'
import { Button , Box } from '@mui/material'
import React from 'react'

const RecordBox = () => {
    return (
        <Box sx={{
            background: "#fff",
            borderRadius: "10px",
            width: "800px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "20px"
        }}>
            <Box display="flex" alignItems="center" height="100%" justifyContent="space-between">
                <Box width="400px" border="1px solid #333" height="100%" borderRadius="5px">

                </Box>
                <Box>
                    <RecordButton variant="contained">
                        Record Now
                    </RecordButton>
                    <RecordButton variant="contained" color="error" disabled>
                        Stop
                    </RecordButton>
                </Box>
            </Box>
        </Box>
    )
}
const RecordButton = styled(Button)`
    box-shadow: none;
    padding: 15px 20px;
    border-radius: 5px;
    font-family: inherit;
    margin-right: 10px
`
export default RecordBox
