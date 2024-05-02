import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="text-center ">
            <h1 className="text-neutral-500 text-3xl">SORRY!!!</h1>
            <h3 className="text-neutral-500 text-1xl">No <span className="text-my-logo-color"> SECRET </span>is Found Here</h3>

        <div className='mt-5'>
            <Link to ="/">Click Here To Go back to other SECRET</Link>
        </div>
        </div>
     );
}
 
export default NotFound;
