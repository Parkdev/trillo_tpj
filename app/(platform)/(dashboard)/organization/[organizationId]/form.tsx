"use client";

// import { create } from "@/actions/create-board";
// import { useFormState } from "react-dom";
import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export function Form() {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(create, initialState);
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error, "ERROR!");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
}
