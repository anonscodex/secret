import React, { useState, useEffect } from 'react';
import logo from "../assets/secret2.png";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [currentPage, setCurrentPage] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);

    return (
        <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-32 w-32" src={logo} alt="" />
                    </div>
                    <div className="">
                        {currentPage === '/create' ? (
                            <Link to='/' className=' text-1xl sm:text-3xl'>Read Secret</Link>
                        ) : (
                            <Link to='/create' className=' text-1xl sm:text-3xl'>Create Secret</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
