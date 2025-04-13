import { PageViewerPresenter } from "./page-viewer.presenter";

export default function Page() {
  return (
    <PageViewerPresenter
      defaultComparisonImage={
        "https://ihac-academy-assets.s3.us-east-1.amazonaws.com/Website+View.png"
      }
      defaultHostedWebsiteUrl={"http://localhost:3000"}
    />
  );
}
