import { Suspense } from "react";
import PostList from "../_components/PostList";
import Loading from "../loading";

// how to revalidate, time-based
export const revalidate = 15;
// after 15s => re-build :
// 1. pass time interval
// 2. new incoming request to rebuild this page
// 3. update data will be shown to the next user

// export const revalidate = 0 => dynamic page => opt out;

// export const experimental_ppr = true;

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
