import { useEffect, useState } from "react";
import { IFrame } from "./iframe";

export const SolutionPreview = ({ previewPic, hostedWebsiteUrl }: any) => {
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      setImgHeight(img.height);
    };
    img.src = previewPic;
  }, [previewPic]);

  return (
    <div
      style={{
        flexGrow: 1,
        width: 1600,
        height: imgHeight,
        margin: "0 auto",
        zIndex: 1000,
        position: "relative",
      }}
    >
      <IFrame
        style={{ height: imgHeight, background: "white" }}
        src={hostedWebsiteUrl}
      ></IFrame>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.7,
          width: 1600,
          margin: "0 auto",
        }}
      >
        <img src={previewPic} />
      </div>
    </div>
  );
};
