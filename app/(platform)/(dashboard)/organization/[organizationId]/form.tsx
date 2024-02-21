"use client";

import { Button } from "@/components/ui/button";
import { create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";

export function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <Button type="submit" className="">
        Submit
      </Button>
    </form>
  );
}
