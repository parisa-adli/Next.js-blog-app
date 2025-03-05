import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/FallBack";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";

async function page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Fallback />} key={query}>
        <PostsTable query={query} />
      </Suspense>
    </div>
  );
}
export default page;
