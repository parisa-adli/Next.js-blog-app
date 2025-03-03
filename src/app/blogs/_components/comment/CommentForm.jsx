"use client";

import { createComment } from "@/lib/actions";
import Button from "@/ui/Button";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  message: "",
  error: "",
};

function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState("");

  //   const createCommentWithData = createComment.bind(null, postId, parentId);
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            //action={createCommentWithData}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CommentForm;
