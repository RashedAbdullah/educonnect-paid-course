import { database_connection } from "@/database/connection";
import { categoryModel } from "@/models/category-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

export const getcategories = async () => {
  try {
    await database_connection();

    const categrories = await categoryModel.find({}).lean();
    return replaceMongoIdInArray(categrories);
  } catch (err) {
    console.log(err.message);
  }
};
