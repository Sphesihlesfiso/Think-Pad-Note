import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <header className="flex px-5 py-3 sticky justify-between border">
      <div>
        <div className="font-normal items-center md:font-bold text-3xl">
          ThinkBoard
        </div>
      </div>
      <div className="flex gap-1.5">
        <ModeToggle />

        <Button>
          <div className="flex gap-0.5 items-center">
            <Plus /> New Note
          </div>
        </Button>
      </div>
    </header>
  );
};
