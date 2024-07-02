const { database_connection } = require("@/database/connection");
const { enrollmentModel } = require("@/models/enrollment-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getEnrollments = async (courseId) => {
  try {
    await database_connection();

    const enrollments = await enrollmentModel
      .find({
        course_id: courseId,
      })
      .lean();
    return replaceMongoIdInArray(enrollments);
  } catch (err) {
    console.log(err.message);
  }
};

export { getEnrollments };
