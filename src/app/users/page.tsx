import UserList from "@/components/UserList";
import { query } from "../api/db";

const UserPage = async () => {
  let users = [];
  try {
    const result = await query("SELECT * FROM users");
    users = result.rows;
  } catch (error) {
    console.error("Database query error:", error);
  }

  return <UserList users={users} />;
};

export default UserPage;
