import React, { useMemo, useState } from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    logo: "/public/images/authors/author1.png",
    review:
      "Amazing service! The team was super responsive and exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Product Manager, Google",
  },
  {
    id: 2,
    logo: "/public/images/authors/author2.png",
    review: "Incredible user experience — everything just works seamlessly.",
    author: "Michael Chen",
    role: "UX Designer, Apple",
  },
  {
    id: 3,
    logo: "/public/images/authors/author3.png",
    review:
      "Reliable, efficient, and easy to integrate with our existing systems.",
    author: "David Miller",
    role: "Software Engineer, Microsoft",
  },
  {
    id: 4,
    logo: "/public/images/authors/author4.png",
    review: "Exceptional support and top-notch performance across the board.",
    author: "Emily Davis",
    role: "Operations Lead, Amazon",
  },
  {
    id: 5,
    logo: "/public/images/authors/author3.png",
    review:
      "We’ve seen a huge productivity boost since adopting their platform.",
    author: "Robert Wilson",
    role: "Project Manager, Meta",
  },
  {
    id: 6,
    logo: "/public/images/authors/author2.png",
    review: "Smooth setup process and excellent customer service!",
    author: "Jessica Brown",
    role: "Content Strategist, Netflix",
  },
  {
    id: 7,
    logo: "/public/images/authors/author4.png",
    review: "The design is intuitive, and performance has been flawless.",
    author: "Daniel Evans",
    role: "Frontend Developer, Spotify",
  },
  {
    id: 8,
    logo: "/public/images/authors/author1.png",
    review:
      "Cutting-edge technology and outstanding reliability — highly recommended.",
    author: "Sophia Martinez",
    role: "Tech Lead, Tesla",
  },
  {
    id: 9,
    logo: "/public/images/authors/author3.png",
    review: "Everything from setup to scaling has been effortless. Great job!",
    author: "Ethan Carter",
    role: "Creative Director, Adobe",
  },
  {
    id: 10,
    logo: "/public/images/authors/author4.png",
    review:
      "Performance and support are world-class — a true partner in innovation.",
    author: "Olivia Parker",
    role: "AI Engineer, NVIDIA",
  },
];

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

const Testimonials = () => {
  const cardsPerPage = 4;
  const pages = useMemo(() => chunkArray(reviews, cardsPerPage), []);
  const [pageIndex, setPageIndex] = useState(0);

  const prev = () => setPageIndex((p) => (p === 0 ? pages.length - 1 : p - 1));
  const next = () => setPageIndex((p) => (p === pages.length - 1 ? 0 : p + 1));

  return (
    <div className="bg-gray-50 py-16">
      <div className="section-container relative overflow-hidden">
        <HeadingSection
          subheading="Testimonials"
          heading="What our clients say"
        />

        {/* control buttons  */}
        <div className="z-50">
          {/* Previous Button */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-3/5 -translate-y-1/2 z-50 bg-white/80 group cursor-pointer shadow-md rounded-full size-20 flex items-center justify-center transition"
          >
            <FiChevronLeft className="text-gray-800 group-hover:text-red-500 text-3xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-3/5 -translate-y-1/2 z-50 bg-white/80 group cursor-pointer shadow-md rounded-full size-20 flex items-center justify-center transition"
          >
            <FiChevronRight className="text-gray-800 group-hover:text-red-500 font-bold text-3xl" />
          </button>
        </div>

        {/* slider viewport */}
        <div className="w-full overflow-hidden">
          {/* track: flex row of pages. GPU transform & smooth transition */}
          <div
            className="flex will-change-transform"
            style={{
              transform: `translate3d(-${pageIndex * 100}%, 0, 0)`,
              transition: "transform 600ms cubic-bezier(.22,.98,.4,1)",
              // width not required because each page is full width (min-w-full)
            }}
          >
            {/* each page is exactly viewport width */}
            {pages.map((page, pi) => (
              <div key={pi} className="min-w-full px-2">
                {/* inner grid for cards: responsive, 4 per row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {page.map((r) => (
                    <div
                      key={r.id}
                      className="bg-white px-6 py-12 rounded-2xl flex flex-col items-center text-center h-full border-t-4 border-red-600 hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Author Logo */}
                      <img
                        src={r.logo}
                        alt={r.author}
                        className="h-16 w-16 mb-4 rounded-full object-cover border-2 border-red-600 -mt-8"
                      />

                      {/* Review Text */}
                      <p className="text-gray-700 italic mb-4 text-base font-medium">
                        "{r.review}"
                      </p>

                      {/* Author Info */}
                      <h3 className="text-lg font-semibold text-gray-900">
                        {r.author}
                      </h3>
                      <p className="text-sm text-gray-500">{r.role}</p>

                      {/* Optional Star Rating */}
                      <div className="flex mt-3 space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4 ? "text-red-500" : "text-red-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.285-3.95a1 1 0 00-.364-1.118L2.975 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots (optional) */}
        <div className="flex justify-center gap-2 mt-6">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPageIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === pageIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
