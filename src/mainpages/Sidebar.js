import { CiSearch } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
    return(
        <>
        <div className="flex h-screen bg-gray-100">

            {/* sidebar  */}
            <div className="hidden md:flex flex-col w-64 bg-gray-800 rounded-2xl">
                
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav
                        className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 gap-10 rounded-2xl">
                        <div>
                            <Link to="/home/profile" className="flex items-center mt-2 px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <span className="text-2xl"><FaUserAlt /></span>
                                {/* needs---------------- user name */}
                            <span className=" ml-2 text-lg">User Name</span>
                            </Link>
                        </div>
                        <hr className="h-5"/>
                        <div className="flex flex-col flex-1 gap-3">
                            <Link to="/home/dashboard"
                                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                                <span className="text-2xl"><MdDashboard /></span>
                                <span className=" ml-2 text-lg">Dashboard</span>
                            </Link>
                            <Link to="/home/create"
                                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                                <span className="text-2xl"><IoIosCreate /></span>
                                <span className=" ml-2 text-lg">Create</span>
                            </Link>
                            <Link to="/home/transaction"
                                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                                <span className="text-2xl"><GrTransaction /></span>
                                <span className=" ml-2 text-lg">Transactions</span>
                            </Link>
                            <Link to="/home/compare"
                                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                                <span className="text-2xl"><BsGraphUpArrow /></span>
                                <span className=" ml-2 text-lg">Compare</span>
                            </Link>
                            
                        </div>
                    </nav>
                </div>
            </div>
                
            {/* top nav */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                    <div className="flex items-center px-4">
                
                        <div className="relative mx-auto text-gray-600">
                            <input className="border border-gray-300 h-10 w-96 px-5 pr-16 rounded-lg text-sm placeholder-current focus:outline-none dark:bg-gray-500 dark:border-gray-50 dark:text-gray-200"
                                       type="search" name="search" placeholder="Search" />
                            <button type="submit" className="absolute right-1 top-0 mt-3 mr-4">
                                <CiSearch />                     
                            </button>
                        </div>
                    </div>
                    {/* notification  -------------needs changes */}
                    <div className="flex items-center space-x-4 mr-4">
                        <a href="#" className="text-gray-600 text-xl hover:text-black hover:text-2xl">
                            <IoNotificationsOutline />  
                        </a>
                        {/* setting ----------- needs changes */}
                        <a href="#" className="text-gray-600 text-xl hover:text-black hover:text-2xl">
                            <IoSettingsOutline />
                        </a>
                        {/* logout */}
                        <Link to="/login"
                            className="flex items-center text-gray-600 hover:text-black">
                            <span className=" text-xl  hover:text-2xl mr-.5"><AiOutlineLogout /></span>
                            <span className="font-bold">Logout</span>
                        </Link>
                    </div>
                </div>


                {/* content component */}
                <div className="p-4">
                    <Outlet />
                    hello user
                </div>
            </div>
                
            </div>
        </>
    )
}


export default Sidebar;