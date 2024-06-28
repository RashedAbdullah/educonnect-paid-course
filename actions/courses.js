import { database_connection } from "@/database/connection";
import { categoryModel } from "@/models/category-model";
import { courseModel } from "@/models/course-model";
import { moduleModel } from "@/models/module-model";
import { testimonialModel } from "@/models/testimonial-model";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

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

export { getCourses };
