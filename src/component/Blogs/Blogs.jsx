import { useContext } from "react";
import { AuthContext } from "../../context/useContextProjects";


const Blogs = () => {
  const { blogs } = useContext(AuthContext);
  console.log(blogs)
  return (
    <div>
      Insights & Articles"
"Explore Our Blogs"
"Recent Blog Updates"
"From Our Blog"
"Discover Our Insights"
"Blog Highlights"
"What's New in Our Blo
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
