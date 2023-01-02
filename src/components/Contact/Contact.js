import "./Contact.css";
import {useState} from 'react'

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [complete, setComplete] = useState(false);

  // const isFormValid = () => {
  //   if(firstName != "" && lastName != "" && email != "" && subject != "" && message != "") {
  //     return true;
  //   }
  //   return false;
  // }

  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
    if(state.firstName != "" && state.lastName != "" && state.email != "" && state.subject != "" && state.message != "") {
        setComplete(true);
        document.querySelector("#submit").classList.add("complete");
    } else{
      setComplete(false);
      if(document.querySelector("#submit").classList.contains("complete")) {
        document.querySelector("#submit").classList.remove("complete");
      }
    }
  };

  const handleSubmit = (event) => {
    alert("Your message is successfully sent!");
    event.preventDefault();
    setState({ firstName: "", lastName: "", email: "", subject: "", message: ""});
  }

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact Me</h2>
      <p className="contact__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus sem
        malesuada, sollicitudin dui in, eleifend augue.
      </p>
      <form className="contact__form" onChange={handleChange} onSubmit={handleSubmit}>
        <div>
          <section className="full__name">
            <div className="name">
              <label for="first">First name</label>
              <input type="text" id="firstName" value={state.firstName} required></input>
            </div>
            <div className="name">
              <label for="last">Last name</label>
              <input type="text" id="lastName" value={state.lastName}  required></input>
            </div>
          </section>
        </div>
        <label for="email">Email</label>
        <input type="email" id="email" value={state.email}  required></input>

        <label for="subject">Subject</label>
        <input type="text" id="subject" value={state.subject}  required></input>
        
        <label for="message">Message</label>
        <textarea
          value={state.message}
          id="message"
          rows="7"
        ></textarea>
        <button type="submit" id="submit" className="submit__btn" disabled={!complete}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
