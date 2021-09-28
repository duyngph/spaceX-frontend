import styled from '@emotion/styled'
import { Button , Box , TextareaAutosize } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from "react"

const RecordBox = () => {
    

    return (
        <Box>
            <Box display="flex" alignItems="start" height="100%" flexDirection="column">
                <TextareaAutosize
                    aria-label="maximum height"
                    minRows={10}
                    placeholder="Minimum 3 rows"
                    style={{ width: '800px' }}
                />
                <RecordButton
                    variant="contained"
                    startIcon={<PlayArrowIcon/>}
                >
                    Speak Now
                </RecordButton>
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
