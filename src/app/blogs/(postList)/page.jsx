import { Suspense } from "react";
import PostList from "../_components/PostList";
import Loading from "../loading";


async function BlogPage() {
  return (
    <div>
      <p className="text-2xl font-bold text-secondary-700 mb-8">لیست پست ها</p>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
export default BlogPage;
