import { NavBar } from "@/components/NavBar";
import { NoteCard } from "@/components/NoteCard";
export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-2 mt-8 mx-4">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </>
  );
};
