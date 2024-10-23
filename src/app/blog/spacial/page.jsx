import Spacial from "@/app/components/Spacial";

const Page = () => {
  return (
    <div>
      {blogs.map((blog) => (
        <Spacial key={blog.id} blog={blog}></Spacial>
      ))}
    </div>
  );
};
const blogs = [
  {
    id: 1,
    title: "Mastering React Hooks: A Beginner's Guide",
    author: "Sarah Thompson",
    date: "2024-10-20",
    excerpt:
      "Learn the fundamentals of React Hooks and how they can simplify state management in functional components. This guide will walk you through useState, useEffect, and custom hooks.",
    tags: ["React", "JavaScript", "Frontend Development"],
  },
  {
    id: 2,
    title: "Top 5 Node.js Frameworks for Backend Development",
    author: "John Doe",
    date: "2024-09-15",
    excerpt:
      "Explore the most popular Node.js frameworks like Express, Koa, and Hapi that can help you build scalable and efficient backend applications.",
    tags: ["Node.js", "Backend", "JavaScript", "Web Development"],
  },
  {
    id: 3,
    title: "How to Optimize Web Performance with Lazy Loading",
    author: "Emily Nguyen",
    date: "2024-10-05",
    excerpt:
      "Lazy loading is a critical technique for improving web performance. In this article, we'll show you how to implement it for images and components in your web apps.",
    tags: ["Performance", "JavaScript", "Web Optimization"],
  },
  {
    id: 4,
    title: "A Comprehensive Guide to MongoDB Aggregation",
    author: "Muhammad Masum Billah",
    date: "2024-10-12",
    excerpt:
      "MongoDB's aggregation framework is powerful for querying data. This guide explains aggregation stages, operators, and common use cases.",
    tags: ["MongoDB", "Database", "NoSQL", "Backend"],
  },
  {
    id: 5,
    title: "Demystifying CSS Grid: Layout Design Simplified",
    author: "Olivia Johnson",
    date: "2024-08-25",
    excerpt:
      "CSS Grid revolutionizes layout design with its two-dimensional grid system. This tutorial will help you master the basics and build responsive web pages effortlessly.",
    tags: ["CSS", "Frontend", "Web Design"],
  },
  {
    id: 6,
    title: "Understanding JWT Authentication in Node.js",
    author: "Michael Smith",
    date: "2024-07-30",
    excerpt:
      "JWT (JSON Web Tokens) offers a robust way to handle authentication in Node.js applications. Learn how to implement JWT for secure API access.",
    tags: ["Node.js", "JWT", "Authentication", "Security"],
  },
  {
    id: 7,
    title: "10 Best Practices for Writing Clean JavaScript Code",
    author: "Alice Brown",
    date: "2024-06-10",
    excerpt:
      "Writing clean and maintainable JavaScript is essential for scalable projects. Follow these 10 best practices to improve your code's readability and performance.",
    tags: ["JavaScript", "Best Practices", "Code Quality"],
  },
  {
    id: 8,
    title: "Introduction to TypeScript: Why and How to Use It",
    author: "David Martinez",
    date: "2024-09-02",
    excerpt:
      "TypeScript adds static typing to JavaScript, making your code more predictable and easier to debug. This post covers the basics and how to get started.",
    tags: ["TypeScript", "JavaScript", "Frontend Development"],
  },
  {
    id: 9,
    title: "Building a Full-Stack MERN Application: Step by Step",
    author: "Sophia Lee",
    date: "2024-08-18",
    excerpt:
      "This comprehensive guide walks you through the process of building a full-stack MERN (MongoDB, Express, React, Node) application from scratch.",
    tags: ["MERN", "Full-Stack Development", "JavaScript"],
  },
  {
    id: 10,
    title: "Exploring the Benefits of Server-Side Rendering in Next.js",
    author: "Liam Patel",
    date: "2024-09-22",
    excerpt:
      "Server-Side Rendering (SSR) improves SEO and performance in web applications. Learn how to leverage SSR in your Next.js projects for better user experience.",
    tags: ["Next.js", "SSR", "JavaScript", "Web Development"],
  },
];

export default Page;
