import React, { useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const FilerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          number: formData.number,
          email: formData.email,
          address: formData.address,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log("EmailJS response:", response);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(`Failed to send message: ${error.text}`);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default FilerForm;
