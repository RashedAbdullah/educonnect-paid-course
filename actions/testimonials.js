const { database_connection } = require("@/database/connection");
const { testimonialModel } = require("@/models/testimonial-model");
const { replaceMongoIdInArray } = require("@/utils/data-utils");

const getTestimonilas = async (courseId) => {
  try {
    await database_connection();

    const testimonial = await testimonialModel.find({ courseId }).lean();
    return replaceMongoIdInArray(testimonial);
  } catch (err) {
    console.log(err.message);
  }
};

export { getTestimonilas };
