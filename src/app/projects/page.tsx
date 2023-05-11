const Projects = () => {
  return (
    <div className="project">
      <div className="project-header">
        <h2>Projects</h2>
        <p>
          These are few projects which are done by Me during self-taught of
          programming languages and Web development. Go on feel free to test or
          use these project and share your thoughts.
        </p>
      </div>
      <div className="project-body">
        <div className="project-left">
          <div className="description">
            <h2>Password Manager</h2>
            <p>
              {`Using Pure Python Programming Language with tkinter GUI. This
              project has been done. The Data's are been stored in json file
              format. Try to Add the Data first in the PassWord_Manager and then
              search it.`}
            </p>
            <a
              target="_blank"
              href="https://github.com/ToggleBoy/PassWord_Manager"
              rel="noopener noreferrer"
              className="viewproject-button"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-right">
          <div>
            {/* <img src={Wo_png} alt="projectimage" width={200} height={200} /> */}
          </div>
          <div className="description">
            <h2>WiggyOmato</h2>
            <p>
              {`It's a Basic food Ordering WebApp with responsive cart
              button/icon. This WebApp is developed in React.js using hooks
              functionality Concepts.`}
            </p>
            <a
              target="_blank"
              href="https://toggleboy.github.io/WiggyOmato"
              rel="noopener noreferrer"
              className="viewproject-button"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
