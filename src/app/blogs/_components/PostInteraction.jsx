import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberformatter";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function PostInteraction({ post }) {
  return (
    <div className="flex items-center gap-x-3">
      <ButtonIcon variant="red">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant="secondary">
        <ChatBubbleLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="primary">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
}
export default PostInteraction;
