import { database_connection } from "@/database/connection";
import { categoryModel } from "@/models/category-model";
import { courseModel } from "@/models/course-model";
import { moduleModel } from "@/models/module-model";
import { testimonialModel } from "@/models/testimonial-model";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import { getEnrollments } from "./enrollment";
import { getTestimonilas } from "./testimonials";

const getCourses = async () => {
  try {
    await database_connection();

    const courses = await courseModel
      .find({})
      .select([
        "title",
        "thumbnail",
        "modules",
        "price",
        "category",
        "instructor",
        "testimonials",
      ])
      .populate({
        path: "category",
        model: categoryModel,
      })
      .populate({
        path: "instructor",
        model: userModel,
      })
      .populate({
        path: "modules",
        model: moduleModel,
      })
      .populate({
        path: "testimonials",
        model: testimonialModel,
      })
      .lean();
    return replaceMongoIdInArray(courses);
  } catch (err) {
    console.log(err.message);
  }
};

const getCourseDetails = async (id) => {
  try {
    await database_connection();

    const course = await courseModel
      .findById(id)
      .populate({
        path: "category",
        model: categoryModel,
      })
      .populate({
        path: "instructor",
        model: userModel,
      })
      .populate({
        path: "modules",
        model: moduleModel,
      })
      .populate({
        path: "testimonials",
        model: testimonialModel,
        populate: {
          path: "user",
          model: userModel,
        },
      })
      .lean();
    return replaceMongoIdInObject(course);
  } catch (err) {
    console.log(err.message);
  }
};

const getCourseDetailsByInstructor = async (instructorId) => {
  try {
    await database_connection();

    const courses = await courseModel.find({ instructor: instructorId }).lean();

    const enrollments = await Promise.all(
      courses.map(async (course) => {
        const enrollment = await getEnrollments(course._id.toString());
        return enrollment;
      })
    );

    const testimonials = await Promise.all(
      courses.map(async (course) => {
        const testimonial = await getTestimonilas(course._id.toString());
        return testimonial;
      })
    );

    const totalTestimonials = testimonials.flat();
    const avgRating =
      totalTestimonials.reduce((acc, obj) => acc + obj.rating, 0) /
      totalTestimonials.length;

    const totlalEnrollments = enrollments.reduce(
      (item, crr) => item.length + crr.length
    );
  
    return {
      courses: courses.length,
      enrollments: totlalEnrollments,
      reviews: totalTestimonials.length,
      avgRating: avgRating === NaN ? 0 : avgRating.toPrecision(2),
    };
  } catch (err) {
    console.log(err.message);
  }
};

export { getCourses, getCourseDetails, getCourseDetailsByInstructor };
