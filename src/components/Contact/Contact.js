import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <p className="contact__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem
        malesuada, sollicitudin dui in, eleifend augue.
      </p>
      <form className="contact__form">
        <div>
          <section className="full__name">
            <div className="name">
              <label for="first">First name</label>
              <input type="text" id="first" required></input>
            </div>
            <div className="name">
              <label for="last">Last name</label>
              <input type="text" id="last" required></input>
            </div>
          </section>
        </div>
        <label for="email">Email</label>
        <input type="email" id="email" required></input>
        <label for="subject">Subject</label>
        <input type="text" id="subject" required></input>
        <label for="message">Message</label>
        <textarea
          id="message"
          rows="7"
        ></textarea>
        <button type="submit" className="submit__btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
