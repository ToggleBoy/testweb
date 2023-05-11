import FormSection from "@/components/contacts-components/FormSection";

const ContactMe = () => {
  return (
    <div className="contacts">
      <div className="contacts-header">
        <h2>Contact Me</h2>
        <p>Reach me Out through Social Media</p>
        <p>Email:- radhakrisnan3128@gmail.com</p>
        <p>Ph. no.:- +91 866 735 1498</p>
        {/* <Social_Icons /> */}
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
        </div>
        <div className="form-section">
          <h3>Form</h3>
          <FormSection />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
