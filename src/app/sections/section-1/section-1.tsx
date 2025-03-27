import styles from "./section-1.module.css";

export const SectionOne = () => {
  return (
    <section className={`${styles["section-one"]}`}>
      <p>This is a sample section.</p>

      <br />

      <p>
        Replace the code in <b>/src/app/sections/section-1</b> to add your own
        React or CSS code
      </p>

      <br />
      <div>
        <span>Sample image</span>

        <br />

        <p>
          You can see a sample image bellow. To add your images to this section,
          go to <b>/public/assets/section-1</b> and copy all the image files you
          need there.
        </p>

        <br />

        <br />
        <img
          src="assets/section-1/globe.svg"
          alt=""
          className={styles["section-one__image"]}
        />
      </div>
    </section>
  );
};
