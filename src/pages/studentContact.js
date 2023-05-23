import "./studentContact.css";

import { useState } from "react";

function StudentContact(prop) {
  const [placeholderStyle, setPlaceholderStyle] = useState({
    name: "placeholder",
    email: "placeholder",
    phone: "placeholder"
  });
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onBlur = (e) => {
    const name = e.target.name;
    if (input[name]) {
      setPlaceholderStyle({
        ...placeholderStyle,
        [name]: "input-placeholder-onblur"
      });
    } else {
      setPlaceholderStyle({
        ...placeholderStyle,
        [name]: "placeholder"
      });
    }
  };
  return (
    <div className="student-contact-container">
      <h4>Your contact information:</h4>

      <div className="input-container">
        <input
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          name="name"
          value={input.name}
        />
        <span className={placeholderStyle.name}>Name</span>
      </div>
      <div className="input-container">
        <input type="email" value={input.email} name="email" onChange={onChange} onBlur={onBlur}/>
        <span className={placeholderStyle.email}>Email address</span>
      </div>

      <div className="input-container">
        <input type="text" value={input.phone} name="phone" onChange={onChange} onBlur={onBlur}/>
        <span className={placeholderStyle.phone}>Phone number</span>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default StudentContact;
