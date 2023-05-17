import Image from "next/image"; 

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
  