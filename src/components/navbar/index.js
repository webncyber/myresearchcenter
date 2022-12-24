import './navbar.scss'
import { AiOutlineMail } from "react-icons/ai";
import { FaHome, FaBlogger } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
function NavBar() {

    return (
        <div>
            <div id="nav-desktop" className='navbar'>
                <div></div>
                <div>
                    <FaHome style={{ color: 'white', fontSize: '40px' }} />
                </div>
                <div>
                    <ul>
                        <li><a href='/blogs'>
                            <FaBlogger style={{ color: 'white', fontSize: '20px' }} />
                            Blogs</a></li>
                        <li><a href=''>
                            <AiOutlineMail style={{ color: 'white', fontSize: '20px' }} />
                            Email</a></li>
                        <li>
                            <SlSocialYoutube style={{ color: 'white', fontSize: '20px' }} />
                            <a href=''>Youtube</a></li></ul>
                </div>
            </div>

            <div id="nav-mobile" className='navbar'>
            <div>
            <FaHome  style={{color: 'white', fontSize: '40px'}}/>
                </div>
            <div>
                 <GiHamburgerMenu  style={{color: 'white', fontSize: '20px'}}/>
                 <div>
            <ul>
                <li><a href='/blogs'>
               
                    Blogs mobile</a></li>
                <li><a href=''>
                    Email</a></li>
                <li>
                    <a href=''>Youtube</a></li></ul>
            </div>
            </div>
           
       </div>
        </div>
    );

}


export default NavBar;