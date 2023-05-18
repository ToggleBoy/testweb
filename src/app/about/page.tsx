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
            { ` Meet Radhakrishnan, a vibrant soul from Ranipet, Tamil Nadu. With
              a passion for movies, programming, and sports (cricket and
              badminton), he blends his diverse interests into a fusion of
              creativity. Exploring the magic of cinema, he delves into various
              genres, dissecting narratives and sparking engaging conversations.
              As a programming virtuoso, he thrives on crafting innovative
              solutions to real-world challenges.`}
            </p>
          </div>
        </div>
      </div>
      <div className="about-body">
        <div>
          <h3>Interests & Hobbies</h3>
          <div className="interest-section">
            {interest.map((list, index) => (
              <InterestList
                data={list}
                interestIcon={interestIcon[index]}
                key={index}
              />
            ))}
          </div>
        </div>
        <div>
          <h3>Timeline</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
