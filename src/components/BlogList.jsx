import { Link } from "react-router-dom"

const BlogList = ({blogs}) => {
    return(
        <div className="container sm:m-10">
            {blogs.map((blog) => (
                <div className=" p-10 rounded-lg shadow-md"  key={blog.id}>
                    <Link to={`/secret/${blog.id}`}>
                        <h2 className="text-2xl font-bold text-white mb-2">{blog.title}</h2>
                        <p className="text-base text-neutral-500 leading-relaxed">{blog.content}</p>
                    </Link>
                    
                </div>

            ))}
        </div>
    )
}

export default BlogList