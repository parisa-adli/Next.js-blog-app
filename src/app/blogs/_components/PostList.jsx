import Image from "next/image";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Avatar from "@/ui/Avatar";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { getPosts } from "@/services/postServices";
import { cookies } from "next/headers";
import { setCookieOnReq } from "@/utils/setCookieOnReq";

async function PostList() {
  const cookieStore = cookies();
  const options = await setCookieOnReq(cookieStore);
  const posts = await getPosts(options);

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-100 p-2 rounded-lg"
        >
          <CoverImage {...post} />
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700">
                {post.title}
              </h2>
            </Link>
            {/* post author - readingTime */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1">خواندن: </span>
                <span className="ml-1">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
export default PostList;
