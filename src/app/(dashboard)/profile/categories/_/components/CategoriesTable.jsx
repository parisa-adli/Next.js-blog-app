import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { getCategoriesApi } from "@/services/categoryService";
import CategoryRow from "./CategoryRow";

async function CategoriesTable() {
  const { categories } = await getCategoriesApi();

  if (!categories.length) return <Empty resourceName="پستی" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>اسلاگ</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {categories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default CategoriesTable;
