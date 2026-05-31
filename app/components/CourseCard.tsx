"use client";

import { motion } from "framer-motion";


interface CourseCardProps {
  title: string;
  progress: number;
  iconName?: string;
}

export default function CourseCard({
  title,
  progress,
}: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>

      <p className="mt-3 text-sm text-zinc-400">
        {progress}% Complete
      </p>
    </motion.article>
  );
}