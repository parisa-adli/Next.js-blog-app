import { getPostById } from "@/services/postServices";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(await postId);
  console.log(post);
  if (!post) {
    notFound();
  }
  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          {
            label: "پست ها",
            href: "/profile/posts",
          },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm />
    </div>
  );
}
export default EditPage;
