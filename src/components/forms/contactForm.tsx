// LIBRARIES
import { useState, type BaseSyntheticEvent, type FocusEvent } from "react";
import { useForm } from "react-hook-form";

// TRPC
import { api } from "~/trpc/react";

// COMPONENTS
import {
  MESSAGE_MAX_LENGTH,
  defaultValues,
  schema,
  type SchemaKey,
} from "~/components/forms/contactFormSchema";
import ContactFormSuccess from "~/components/forms/contactFormSuccess";
import { Button } from "../ui/button";

// COMPONENT
const ContactForm = () => {
  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // RHF
  const {
    getValues,
    register,
    setFocus,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  // tRPC
  const sendEmailToMe = api.email.sendEmailToMe.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    onError: (error) => {
      setIsSubmitting(false);
    },
  });
  const sendEmailToVisitor = api.email.sendEmailToVisitor.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    onError: (error) => {
      setIsSubmitting(false);
    },
  });

  // Handle Field Validation
  const validateField = (field: SchemaKey, value: string) => {
    clearErrors(field);
    const result = schema[field].safeParse(value);
    if (!result.success) {
      setError(field, { message: result.error.formErrors.formErrors[0] });
    }
  };

  // Handle Submit
  const onSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    validateField("email", getValues("email"));
    validateField("message", getValues("message"));
    if (!errors.email && !errors.message) {
      sendEmailToMe.mutate(getValues());
      sendEmailToVisitor.mutate(getValues());
      setIsSubmitting(true);
    }
    if (errors.email) {
      setFocus("email");
    }
  };

  if (isSuccess) return <ContactFormSuccess />;
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="flex w-full flex-col justify-start"
    >
      <label
        htmlFor="email"
        onClick={() => setFocus("email")}
        className="w-full pb-1 tracking-wider"
      >
        {`Email address`}
        {errors.email?.message ? (
          <p className="text-error text-sm">{errors?.email?.message}</p>
        ) : null}
      </label>
      <input
        type="text"
        placeholder="Enter your email"
        className={
          "w-full rounded-md p-2 text-base text-black placeholder-black/80" +
          (errors?.email?.message
            ? " border-error border-2 border-y-4 border-solid"
            : "")
        }
        {...register("email", {
          onBlur: (event: FocusEvent<HTMLInputElement>) =>
            validateField(event.target.name as SchemaKey, event.target.value),
        })}
      />
      <div className="p-2" />
      <label
        htmlFor="message"
        onClick={() => setFocus("message")}
        className="w-full pb-1 tracking-wider"
      >
        {`Message`}
        {errors.message?.message ? (
          <p className="text-error text-sm">{errors?.message?.message}</p>
        ) : null}
      </label>
      <textarea
        placeholder="Send me a quick message letting me know what you wanna chat about. I'll get back to ya :)"
        className={
          "w-full min-w-full rounded-md p-2 text-base text-black placeholder-black/80" +
          (errors?.message?.message
            ? " border-error border-2 border-y-4 border-solid"
            : "")
        }
        rows={5}
        maxLength={MESSAGE_MAX_LENGTH}
        {...register("message", {
          onBlur: (event: FocusEvent<HTMLInputElement>) =>
            validateField(event.target.name as SchemaKey, event.target.value),
        })}
      />
      <div className="p-2" />
      <Button
        type="submit"
        className="w-full text-lg font-semibold lowercase tracking-wider"
        disabled={isSubmitting}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
