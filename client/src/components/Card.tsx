import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

interface CardProps {
  data: any;
  handleDelete: (id: string) => void;
  handleEdit: (
    id: string,
    title: string,
    category: string,
    description: string
  ) => Promise<void>;
  handleCompleted: (
    title: string,
    description: string,
    category: string,
    isCompleted: boolean,
    id: string
  ) => void;
}

const Card = ({
  data,
  handleDelete,
  handleEdit,
  handleCompleted,
}: CardProps) => {
  const [showEdit, setshowEdit] = useState(false);
  const [editValue, seteditValue] = useState({
    id: data?._id,
    title: data?.title,
    category: data?.category,
    description: data?.description,
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    seteditValue((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (
    id: string,
    title: string,
    category: string,
    description: string
  ) => {
    handleEdit(id, title, category, description);
    setshowEdit(false);
  };
  return (
    <div>
      <div
        className={`w-full h-64 flex flex-col justify-between  ${
          data?.isCompleted ? "bg-green-400" : "bg-blue-400"
        } rounded-lg border border-gray-400 mb-6 py-5 px-4`}
      >
        <div className="flex gap-3 flex-col">
          {showEdit ? (
            <input
              value={editValue.title}
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
          ) : (
            <h4 className="text-gray-800 font-bold">{data?.title}</h4>
          )}
          {showEdit ? (
            <input
              value={editValue.category}
              name="category"
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-700 text-sm mb-3">{data?.category}</p>
          )}
          {showEdit ? (
            <textarea
              value={editValue.description}
              name="description"
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{data?.description}</p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between text-gray-800 ">
            <p className="text-sm">{data?.createdAt.slice(0, 10)}</p>
            {showEdit ? (
              <button
                className="bg-purple-400 text-white px-5 py-1"
                onClick={() =>
                  handleEditClick(
                    data?._id,
                    editValue?.title,
                    editValue?.category,
                    editValue?.description
                  )
                }
              >
                save
              </button>
            ) : (
              <div className="flex gap-3">
                <button
                  className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                  onClick={() =>
                    handleCompleted(
                      data?.title,
                      data?.description,
                      data?.category,
                      !data?.isCompleted,
                      data?._id
                    )
                  }
                >
                  {!data?.isCompleted ? <FaCheck /> : <ImCross />}
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-red-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                  onClick={() => handleDelete(data?._id)}
                >
                  <MdDelete />
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-black"
                  aria-label="edit note"
                  role="button"
                  onClick={() => setshowEdit((prev) => !prev)}
                >
                  <FaEdit />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
