import "./FormSection.css";

function Form_section() {
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

export default Form_section;
