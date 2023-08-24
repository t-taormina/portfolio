import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:taormina.dev@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
    ${formData.message} \n[${formData.email}]`;
  };
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="header">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="items-center text-3xl font-semibold text-center">
          Feel free to{" "}
          <span className="underline decoration-[#F391AC]/50">reach out!</span>
        </h4>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F391AC] h-7 w-7 animate-pulse" />
          <p className="text-xl font-semibold">taormina.dev@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#F391AC] h-7 w-7 animate-pulse" />
          <p className="text-xl font-semibold">Hillsboro, OR</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        ></input>
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F391AC] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
