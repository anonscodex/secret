import { useState } from "react";
import { useNavigate } from "react-router-dom"



  const date = new Date();
    const showTime = date.getDate() + 
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    "  at " +
    date.getHours() +
    ":" +
    date.getMinutes();


    
        
        


const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()
    //const [currentDate, setCurrentDate] = useState(getDate());
  
    const handleSubmit = (e) => {
        e.preventDefault()

        const secret = {title, content, showTime}
        
        if(title !== "" && content !== ""){
          setIsPending(true)
          fetch('http://localhost:8000/blogs', {

        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(secret)
        }).then(() => {
          
            setIsPending(false)
            navigate('/')
        })
        } else {
          alert('Input something')
        }
        

    }
  
    
  
    return (
      <div className="max-w-md mx-auto p-10  rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Secret</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-neutral-700 font-bold mb-2">Secret Title</label>
            <input type="text"  
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          <div className="mb-4">
            <label className="block text-neutral-700 font-bold mb-2">Secret Content</label>
            <textarea  
            value={content} 
            onChange={(e) => setContent(e.target.value)}  
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="flex items-center justify-center">
            {!isPending && <button type="submit" className="bg-my-logo-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Post Secret
            </button>}

            {isPending && <button disabled type="submit" className="bg-my-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Posting...
            </button>}

          </div>
        </form>

       
      </div>
    );
  };

export default Create