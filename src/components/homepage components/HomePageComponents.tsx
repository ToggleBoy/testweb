import Image from "next/image";
import styles from "./HomePage.module.css"

export const HomePage_Icons = () => {
  return (
    <div className="homepage-icons">
      <a
        href="https://www.linkedin.com/in/radhakrishnan-jayaraman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/linkedin.png" alt="linedin icon" width={50} height={45} />
      </a>
      <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src="/facebook.png" alt="facebook icon" width={50} height={45} />
      </a>
      <a
        href="https://www.instagram.com/toggle.boy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={50}
          height={45}
        />
      </a>
      <a
        href="https://twitter.com/Rk3128"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/twitter.png" alt="twitter icon" width={50} height={45} />
      </a>
    </div>
  );
};

export const RoleAnimator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__container}>
          <p className={styles.content__container__text}>I&apos;m a</p>

          <ul className={styles.content__container__list}>
            <li className={styles.content__container__list__item}>Web Developer</li>
            <li className={styles.content__container__list__item}>Software Developer</li>
          </ul>
          <p className={styles.content__container__textend}>Developer</p>

        </div>
      </div>
    </div>
  );
};
