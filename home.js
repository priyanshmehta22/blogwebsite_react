import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
import React from "react";

const Home = () => {
  const { data: blogs, isloading, error } = useFetch(
    "http://localhost:8000/blogs"
  );
  // hooks
  // const [name, setName] = useState("pri");
  // const [age, setAge] = useState(19);
  // const handleClick = () => {
  //   setName("riri");
  //   setAge(20);
  // };
  // const [blogs, setBlogs] = useState([
  //   {
  //     title: "Blog 1",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum ducimus inventore eius? Mollitia reprehenderit aliquam cum veritatis quam amet. Eveniet voluptatum soluta, fugit iusto nesciunt eius repudiandae tempora tempore provident magnam et officia repellendus dolores molestias aliquam, labore animi facere. Nesciunt, molestias quidem voluptatem doloribus illo nihil mollitia perferendis architecto explicabo temporibus vero, quos est ratione. Natus voluptatibus cupiditate rem adipisci beatae, ipsam blanditiis quod distinctio, architecto voluptate, nam harum soluta explicabo similique asperiores laboriosam? Aut fugit veniam, consequuntur aliquam nulla debitis ipsam explicabo recusandae possimus corporis alias cupiditate at iusto necessitatibus sequi. Voluptatem quod laboriosam dolorem deleniti aspernatur!",
  //     author: "riri",
  //     id: 1,
  //   },
  //   {
  //     title: "Blog 2",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate sit quaerat animi saepe asperiores maiores maxime quam optio voluptate eligendi earum vel deleniti, assumenda quo consequuntur. Autem nisi molestias, eum cumque, ducimus omnis quia praesentium eligendi sequi id at!",
  //     author: "pri",
  //     id: 2,
  //   },
  //   {
  //     title: "Blog 3",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia fugiat labore atque obcaecati perspiciatis.",
  //     author: "riri",
  //     id: 3,
  //   },
  // ]);

  // console.log(blogs);
  // console.log(name + age);
  // runs at every render cycle

  // , [name, age]

  return (
    <div className="home">
      {<h2>HOMEPAGE </h2>}
      {error && <div> {error}</div>}
      {isloading && <h3>Loading...</h3>}
      {blogs && <BlogList blogs={blogs} title="ALL BLOGS" />}
    </div>
  );
};

export default Home;
