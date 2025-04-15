import styles from "./combined-page.module.css";
import { SectionOne } from "./sections/section-1/section-1";
import { SectionTwo } from "./sections/section-2/section-2";
import { SectionThree } from "./sections/section-3/section-3";
export default function Page() {
  return (
    <div className={styles["combined-page"]}>
      {/* <h1 className={styles["combined-page__title"]}>Combined page</h1> */}

      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
      <SectionThree />
      {/* <p className={styles["section-info"]}>
        To add more sections, go to <b>/src/app/sections</b> and create your own
        code. Then import the new section in <b>/src/app/page.tsx</b>
      </p> */}
    </div>
  );
}
