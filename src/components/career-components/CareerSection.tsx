import Image from "next/image";

export const AboutHeader = () => {
  return (
    <>
      <h2>Resume</h2>
      <div className="header_icons">
        <div>
          <button className="section_button">Software Developer</button>
        </div>
        <div className="link_icons">
          <a
            href="https://www.github.com/toggleboy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/git.png" alt="github" width={40} height={40}/>
          </a>
          <a
            href="https://drive.google.com/file/d/1Tse-K_PEZnbQ5mcYrWV2FcX_ZUDQwLdZ/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/resume.png" alt="resume" width={40} height={40} className="resume"/>
          </a>
        </div>
      </div>
      <p className="intro">
        Hi, This is Radhakrishnan a Curious Lad for Tamilnadu - India. I can
        build complete End - End web application using React.js for front - end,
        Node.js for back - end, PostgreSql for database and so on...
      </p>
    </>
  );
};

export const Experience_section = () => {
  return (
    <div className="experience-content">
      <ul>
        <li>
          <h4>Desktop Support Engineer</h4>
          <p>Techne Online Systems, Vellore</p>
          <p>Nov 2022 - Jan 2023 (3 Months)</p>
        </li>
      </ul>
    </div>
  );
};

export const TechList = ({ data }: any) => (
  <button className="techSkill">{data}</button>
);

export const PerosnalList = ({ data }: any) => (
  <button className="personalSkill">{data}</button>
);

export const EducationQualification = () => {
  return (
    <div className="design-section">
      <div className="timeline">
        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-component timeline-content">
          <h4>Under Graduation (B.E) </h4>
          <p>Major: Electrical & ELectronics Engineering</p>
          <p>Sri Venkateswara College of Engineering</p>
          <p>Year of Passing : 2020</p>
        </div>
        <div className="timeline-component timeline-content">
          <h4>Higher Secondary</h4>
          <p>Major: Computer Science</p>
          <p>DAV BHEL SCHOOL</p>
          <p>Year of Passing : 2015</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className="timeline-empty"></div>

        <div className="timeline-empty"></div>

        <div className="timeline-middle">
          <div className="timeline-circle"></div>
        </div>
        <div className=" timeline-component timeline-content">
          <h4>Senior Secondary</h4>
          <p>DAV BHEL SCHOOL</p>
          <p>Year of Passing : 2013</p>
        </div>
      </div>
    </div>
  );
};
