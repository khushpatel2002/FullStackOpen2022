import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (header) => {
  return <h1>{header.course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, x) => {
    return sum + x.exercises;
  }, 0);
  return (
    <div>
      {" "}
      <strong> total of {total} exercises</strong>{" "}
    </div>
  );
};

const Part = (content) => {
  return (
    <p>
      {content.name} {content.exercises}
    </p>
  );
};

export default Course;
