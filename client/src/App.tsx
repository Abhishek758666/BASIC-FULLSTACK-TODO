import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import Card from "./components/Card";
import { AxiosInstance } from "./utils/Instance";

const App = () => {
  const [notes, setNotes] = useState<any>(null);

  const getNotes = async (): Promise<void> => {
    try {
      const response = await AxiosInstance.get("/notes");
      setNotes(response?.data?.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      const response = await AxiosInstance.delete(`/notes/delete/${id}`);
      getNotes();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleted = async (
    title: string,
    description: string,
    category: string,
    isCompleted: boolean,
    id: string
  ) => {
    const response = await AxiosInstance.patch(`/notes/update/${id}`, {
      title,
      description,
      category,
      isCompleted,
      id,
    });
    console.log(response);
    getNotes();
  };

  const handleEdit = async (
    id: string,
    title: string,
    category: string,
    description: string
  ) => {
    try {
      const response = await AxiosInstance.patch(`/notes/update/${id}`, {
        title,
        category,
        description,
      });
      console.log(response);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="bg-[#FACC15] pt-10 min-h-screen">
      <AddNote />
      <div className="w-full p-20 grid grid-cols-4 gap-5">
        {notes?.map((value: any) => (
          <Card
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
            handleEdit={handleEdit}
            data={value}
            key={value._id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
