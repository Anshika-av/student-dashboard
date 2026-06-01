import Sidebar from "./components/Sidebar";
import HeroTile from "./components/HeroTile";
import ActivityTile from "./components/ActivityTile";
import CourseCard from "./components/CourseCard";

import { getCourses } from "./lib/getCourses";

export default async function Home() {
  const courses = await getCourses();
  

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HeroTile />

          <ActivityTile />

          {courses.map((course: any) => (
          <CourseCard
        key={course.id}
        title={course.title}
        progress={course.progress}
      
       />
  ))}
        </div>
      </section>
    </main>
  );
}