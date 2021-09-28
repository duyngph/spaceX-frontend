import styled from '@emotion/styled'
import { Button , Box } from '@mui/material'
import React, { useEffect, useState } from "react"
import { useReactMediaRecorder } from "react-media-recorder"

const RecordBox = () => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
    
        if (isActive) {
          intervalId = setInterval(() => {
            const secondCounter = counter % 60;
            const minuteCounter = Math.floor(counter / 60);
    
            let computedSecond:any =
              String(secondCounter).length === 1
                ? `0${secondCounter}`
                : secondCounter;
            let computedMinute:any =
              String(minuteCounter).length === 1
                ? `0${minuteCounter}`
                : minuteCounter;
    
            setSecond(computedSecond);
            setMinute(computedMinute);
    
            setCounter((counter) => counter + 1);
          }, 650);
        }
    
        return () => clearInterval(intervalId);
      }, [isActive, counter]);

      function stopTimer() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
      }
    
      const {
        startRecording,
        stopRecording,
        pauseRecording,
        mediaBlobUrl
      } = useReactMediaRecorder({
        video: false,
        audio: true,
      });
      // console.log("deed", mediaBlobUrl);

    // const convertFileToBase64 = (file:any) =>
    // new Promise((resolve, reject) => {
    //   const reader = new FileReader();
    //   reader.readAsDataURL(file.mediaBlobUrl);

    //   reader.onload = () =>
    //     resolve({
    //       fileName: file.title,
    //       base64: reader.result
    //     });
    //   reader.onerror = reject;
    // });

    return (
        <Box sx={{
            background: "#fff",
            borderRadius: "10px",
            width: "800px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "20px"
        }}>
            <Box display="flex" alignItems="center" height="100%" justifyContent="space-between">
                <Box>
                    <audio src={mediaBlobUrl ?? ""} controls loop />
                </Box>
                <Box display="flex" alignItems="center">
                    <TimeBox marginRight="20px">
                      <span className="minute">{minute}</span>
                      <span>:</span>
                      <span className="second">{second}</span>
                    </TimeBox>
                    <RecordButton 
                      variant="contained"
                      color={
                        isActive === true ? "error" : "success"
                      } 
                      onClick={() => {
                        if (!isActive) {
                          startRecording()
                        } else {
                          pauseRecording()
                          stopRecording()
                          stopTimer()
                        }

                        setIsActive(!isActive);
                      }}
                    >
                        {isActive ? "Stop" : "Start"}
                    </RecordButton>
                    {/* <RecordButton 
                    variant="contained" color="primary"  
                    onClick={stopTimer}
                    >
                        Reset
                    </RecordButton> */}
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
const TimeBox =styled(Box)`
  span {
    font-size: 40px
  }
`

export default RecordBox
