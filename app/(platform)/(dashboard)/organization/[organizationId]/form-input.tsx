"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

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
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
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
