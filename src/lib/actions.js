"use server";

import { createCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(postId, parentId, formData) {
  try {
    const cookiesStore = await cookies();
    const options = await setCookieOnReq(cookiesStore);

    const rawFormData = {
      postId,
      parentId,
      text: formData.get("text"),
    };
    const { message } = await createCommentApi(rawFormData, options);
    console.log({ message });
  } catch (error) {
    console.log(error?.response?.data?.message);
    }
    revalidatePath("/blogs/[slug]")
}
