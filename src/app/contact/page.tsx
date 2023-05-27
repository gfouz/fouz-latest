"use client";
import * as React from "react";
import s from "./page.module.scss";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

//import Home from "icons/Home";
import ErrorWarning from "components/errorwarning/ErrorWarning";
import SubmitButton from "components/submitbutton/SubmitButton";

import { contactService, ContactData } from "services/httpService";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactData>();

  const emailWarning = "a valid email is required.";
  const warningMessage = "message must not be empty.";

  const [isOver, setIsOver] = React.useState(false);

  const router = useRouter();

  function handleBackwardsButton(
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    evt.preventDefault();
    router.push("/");
  }

  const response = useMutation((data: ContactData) => contactService(data));
  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    response.mutateAsync(data);
  };
  //const message = response?.data?.message || response?.data;
  console.log(response?.data);
  return (
    <div className={s.contact}>
      <form className={s.contact__form} onSubmit={handleSubmit(onSubmit)}>
        <h2
          style={{
            color: errors?.hasOwnProperty("email") ? "#ff0000" : "#ffffff",
            transition: "1s",
          }}
        >
          Contact Me
        </h2>
        <label htmlFor="email" className={isOver ? s.downwards : s.normal}>
          Your email
        </label>
        <Input
          id="email"
          onMouseEnter={() => {
            setIsOver(true);
          }}
          onMouseLeave={() => {
            setIsOver(false);
          }}
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        <ErrorWarning label="email" errors={errors} info={emailWarning} />

        <label htmlFor="message" className={isOver ? "downwards" : "normal"}>
          Your message
        </label>
        <Textarea
          className={
            errors.hasOwnProperty("message") ? "messageError" : undefined
          }
          onMouseEnter={() => {
            setIsOver(true);
          }}
          onMouseLeave={() => {
            setIsOver(false);
          }}
          {...register("message", {
            required: true,
          })}
          style={{ color: "white" }}
        ></Textarea>

        <ErrorWarning label="message" errors={errors} info={warningMessage} />

        <SubmitButton loading={response?.isLoading} />
        {response?.data?.ok ? (
          <p className={s.contact_queryStatus}>
            Thanks, message sent to Giovani!
          </p>
        ) : (
          <p style={{ color: "orange" }}>{response?.data}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
