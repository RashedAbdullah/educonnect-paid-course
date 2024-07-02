import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  BookCheck,
  CheckCheck,
  Clock10,
  FileQuestion,
  MessageSquare,
  NotepadText,
  Presentation,
  Radio,
  Star,
  StickyNote,
  Tv,
  UsersRound,
  Video,
} from "lucide-react";
import Image from "next/image";
import CourseOverview from "./course-overview";
import CourseCurriculum from "./course-curriculum";
import CourseInstructor from "./course-instructor";

const CourseDetails = ({ course }) => {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className="bg-success px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block bg-green-500">
          {course.category.title}
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
          {course.title}
        </h3>
        <p className="mt-3 text-gray-600 text-sm">Master React JS & Next JS</p>
        {/*  */}
        <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
          <div className="flex items-center gap-2">
            <Image
              className="w-[40px] h-[40px] rounded-full"
              src={course.instructor.profilePicture}
              alt={course.instructor.firstName}
              width={768}
              height={463}
            />
            <p className="font-bold">
              {course.instructor.firstName} {course.instructor.lastName}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success font-semibold">Last Updated: </span>
            <span>Feb 22, 2022</span>
          </div>
        </div>

        {/* Tab */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
              <TabsTrigger value="overview">কোর্স অভারভিউ</TabsTrigger>
              <TabsTrigger value="curriculum">কারিকুলাম</TabsTrigger>
              <TabsTrigger value="instructor">প্রশিক্ষক</TabsTrigger>
              {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
            </TabsList>
            <TabsContent value="overview">
              <CourseOverview overview={course} />
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseCurriculum course={course} />
            </TabsContent>
            <TabsContent value="instructor">
              <CourseInstructor course={course} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
