import Image from "next/image";
import styles from "./section-2.module.css";

export const SectionTwo = () => {
  return (
    <div className={`${styles["continer"]}`}>
      <div className={`${styles["main-header"]}`}>
        <p className={`${styles["heading"]}`}>London plumbers</p>
        <p className={`${styles["sub-disc"]}`}>
          We have a team of certified plumbers ready to help. If you run into a
          plumbing issue any time of the day or night, give us a call and our
          24/7 qualified engineers can help.
        </p>
      </div>
      <div className={`${styles["main-details"]}`}>
        {/* <img
          className={`${styles["mobile-img"]}`}
          src="/assets/section-2/Image_bg.png"
          alt="Mobile background"
        /> */}
        <Image
          className={`${styles["mobile-img"]}`}
          src="/assets/section-2/Image_bg.png"
          alt="Mobile background"
          width={640}
          height={460}
        />
        {/* <img
          className={`${styles["desktop-img"]}`}
          src="/assets/section-2/Desktop_BG.png"
          alt="Desktop background"
        /> */}
        <Image
          className={`${styles["desktop-img"]}`}
          src="/assets/section-2/Desktop_BG.png"
          alt="Desktop background"
          width={640}
          height={460}
        />
        {/* <img
          className={`${styles["tablet-img"]}`}
          src="/assets/section-2/Tablate_BG.png"
          alt="Tablet background"
        /> */}
        <Image
          className={`${styles["tablet-img"]}`}
          src="/assets/section-2/Tablate_BG.png"
          alt="Tablet background"
          width={640}
          height={460}
        />
        <div className={`${styles["sub-details"]}`}>
          <div className={`${styles["sub-header"]}`}>
            <p className={`${styles["sub-heading"]}`}>limited time offers</p>
            <p className={`${styles["heading-sub"]}`}>
              Do you know the scale of the damage hard water causes?
            </p>
            <p className={`${styles["sub-discription"]}`}>
              Protect your appliances from limescale by installing a water
              conditioner from as little as £360
            </p>
          </div>
          <div className={`${styles["btn-heading"]}`}>
            <button className={`${styles["btn"]}`}>
              <span>Claim This Offer</span>
              {/* <img
                className={`${styles["mobile-img"]}`}
                src="/assets/section-2/Right_Arrow.png"
                alt="Mobile arrow"
              /> */}
              <Image
                className={`${styles["mobile-img"]}`}
                src="/assets/section-2/Right_Arrow.png"
                alt="Mobile arrow"
                width={640}
                height={460}
              />
              {/* <img
                className={`${styles["desktop-img"]}`}
                src="/assets/section-2/Desktop_Right_Arrow.png"
                alt="Desktop arrow"
              /> */}
              <Image
                className={`${styles["desktop-img"]}`}
                src="/assets/section-2/Desktop_Right_Arrow.png"
                alt="Desktop arrow"
                width={640}
                height={460}
              />
              {/* <img
                className={`${styles["tablet-img"]}`}
                src="/assets/section-2/Tablet_Right_Arrow.png"
                alt="Tablet arrow"
                style={{ width: "24px" }}
              /> */}
              <Image
                className={`${styles["tablet-img"]}`}
                src="/assets/section-2/Tablet_Right_Arrow.png"
                alt="Tablet arrow"
                style={{ width: "24px" }}
                width={640}
                height={460}
              />
            </button>
            {/* <img
              className={`${styles["slider-img"]}`}
              src="/assets/section-2/Slider.png"
              alt="Slider"
            /> */}
            {/* <Image
              className={`${styles["slider-img"]}`}
              src="/assets/section-2/Slider.png"
              alt="Slider"
              width={640}
              height={460}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
