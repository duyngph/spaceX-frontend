import styled from '@emotion/styled'
import { Button , Box } from '@mui/material'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import React from "react"

const RecordBox = () => {
    

    return (
        <Box>
            <Box display="flex" alignItems="start" height="100%" flexDirection="column">
                <Box
                    style={{
                        width: '800px',
                        height: '200px',
                        border: '1px solid #000'
                    }}
                >

                
                </Box>
                <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
                    <RecordButton
                        variant="contained"
                        startIcon={<DriveFolderUploadIcon/>}
                    >
                        Upload Image
                    </RecordButton>
                    <Box display="flex" flexDirection="column">
                        <div>Status:</div>
                        <div>Loading...</div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
const RecordButton = styled(Button)`
    box-shadow: none;
    padding: 10px 20px;
    border-radius: 0;
    font-family: inherit;
    background-color: #000;
    &:hover {
        background-color: rgba(0,0,0, .8);
    }
`

export default RecordBox
