import { InterestList } from "@/components/about-components/AboutSection";

const About = () => {
  const interest: string[] = [
    "Gaming",
    "Badminton",
    "Cricket",
    "Ping Pong",
    "Swimming",
    "Running",
    "Programming",
    "Music",
    "Movies",
    "Novel Reading",
    "Tv Series",
    "Trekking",
  ];

  const interestIcon = [
    "🎮",
    "🏸",
    "🏏",
    "🏓",
    "🏊‍♂️",
    "🏃‍♂️",
    "🖳",
    "🎵",
    "🎬",
    "📖",
    "🎥",
    "🌄",
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
          <h3>Interests & Hobbies</h3>
          <div className="interest-section">
            {interest.map((list, index) => (
              <InterestList data={list} interestIcon={interestIcon[index]} key={index} />
            ))}
          </div>
        </div>
        <div>
          <h3>TimeLine / Carousel</h3>
          <p>Born to Till now</p>
        </div>
      </div>
    </div>
  );
};

export default About;
