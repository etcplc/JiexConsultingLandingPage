"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type Inputs = {
  name: string;
  email: string;
  address: string;
  service: string;
  guest: string;
  meal: string;
  msg: string;
};

const ContactForm2 = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Preference submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rv-5-contact-form">
      <input
        type="text"
        id="rv-5-contact-name"
        placeholder="Full Name"
        required
        {...register("name")}
      />
      <input
        type="email"
        id="rv-5-contact-email"
        placeholder="Email"
        required
        {...register("email")}
      />
      <input
        type="text"
        id="rv-5-contact-address"
        placeholder="Address"
        required
        {...register("address")}
      />
      <select id="rv-5-contact-services" required {...register("service")}>
        <option value="none" hidden>
          Services
        </option>
        <option value="wedding-dress">Wedding Dress</option>
        <option value="event-planning">Event Planning</option>
        <option value="cake-design">Cake Desgin</option>
      </select>

      <select id="rv-5-guest-numbers" required {...register("guest")}>
        <option value="none" hidden>
          Number of Guests
        </option>
        <option value="0-5">0-5</option>
        <option value="5-10">5-10</option>
        <option value="10-15">10-15</option>
        <option value="15+">15+</option>
      </select>

      <select id="rv-5-meal-preferences" required {...register("meal")}>
        <option value="none" hidden>
          Meal Preferences
        </option>
        <option value="wedding-dress">Wedding Dress</option>
        <option value="event-planning">Event Planning</option>
        <option value="cake-design">Cake Desgin</option>
      </select>

      <button type="submit" className="rv-3-def-btn">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm2;
