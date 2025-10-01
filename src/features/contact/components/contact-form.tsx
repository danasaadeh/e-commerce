import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", form);
    // TODO: integrate with backend API (using axios + react-query)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextField
          name="name"
          label="Your Name *"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Your Email *"
          value={form.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="phone"
          label="Your Phone *"
          value={form.phone}
          onChange={handleChange}
          fullWidth
        />
      </div>

      <TextField
        name="message"
        label="Your Message"
        value={form.message}
        onChange={handleChange}
        multiline
        rows={5}
        fullWidth
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          variant="contained"
          color="error"
          className="px-6 py-2"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
