import { Button } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "react-camera-pro";
import Iframe from "react-iframe";
import { Reset } from "styled-reset";
import BorderBox from "./components/BorderBox";
import CustomTable from "./components/CustomTable";
import { isMobile, isAndroid, isIOS } from "react-device-detect";

interface Message {
  type: string;
  payload?: any;
}

function App() {
  const camera = useRef<CameraType>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile?.current?.click();
  };
  
  useEffect(() => {
    // window.addEventListener("message", (data) => {
    //   alert(data);
    //   // console.log(data);
    // });
    getReactNativeMessage();
  }, []);

  const postMessage = () => {
    // 메시지 보낼 땐 그냥 window 함수 사용
    window.ReactNativeWebView.postMessage(JSON.stringify({ message: "hello" }));
  };

  const getReactNativeMessage = () => {
    if (!isMobile) {
      return;
    }

    const listener = (event: any) => {
      const parsedData = JSON.parse(event.data);

      alert(parsedData);
      alert(event);
      // if (parsedData?.type === "bananaFromApp") {
      //   setBananaFromApp(parsedData?.payload);
      //   sendReactNativeMessage({ type: 'webReceiveTheToken' });
      // }
    };

    if (window.ReactNativeWebView) {
      if (isAndroid) {
        document.addEventListener("message", listener);
      }
      if (isIOS) {
        window.addEventListener("message", listener);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      {/* <Reset /> */}

      {isOpen && (
        <Camera
          ref={camera}
          aspectRatio={"cover"}
          errorMessages={{
            noCameraAccessible:
              "No camera device accessible. Please connect your camera or try a different browser.",
            permissionDenied:
              "Permission denied. Please refresh and give camera permission.",
            switchCamera:
              "It is not possible to switch camera to different one because there is only one video device accessible.",
            canvas: "Canvas is not supported.",
          }}
          numberOfCamerasCallback={(number) => console.log(number)}
        />
      )}

      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        사진 찍기 ~~
      </Button>

      <Button variant="outlined" onClick={() => onButtonClick()}>
        앨범 ~~
      </Button>

      <Button variant="outlined" onClick={() => postMessage()}>
        데이터쏘기~
      </Button>

      {/* {DATA.map((value) => (
        <CustomTable
          title={value.reactionTitle}
          option={value.questionChoiceList}
        />
      ))} */}
    </div>
  );
}

export default App;
