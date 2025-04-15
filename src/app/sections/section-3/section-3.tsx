
'use client';

import Image from "next/image";
import styles from "./section-3.module.css";
import Link from "next/link";
const logoPath = "/assets/section-3/star.png";
const ratingPath = "/assets/section-3/rating.png";
const PhoneIcon = "/assets/section-3/phone-icon.png";
const BusinessLogo = "/assets/section-3/business-logo.png";
const ArrowIcon = "/assets/section-3/arrow-icon.png";
const PhoneIconBtn = "/assets/section-3/phone-icon-btn.png";
const RightShape = "/assets/section-3/banner-right-shape.png";

// /assets/section-1/banner_0.png
export const SectionThree = () => {
  return (
    <section className={`${styles["header-sec"]}`}>
      <div className={`${styles.container}`}>
        <div className={styles["navbar-sec"]}>
          <div className={styles["navbarSec__left"]}>
            <div className={styles.logo}>
              <Link href="#">
              <Image src={BusinessLogo} alt="Business Logo" width={270} height={48} />
              </Link>
            </div>
            <div className={styles.navbarSec__inner}>
              <nav>
                <ul>
                  <li>
                   <Link href="#" className="link--active">Home</Link>
                  </li>
                  <li>
                   <Link href="#">Plumbing</Link>
                  </li>
                  <li>
                   <Link href="#">Drainage</Link>
                  </li>
                  <li>
                   <Link href="#">Bathrooms</Link>
                  </li>
                  <li>
                   <Link href="#">Commercial</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles["navbarSec__right"]}>
            <div className={styles["navbarSec__actions"]}>
              <button className={styles["navbarSec__button-phone"]}>
              <Image src={PhoneIcon} alt="Logo" width={24} height={24} />
                020 4527 6468
              </button>
              <button className={styles["navbarSec__button-booking"]}>
                Request Booking
              </button>
            </div>
          </div>
        </div>
        {/* Ending the navbar sec */}
        <div  className={styles["header-description"]}>
          <div  className={styles["header-description__inner"]}>
            <h6>Excellent</h6>
            <div  className={styles["header-description__stars"]}>
              <Image src={logoPath} alt="Logo" width={30} height={30} />
              <Image src={logoPath} alt="Logo" width={30} height={30} />
              <Image src={logoPath} alt="Logo" width={30} height={30} />
              <Image src={logoPath} alt="Logo" width={30} height={30} />
              <Image src={logoPath} alt="Logo" width={30} height={30} />
            </div>
            <p  className={styles["header-description__reviews"]}>235 reviews on</p>
            <div  className={styles["header-description__rating"]}>
            <Image src={ratingPath} alt="Logo" width={23} height={23} /> <p>Trustpilot</p>
            </div>
          </div>
          <div   className={styles["header-description__afterdesc"]}>
            <h2>Precision Plumbing Solutions for Every Leak and Clog</h2>
            <p>
              We have been offering plumbing as our core service in London, and
              our local registered and trusted professional plumbers.
            </p>
            <div  className={styles["header-description__actions"]}>
              <button
                className={`${styles["header-description-booking"]} ${styles["header-description-booking--primary"]}`}
              >
                Request Booking
              <Image src={ArrowIcon} alt="Logo" width={18} height={18} />
                
              </button>
              <button
                className={`${styles["header-description-booking"]} ${styles["header-description-booking--secondary"]}`}
              >
                Request Booking
              <Image src={PhoneIconBtn} alt="Logo" width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
