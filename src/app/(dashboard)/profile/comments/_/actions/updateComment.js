"use server";


import { updateCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function updateComment(
  prevState,
  { commentId, formData }
) {
  const cookieStore = cookies();

  const data = {
    status: formData.get("status"),
  };
console.log(data);
  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await updateCommentApi(
      { id: commentId, data },
      options
    );

    revalidatePath("/profile/comments");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    console.log({ error });

    return {
      error,
    };
  }
}
