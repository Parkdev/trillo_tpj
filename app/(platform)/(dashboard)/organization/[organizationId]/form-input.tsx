"use client";

import { useFormStatus } from "react-dom";

interface FormInputProps {
  // eslint-disable-next-line react/require-default-props
  errors?: {
    title?: string[];
  };
}

export function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
      />
      {errors?.title ? (
        <div>
          {errors.title.map((errorMsg: string) => (
            <p key={errorMsg} className="text-rose-500">
              {errorMsg}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
