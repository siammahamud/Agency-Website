import React from "react";
import HeadingSection from "../../components/HeadingSection";
const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is Shaping the Future of Web Development",
    description:
      "Discover how artificial intelligence is transforming the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Doe",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Design",
    title: "10 Tips for Creating Stunning UI/UX Designs",
    description:
      "Learn the secrets to designing user interfaces that captivate and convert users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Jane Smith",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Development",
    title: "Understanding JavaScript Closures in Depth",
    description:
      "A comprehensive guide to one of the most powerful concepts in JavaScript.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mark Johnson",
    authorRole: "Frontend Developer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "Business",
    title: "Why Digital Transformation is Essential for Success",
    description:
      "Explore how businesses can thrive by adopting digital transformation strategies.",
    authorImage: "/images/authors/author4.png",
    authorName: "Emily Carter",
    authorRole: "Business Analyst",
  },
];
const Blogs = () => {
  return (
    <div className="section-container">
      {/* heading  */}
      <HeadingSection
        subheading="Our Blogs"
        heading="Latest Articles and Insights"
      />
      {/* blog container  */}
      <div className="flex flex-wrap justify-center gap-10 items-center ">
        `
        {blogs.map((blog) => (
          <div className="bg-white rounded-2xl w-82 h-128 shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-gray-100 cursor-pointer py-4">
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 overflow-hidden">
              {/* Category */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {blog.description}
              </p>

              {/* Author Section */}
              <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                <img
                  src={blog.authorImage}
                  alt={blog.authorName}
                  className="w-10 h-10 rounded-full object-cover mr-3 border border-red-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {blog.authorName}
                  </p>
                  <p className="text-sm text-gray-500">{blog.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
