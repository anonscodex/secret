import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";





const BlogDetails = () => {
const {id} = useParams();
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)


    return ( 
        <div className=" p-10 rounded-lg shadow-md">
            <h2 className="text-neutral-700 text-xl text-center mb-5">Secret  - {id}</h2>
            {error && <h3 className="text-3xl text-neutral-700 text-center"> {error} </h3>}
            {isPending && <h3 className="text-2xl text-neutral-700 text-center">Loading...</h3>}
        {blogs && (<article >
            <h2 className="text-2xl font-bold text-white mb-2">{blogs.title}</h2>
            <p className="text-base text-neutral-500 leading-relaxed">{blogs.content}</p>
        </article>)}

                <div className="flex items-center justify-center">
        <button type="submit" className="bg-my-logo-color mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <Link to = "/">Go back</Link>
        </button>

        </div>
        </div>


     );
}
 
export default BlogDetails;