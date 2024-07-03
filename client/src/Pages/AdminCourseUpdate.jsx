import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminCourseUpdate() {
  const [course, setCourse] = useState({
    title: "",
    content: "",
  });

  const params = useParams();

  const getSingleCourse = async (req, res) => {
    const response = await fetch(
      `http://localhost:5000/admin/courses/${params.id}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    setCourse(data);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/admin/courses/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        }
      );

      if (response.ok) {
        toast.success("Updated Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCourse();
  }, []);

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update Course</h1>
      </div>

      <section className="section-user-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="off"
              onChange={handleInput}
              value={course.title}
              required
            />
          </div>

          <div>
            <label htmlFor="content">content</label>
            <textarea
              cols={70}
              rows={5}
              type="content"
              name="content"
              id="content"
              autoComplete="off"
              onChange={handleInput}
              value={course.content}
              required
            />
          </div>

          <div>
            <button type="submit">Update</button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default AdminCourseUpdate;
