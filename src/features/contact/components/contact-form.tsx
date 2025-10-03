"use client";

import type React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      {/* Top Row: Name, Email, Phone */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <TextField
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#F5F5F5",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
              "&.Mui-focused": {
                backgroundColor: "#F5F5F5",
              },
            },
          }}
        />
        <TextField
          name="email"
          type="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#F5F5F5",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
              "&.Mui-focused": {
                backgroundColor: "#F5F5F5",
              },
            },
          }}
        />
        <TextField
          name="phone"
          type="tel"
          placeholder="Your Phone *"
          value={formData.phone}
          onChange={handleChange}
          required
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: "#F5F5F5",
              borderRadius: "4px",
            },
          }}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "#F5F5F5",
              "&:hover": {
                backgroundColor: "#F5F5F5",
              },
              "&.Mui-focused": {
                backgroundColor: "#F5F5F5",
              },
            },
          }}
        />
      </div>

      {/* Message Textarea */}
      <TextField
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        multiline
        rows={8}
        fullWidth
        variant="filled"
        InputProps={{
          disableUnderline: true,
          style: {
            backgroundColor: "#F5F5F5",
            borderRadius: "4px",
          },
        }}
        sx={{
          mb: 3,
          "& .MuiFilledInput-root": {
            backgroundColor: "#F5F5F5",
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
            "&.Mui-focused": {
              backgroundColor: "#F5F5F5",
            },
          },
        }}
      />

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#DB4444",
            color: "white",
            padding: "12px 48px",
            borderRadius: "4px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#C23333",
            },
          }}
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
