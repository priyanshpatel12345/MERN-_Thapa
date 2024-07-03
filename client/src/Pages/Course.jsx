import React, { useEffect, useState } from "react";
import { MdDataArray } from "react-icons/md";

function Course() {
  const [courses, setCourses] = useState([]);
  const getAllData = async (req, res) => {
    try {
      const response = await fetch("http://localhost:5000/study/course", {
        method: "GET",
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="course-container">
      {courses.map((course) => (
        <div className="course-card" key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.content}</p>

          <MdDataArray />
        </div>
      ))}
    </div>
  );
}

export default Course;
