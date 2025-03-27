import Image from "next/image";
import styles from "./section-1.module.css";

export const SectionOne = () => {
  return (
    //  <meta charset="UTF-8">
    //  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //  <title>Plumber Service</title>
    //  <link rel="stylesheet" href="styles.css">

    <div className={`${styles["container"]}`}>
      <div className={`${styles["text-content"]}`}>
        <h1 className={`${styles["header-text"]}`}>BOOK A LOCAL PLUMBER</h1>
        <h2 className={`${styles["sub-header-text"]}`}>
          Book a plumber to installing bathrooms appliances.
        </h2>
        <p className={`${styles["service-description"]}`}>
          Our fully qualified plumbers operate throughout London, attending
          plumbing emergencies, conducting plumbing repairs, and installing
          bathrooms and appliances.
        </p>
        <a className={`${styles["book-button"]}`}>
          Book a Local Plumber <span className="arrow">→</span>
        </a>
      </div>
      <div className={`${styles["image-container"]}`}>
        {/* <img src="assets/banner_0.png" alt="Plumber installing bathroom appliance" className={`${styles["banner-image"]}`}> */}
        <Image
          src="/assets/section-1/banner_0.png"
          alt="Plumber installing bathroom appliance"
          className={`${styles["banner-image"]}`}
          width={640}
          height={460}
        />
      </div>
    </div>
  );
};
