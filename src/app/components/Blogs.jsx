"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  const username = "niazmorshed";
  const apiUrl = `https://api.hashnode.com`;

  useEffect(() => {
    const fetchBlogs = async () => {
      await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              user(username: "${username}") {
                publication {
                  posts {
                    title
                    brief
                    coverImage
                    dateAdded
                    slug
                  }
                }
              }
            }
          `,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const posts = data.data.user.publication.posts;
          setBlogs(posts);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="px-[5%]">
      <h1 className="md:text-4xl text-2xl font-semibold capitalize mb-3">
        Technical Blogs
      </h1>
      <p className="font-light text-slate-400 text-sm md:text-base">
        Yes, I enjoy writting tech blogs! I write about my experiences, things I
        learn and things I build.
      </p>

      <div
        id="cards"
        className="blogs flex flex-wrap justify-center gap-3 py-10"
      >
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`https://niazmorshed.hashnode.dev/${blog.slug}`}
            target="_blank"
          >
            <div
              key={index}
              className="blog-card card cursor-pointer border-gray-700 border border-transparent w-full sm:w-[380px] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5"
            >
              <div className="blog-image h-[220px]">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="w-full px-1 h-full flex flex-col gap-3 rounded-md">
                <h2 className="text-xs bg-gray-800 p-1 px-4 rounded-full w-max">
                  {new Date(blog.dateAdded).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h2>
                <h1 className="text-xl font-semibold text-white">
                  {blog.title}
                </h1>
                <p className="text-slate-400 text-base font-light">
                  {blog.brief}
                </p>
              </div>
            </div>
          </Link>
        ))}
        <button className="p-2 px-8 text-sm hover:bg-slate-900 transition-all mb-10 rounded-full border">
          View All Blogs
        </button>
      </div>
    </section>
  );
};

export default Blogs;
