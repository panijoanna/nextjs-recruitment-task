import { getUsers, getUsersCount } from "@/app/api/db";
import UserList from "@/components/user/UserList";

const UserPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const getSearchParams = async () => {
    return searchParams;
  };

  const params = await getSearchParams();
  const page = parseInt(params.page as string) || 1;
  const perPage = parseInt(params.per_page as string) || 5;

  const users = await getUsers(page, perPage);
  const totalUsers = await getUsersCount();
  const totalPages = Math.ceil(totalUsers / perPage);

  return <UserList users={users} page={page} totalPages={totalPages} />;
};

export default UserPage;
