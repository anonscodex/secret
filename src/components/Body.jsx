import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Body = () => {

   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


    

    return (
        <div>
            {error && <h3 className="text-3xl text-neutral-700 text-center"> {error} </h3>}
            {isPending && <h3 className="text-2xl text-neutral-700 text-center">Loading...</h3>}
        {blogs && <BlogList blogs={blogs} />}
        </div>
        
    )
}

export default Body