export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

export type UserListProps = {
  users: User[];
  page: number;
  totalPages: number;
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}
