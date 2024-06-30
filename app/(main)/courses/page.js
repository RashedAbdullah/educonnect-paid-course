"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { CourseProgress } from "@/components/home-page/course-progress";
import { formatPrice } from "@/lib/format-price";
import SearchCourse from "./_components/search-course";
import SortCourse from "./_components/sort-course";
import FilterCourseMobile from "./_components/filter-course-mobile";
import ActiveFilter from "./_components/active-filter";
import Filters from "./_components/filters";



const SIZE_FILTERS = {
  id: "size",
  name: "Size",
  options: [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
  ],
};


const courses = [
  {
    id: 1,
    title: "Design",
    thumbnail: "/assets/images/categories/design.jpg",
  },

  {
    id: 3,
    title: "Development",
    thumbnail: "/assets/images/categories/development.jpg",
  },
  {
    id: 4,
    title: "Marketing",
    thumbnail: "/assets/images/categories/marketing.jpg",
  },
  {
    id: 5,
    title: "IT & Software",
    thumbnail: "/assets/images/categories/it_software.jpg",
  },
  {
    id: 6,
    title: "Personal Development",
    thumbnail: "/assets/images/categories/personal_development.jpg",
  },
  {
    id: 7,
    title: "Business",
    thumbnail: "/assets/images/categories/business.jpg",
  },
  {
    id: 8,
    title: "Photography",
    thumbnail: "/assets/images/categories/photography.jpg",
  },
  {
    id: 9,
    title: "Music",
    thumbnail: "/assets/images/categories/music.jpg",
  },
];
const CoursesPage = () => {
  const [filter, setFilter] = useState({
    categories: ["development"],
    price: ["free"],
    sort: "",
  });

  //   apply checkbox filter
  const applyArrayFilter = ({ type, value }) => {
    const isFilterApplied = filter[type].includes(value);

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [type]: prev[type].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [type]: [...prev[type], value],
      }));
    }
  };

  return (
    <section
      id="courses"
      className="container space-y-6   dark:bg-transparent py-6"
    >
      {/* <h2 className="text-xl md:text-2xl font-medium">All Courses</h2> */}
      {/* header */}
      <div className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
        <SearchCourse />

        <div className="flex items-center justify-end gap-2 max-lg:w-full">
          <SortCourse />
          <FilterCourseMobile />
        </div>
      </div>
      {/* header ends */}

      <ActiveFilter
        filter={{
          categories: ["development"],
          price: ["free"],
          sort: "",
        }}
      />
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          {/* these component can be re use for mobile also */}
          <Filters
            filter={{
              categories: ["development"],
              price: ["free"],
              sort: "",
            }}
          />
          {/* Course grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {courses.map((category) => {
              return (
                <Link key={category.id} href={`/courses/${category.id}`}>
                  <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                    <div className="relative w-full aspect-video rounded-md overflow-hidden">
                      <Image
                        src="/assets/images/courses/course_1.png"
                        alt={"course"}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="flex flex-col pt-2">
                      <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                        Reactive Accelerator
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Development
                      </p>
                      <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                          <div>
                            <BookOpen className="w-4" />
                          </div>
                          <span>4 Chapters</span>
                        </div>
                      </div>

                      <CourseProgress
                        size="sm"
                        value={80}
                        variant={110 === 100 ? "success" : ""}
                      />

                      <div className="flex items-center justify-between mt-4">
                        <p className="text-md md:text-sm font-medium text-slate-700">
                          {formatPrice(49)}
                        </p>

                        <Button
                          variant="ghost"
                          className="text-xs text-sky-700 h-7 gap-1"
                        >
                          Enroll
                          <ArrowRight className="w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};
export default CoursesPage;