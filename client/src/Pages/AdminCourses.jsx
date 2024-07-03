import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AdminCourses() {
  const [courses, setCourses] = useState([]);

  const getAllCourses = async (req, res) => {
    try {
      const response = await fetch("http://localhost:5000/admin/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/courses/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Deleted Successfully");
        getAllCourses();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <>
      <section className="container-course-section">
        <div className="container">
          <h1>Admin Course Data</h1>
        </div>

        <div className="container ">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {courses?.map((curCourses, index) => (
                <tr key={index}>
                  <td>{curCourses.title}</td>
                  <td>{curCourses.content}</td>
                  <td>
                    <Link className="updateLink" to={curCourses._id}>
                      edit
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => deleteCourse(curCourses._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminCourses;
