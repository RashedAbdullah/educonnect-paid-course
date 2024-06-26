import { getCourses } from "@/actions/courses";
import Test from "@/components/Test";

export default async function Home() {
  const courses = await getCourses();
  console.log(courses);
  return <Test />;
}
