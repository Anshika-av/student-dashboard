import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="hidden md:flex w-20 flex-col items-center border-r border-zinc-800 bg-zinc-950 py-8">
      <div className="flex flex-col gap-8">
        <Home className="text-zinc-400" />
        <BookOpen className="text-zinc-400" />
        <BarChart3 className="text-zinc-400" />
        <Settings className="text-zinc-400" />
      </div>
    </nav>
  );
}