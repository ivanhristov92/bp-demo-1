"use client";

import { SolutionPreview } from "./components/solution-preview";

import { useState } from "react";

export const PageViewerPresenter = ({
  defaultComparisonImage,
  defaultHostedWebsiteUrl,
}: any) => {
  const [comparisonImageUrl, setComparisonImageUrl] = useState(
    defaultComparisonImage
  );
  const [hostedWebsiteUrl, setHostedWebsiteUrl] = useState(
    defaultHostedWebsiteUrl
  );

  return (
    <>
      <div>
        <label htmlFor="">Comparison image url</label>
        <input
          type="text"
          onChange={(e) => {
            setComparisonImageUrl(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Website url</label>
        <input
          type="text"
          onChange={(e) => {
            setHostedWebsiteUrl(e.target.value);
          }}
        />
      </div>

      <br />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 40px",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            border: "1px solid #E5E7EB",
            background: "#F8F8F8",
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          <SolutionPreview
            previewPic={comparisonImageUrl}
            hostedWebsiteUrl={hostedWebsiteUrl}
          />
        </div>
        <div
          style={{
            padding: "0 40px",
          }}
        ></div>

        <div
          style={{
            background: "rgb(248, 248, 248)",
            width: "100%",
            height: 20,
          }}
        ></div>
      </div>
    </>
  );
};
