import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";

function UsersRow({ index, user }) {
  const { name, email, createdAt } = user;
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        {/* <div className="flex items-center gap-x-3">
          <UpdateComment comment={users} />
          <DeleteComment id={users._id} />
        </div> */}
        ...
      </td>
    </Table.Row>
  );
}
export default UsersRow;
