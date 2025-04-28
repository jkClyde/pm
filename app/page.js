import KanbanPage from "@/components/kanban/Kanban";
import connectDB from "@/config/database";

const page = () => {
  connectDB();
  return (
   
    <div className="flex justify-center items-center w-full relative ">
       <KanbanPage/>
     
    </div>
  )
}

export default page