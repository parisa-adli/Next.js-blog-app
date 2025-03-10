import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberformatter";
import truncateText from "@/utils/truncateText";

const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--primary",
  },
};

function CategoryRow({ category, index }) {
  const { title, englishTitle, slug, createdAt } = category;
  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{englishTitle}</td>
      <td>{slug}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        {/* <div className="flex items-center gap-x-3">
          <UpdatePost id={category._id} />
          <DeletePost category={category} />
        </div> */}...
      </td>
    </Table.Row>
  );
}
export default CategoryRow;
