"use client";
import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const UserPagination = ({ currentPage, totalPages }: PaginationProps) => {
  const router = useRouter();

  const goToPage = (page: number) => {
    router.push(`/users?page=${page}&per_page=5`);
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <button
        className={`px-6 py-1 font-semibold rounded-lg focus:outline-none focus:ring-2 transition-all ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray font-semibold"
        }`}
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Previous
      </button>

      <span className="text-lg text-gray-800 font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        className={`px-6 py-1 font-semibold rounded-lg focus:outline-none focus:ring-2 transition-all ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray font-semibold"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default UserPagination;
