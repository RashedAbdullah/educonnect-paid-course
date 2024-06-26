import { database_connection } from "@/database/connection";
import { categoryModel } from "@/models/category-model";
import { courseModel } from "@/models/course-model";
import { userModel } from "@/models/user-model";

const getCourses = async () => {
  try {
    await database_connection();

    const courses = await courseModel
      .find({})
      .populate({
        path: "category",
        model: categoryModel,
      })
      .populate({
        path: "instructor",
        model: userModel,
      });
    return courses;
  } catch (err) {
    console.log(err.message);
  }
};

export { getCourses };
