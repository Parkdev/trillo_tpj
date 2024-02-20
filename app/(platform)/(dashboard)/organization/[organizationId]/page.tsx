import { db } from "@/lib/db";
import { FormEvent } from "react";

const OrganizationIdPage = () => {
  async function create(event: FormEvent<HTMLFormElement>) {
    "use server";

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;

    await db.board.create({
      data: {
        title,
      },
    });
  }

  return (
    <div>
      <form onSubmit={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
