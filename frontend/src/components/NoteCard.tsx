import { Edit, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { InputForm } from "./InputForm";

export const NoteCard = () => {
  return (
    <div className="flex flex-col gap-2 p-3 border-t-8 rounded-2xl border-foreground ">
      <h1 className="font-bold">NoteCard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veritatis
        repudiandae vitae eaque modi, non animi saepe nihil odio dolor excepturi
        at minus hic nulla eveniet eius alias aspernatur illum.
      </p>
      <div className="flex justify-between">
        <p>12 May 2025</p>
        <div className="flex gap-1">
            <Button><Edit/></Button>
            <Button><Trash/></Button>
            <InputForm/>
        </div>
      </div>
    </div>
  );
};
