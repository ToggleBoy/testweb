import { InterestList } from "@/components/about-components/AboutSection";

const About = () => {
  const interest: string[] = [
    "Gaming",
    "Badminton",
    "Swimming",
    "Running",
    "Programming",
    "Music",
    "Movies",
  ];

  return (
    <div className="about">
      <div className="about-header">
        <h2>Profile</h2>
        <div className="about-intro">
          <div className="intro-img">
            <p>Image</p>
          </div>
          <div className="intro-para">
            <h4>Bio</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              voluptatibus numquam debitis eos earum quaerat eius excepturi ex
              quisquam perspiciatis alias quidem et explicabo, voluptatum veniam
              impedit voluptates sint? Placeat.
            </p>
          </div>
        </div>
      </div>
      <div className="about-body">
        <div>
          <h2>Interests & Hobbies</h2>
          <div className="interest-section">
            {interest.map((list, index) => (
              <InterestList data={list} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h2>TimeLine / Carousel</h2>
          <p>Born to Till now</p>
        </div>
      </div>
    </div>
  );
};

export default About;
