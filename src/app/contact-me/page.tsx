
import {
  Form_section,
  // Maps,
  Social_Icons,
} from "@/components/contacts-components/ContactSection";

const ContactMe = () => {
  return (
    <div className="contacts">
      <div className="contacts-header">
        <h2>Contact Me</h2>
        <p>Email:- radhakrisnan3128@gmail.com</p>
        <p>Ph. no.:- +91 866 735 1498</p>
        <p>Reach me Out through Social Media</p>
        <Social_Icons />
      </div>

      <div className="contacts-body">
        <div className="loaction">
          <h3>Location</h3>
          <div className="address">
            <p>Radhakrishnan Jayaraman</p>
            <p>No. 48, LIG-TNHB,</p>
            <p>Seekarajapuram Ranipet,</p>
            <p>TamilNadu - India.</p>
            <p>Postal Code :- 632 515</p>
          </div>
          {/* <div>
            <Maps />
          </div> */}
        </div>
        <div className="form-section">
          <h3>Feedback</h3>
          <Form_section />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

