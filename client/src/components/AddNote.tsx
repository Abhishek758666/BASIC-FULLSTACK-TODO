import { useState } from "react";
import { AxiosInstance } from "../utils/Instance";

const AddNote = () => {
  const [formData, setformData] = useState<any>({
    title: "",
    description: "",
    category: "",
    isCompleted: false,
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setformData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await AxiosInstance.post("notes", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setformData({
      title: "",
      description: "",
      category: "",
      isCompleted: false,
    });
  };

  return (
    <div className="flex items-center justify-center p-5 mt-10 w-max mx-auto bg-[#FCA5A5] border-[#cacaca] border rounded-lg">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="title"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="category"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="category"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="note description"
              className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-1 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
