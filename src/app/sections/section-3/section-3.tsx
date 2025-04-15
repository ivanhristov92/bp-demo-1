import Image from "next/image";
import styles from "./section-3.module.css";
import Link from "next/link";
export const SectionThree = () => {
  return (
    <section className={`${styles["header-sec"]}`}>
      <div className={`${styles.container}`}>
        <div className={styles["navbar-sec"]}>
          <div className={styles["navbarSec__left"]}>
            <div className={styles.logo}>
              <Link href="#">
                <h1>Business Logo</h1>
              </Link>
            </div>
            <div className={styles.navbarSec__inner}>
              <nav>
                <ul>
                  <li>
                   <Link href="#">Home</Link>
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
                020 4527 6468
              </button>
              <button className={styles["navbarSec__button-booking"]}>
                Request Booking
              </button>
            </div>
          </div>
        </div>
        {/* Ending the navbar sec */}
        <div className="header-description">
          <div className="header-description__inner">
            <h6>Excellent</h6>
            <div className="header-description__stars">{/* <Image /> */}</div>
          </div>
          <div className="header-description__afterdesc">
            <h2>Precision Plumbing Solutions for Every Leak and Clog</h2>
            <p>
              We have been offering plumbing as our core service in London, and
              our local registered and trusted professional plumbers.
            </p>
            <div className="header-description__actions">
              <button
                className={`${styles["header-description-booking"]} ${styles["header-description-booking--primary"]}`}
              >
                Request Booking
              </button>
              <button
                className={`${styles["header-description-booking"]} ${styles["header-description-booking--secondary"]}`}
              >
                Request Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
