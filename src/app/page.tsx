import { SectionOne } from "./sections/section-1/section-1";
import styles from "./combined-page.module.css";

export default function CombinedPage() {
  return (
    <div className={styles["combined-page"]}>
      <h1 className={styles["combined-page__title"]}>Combined page</h1>

      <SectionOne />

      <p className={styles["section-info"]}>
        To add more sections, go to <b>/src/app/sections</b> and create your own
        code. Then import the new section in <b>/src/app/page.tsx</b>
      </p>
    </div>
  );
}
