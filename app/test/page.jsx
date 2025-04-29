import connectDB from "@/config/database";
import Card from "@/models/Card";

const page = async () => {
  await connectDB();
  const cards = await Card.find({}).lean(); // <- Add () to lean

  return (
    <div>
      {cards.map((card) => (
        <div key={card._id}>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>Column: {card.column}</p>
          <p>Due: {card.dueDate ? new Date(card.dueDate).toLocaleDateString() : 'No due date'}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
