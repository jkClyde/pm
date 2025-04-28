import connectDB from "@/config/database"
import Card from "@/models/Card"

const page = async () => {
  await connectDB();
  const Cards = await Card.find({}).lean
  return (
    <div></div>
  )
}

export default page