import Navbar from '../navbar/Navbar';

import clasess from './Layout.module.css';

const Layout = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className={clasess.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;