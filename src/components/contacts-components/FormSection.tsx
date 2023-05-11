import Image from "next/image";
import "./FormSection.css";

export const Form_section = () => {
  return (
    <div className="box">
      <form>
        <div className="input-container">
          <input type="email"/>
          <label>Email</label>
        </div>
        <div className="input-container">
          <input type="email"/>
          <label>Full Name</label>
        </div>
        <div className="input-container">
          <textarea className="text-area" placeholder="Comment" />
        </div>
        <button type="button" className="button tooltip">
          submit <span className="tooltiptext">Under Progression</span>
        </button>
      </form>
    </div>
  );
}

export const Social_Icons = () => {
  return (
    <div className="social-icons">
      <Image src="/facebook.png" alt="facebook icon" width={50} height={45}/>
      <Image src="/instagram.png" alt="instagram icon" width={50} height={45}/>
      <Image src="/linkedin.png" alt="linedin icon" width={50} height={45}/>
      <Image src="/twitter.png" alt="twitter icon" width={50} height={45}/>
    </div>
  )
}
