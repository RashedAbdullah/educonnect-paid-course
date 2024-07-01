import CourseDetailsIntro from "./_components/course-details-intro";
import CourseDetails from "./_components/course-details";
import Testimonials from "./_components/testimonials";
import RelatedCourse from "./_components/related-course";
import { getCourseDetails } from "@/actions/courses";

const SingleCoursePage = async ({ params: { course: id } }) => {
  const course = await getCourseDetails(id);
  return (
    <>
      <CourseDetailsIntro title={course.title} thumbnail={course.thumbnail} />
      <CourseDetails />
      {course?.testimonials && (
        <Testimonials testimonials={course?.testimonials} />
      )}
      <RelatedCourse />
    </>
  );
};

export default SingleCoursePage;
