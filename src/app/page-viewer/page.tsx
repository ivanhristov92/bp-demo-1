import { PageViewerPresenter } from "./page-viewer.presenter";

export default function Page() {
  return (
    <PageViewerPresenter
      defaultComparisonImage={
        "https://ihac-academy-assets.s3.us-east-1.amazonaws.com/ihac-academy-demo-1/Group+13.png"
      }
      defaultHostedWebsiteUrl={"http://localhost:8080"}
    />
  );
}
