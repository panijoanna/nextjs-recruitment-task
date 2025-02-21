import UserList from "@/components/UserList";
import { query } from "../api/db";
interface SearchParams {
  page?: string;
}

const UserPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const page = parseInt(searchParams.page || "1", 10);
  const pageSize = 5;
  const offset = (page - 1) * pageSize;
  let users = [];
  let hasNextPage = false;

  try {
    const result = await query("SELECT * FROM users LIMIT $1 OFFSET $2", [
      pageSize + 1,
      offset,
    ]);
    users = result.rows.slice(0, pageSize);
    hasNextPage = result.rows.length > pageSize;
  } catch (error) {
    console.error("Database query error:", error);
  }

  return (
    <UserList users={users} currentPage={page} hasNextPage={hasNextPage} />
  );
};

export default UserPage;
