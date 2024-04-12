import { CommentCard, AddComment } from "../../components";

export const CommentSection = ({ id, count }) => {
  return (
    <div className="py-8 w-full ">
      <AddComment id={id} />
      <h1 className="m-8 text-2xl text-gray-600 dark:text-white">
        Answers ({count})
      </h1>
      <CommentCard />
    </div>
  );
};
