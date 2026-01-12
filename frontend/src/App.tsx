import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "./Pages/Home";
import { CreatePage } from "./Pages/CreatePage";
import { Route, Routes } from "react-router-dom";
import { NoteDetail } from "./Pages/NoteDetail";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/node/:id" element={<NoteDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
