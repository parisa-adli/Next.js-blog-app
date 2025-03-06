import BreadCrumbs from "@/ui/BreadCrumbs";

function page() {
  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ایجاد پست",
            href: "/profile/posts/create",
            active: true,
          },
        ]}
      />
      create post form
    </div>
  );
}
export default page;
