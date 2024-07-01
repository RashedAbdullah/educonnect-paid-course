import { CheckCheck } from "lucide-react";

const CourseOverview = ({ overview }) => {
  return (
    <>
      <h3 className=" text-2xl">কোর্স ডেস্ক্রিপশন</h3>
      <p className="mt-4">{overview.description}</p>
      <div className="bg-gray-50 space-y-6 p-8 rounded-md mt-8">
        <h4 className="text-2xl">তুমি কি কি শিখতে পারবে ?</h4>
        {/* overview.learing (insert array in database) */}
        {overview?.learing && (
          <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            {overview?.learing?.map((learning) => (
              <li key={learning} className="flex space-x-3">
                <div className="flex-none relative top-1">
                  <CheckCheck />
                </div>
                <div className="flex-1">{learning}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CourseOverview;
