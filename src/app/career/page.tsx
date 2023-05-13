import {
  TechList,
  Experience_section,
  PerosnalList,
  AboutHeader,
  EducationQualification,
} from "@/components/career-components/CareerSection";

const About = () => {
  const techSkill: string[] = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "HTML",
    "CSS",
    "C++",
    "Figma",
    "Python",
  ];
  const perosnalSkills: string[] = [
    "Problem Solving",
    "Planning",
    "Organizing",
    "Time Management",
  ];

  return (
    <div className="career">
      <div className="career-header">
        <AboutHeader />
      </div>
      <div className="about-body">
        <div className="contents">
          <div className="Skill">
            <h3>Skills</h3>
            <div>
              {techSkill.map((list, index) => (
                <TechList data={list} key={index} />
              ))}
            </div>
            <div>
              {perosnalSkills.map((list, index) => (
                <PerosnalList data={list} key={index} />
              ))}
            </div>
          </div>
          <div className="Experience">
            <h3>Experience</h3>
            <Experience_section />
          </div>
          <div className="Education">
            <h3>Education Qualification</h3>
            <EducationQualification />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
