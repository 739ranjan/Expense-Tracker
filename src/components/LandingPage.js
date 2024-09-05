import styles from './landingpage.module.css';
import dashboardImage from '../images/landing-1.jpg';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    return (
        <div className={`${styles.landing_bg}`}>
            <div className={`flex flex-col justify-center items-center lg:w-[70%] md:w-[70%] m-auto`}>
                <p className="uppercase mb-3 text-purple-700 tracking-wide mt-[120px]">Track Your Expenses</p>
                <h1 className="capitalize text-5xl font-bold text-center mt-5 mb-5">track your expenses to save more</h1>
                <p className="text-sm leading-5 mb-5 mt-5 tracking-wide text-center text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
                <Link to="\Signup">
                <button className="text-white font-medium bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg text-md px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 mt-5">Try Now</button></Link>
                <img src={dashboardImage} className="my-[100px] h-[500px]" alt="landing-img-1" />
            </div>
        </div>
    );
}

export default LandingPage;
