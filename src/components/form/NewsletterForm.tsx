"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
type Input = {
  email: string;
};

const NewsletterForm = () => {
  const { register, handleSubmit, reset } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Subscribed successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rv-1-footer-nwsltr__form"
    >
      <input
        type="email"
        placeholder="Enter your Email..."
        required
        {...register("email")}
      />
      <button className="rv-1-def-btn">
        <span className="txt">Subscribe</span>
      </button>
    </form>
  );
};

export default NewsletterForm;
