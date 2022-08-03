import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";
import { Reset } from "styled-reset";
import BorderBox from "./components/BorderBox";
import CustomTable from "./components/CustomTable";

const DATA = [
  {
    questionChoiceList: [
      {
        choiceScore: 0,
        choiceDirection: "전혀 그렇지 않다",
        choiceNo: 1,
      },
      {
        choiceScore: 1,
        choiceDirection: "가끔 그렇다(한 달 동안 7일 미만)",
        choiceNo: 2,
      },
      {
        choiceScore: 2,
        choiceDirection: "종종 그렇다(한 달 동안 14일 미만)",
        choiceNo: 3,
      },
      {
        choiceScore: 3,
        choiceDirection: "자주 그렇다(한 달의 절반 이상)",
        choiceNo: 4,
      },
      {
        choiceScore: 4,
        choiceDirection: "항상 그렇다(한 달 동안 거의 매일)",
        choiceNo: 5,
      },
    ],
    questionNo: 1,
    reactionTitle: "1. 개인적인 문제를 다룰 자신감이 없다.",
  },
  {
    questionChoiceList: [
      {
        choiceScore: 0,
        choiceDirection: "전혀 그렇지 않다",
        choiceNo: 1,
      },
      {
        choiceScore: 1,
        choiceDirection: "가끔 그렇다(한 달 동안 7일 미만)",
        choiceNo: 2,
      },
      {
        choiceScore: 2,
        choiceDirection: "종종 그렇다(한 달 동안 14일 미만)",
        choiceNo: 3,
      },
      {
        choiceScore: 3,
        choiceDirection: "자주 그렇다(한 달의 절반 이상)",
        choiceNo: 4,
      },
      {
        choiceScore: 4,
        choiceDirection: "항상 그렇다(한 달 동안 거의 매일)",
        choiceNo: 5,
      },
    ],
    questionNo: 2,
    reactionTitle: "2. 꼭 해야 하는 일을 처리할 수 없다고 느낀다.",
  },
];

function App() {
  const camera = useRef<CameraType>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile?.current?.click();
  };

  return (
    <div>
      <input
        type="image"
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

      {/* <button
        onClick={() => {
          setIsOpen(true);
          // const photo = camera.current?.takePhoto();
        }}
      /> */}

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
