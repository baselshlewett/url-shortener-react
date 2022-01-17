import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const HomePage = (props) => {
    return (
        <div className={"container-fluid d-flex justify-content-center align-items-center " + classes.homepageContainer}>
            <div className={[classes.btn, classes.btn]}>
                <span>
                    Coming Soon...
                </span>
                <Link to='/admin'>Click here to go to admin dashbboard</Link>
            </div>
        </div>
    );
}

export default HomePage;