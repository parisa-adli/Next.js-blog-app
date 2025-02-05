import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
};
function Layout({ children }) {
  return (
    <div>
      <h1 className="mb-4">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3 xl:col-span-2 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 md:col-span-9 xl:col-span-10 ">
          {children}
        </div>
      </div>
    </div>
  );
}
export default Layout;
