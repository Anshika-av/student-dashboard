"use client";

import { motion } from "framer-motion";
import { Flame, Target, BookOpen } from "lucide-react";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.01 }}
      className="h-full rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8"
    >
      <h1 className="text-4xl font-bold">
        Welcome back, Anshika 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Continue your learning journey today.
      </p>

      <div className="mt-8 flex gap-8">
        <div>
          <Flame className="mb-2 text-orange-400" />
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-zinc-400">
            Day Streak
          </p>
        </div>

        <div>
          <BookOpen className="mb-2 text-cyan-400" />
          <p className="text-2xl font-bold">4</p>
          <p className="text-sm text-zinc-400">
            Active Courses
          </p>
        </div>

        <div>
          <Target className="mb-2 text-green-400" />
          <p className="text-2xl font-bold">82%</p>
          <p className="text-sm text-zinc-400">
            Weekly Goal
          </p>
        </div>
      </div>
    </motion.section>
  );
}