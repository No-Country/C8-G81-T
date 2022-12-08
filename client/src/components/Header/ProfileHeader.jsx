import React from 'react'
import LogoNav from "../../assets/Logo-text.png";
import { HashLink as Link} from "react-router-hash-link"
import DropDown from '../Profile/DropDown';

const ProfileHeader = () => {
    // const [navbar, setNavbar] = useState(false);
  return (
    <nav className="sticky top-0 z-50 h-[80px] w-full bg-light-grey shadow">
      <div className="justify-between px-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div>
              <Link to={"/"}>
                <img
                  className="fill-current w-[13rem] sm:w-[15rem]"
                  src={LogoNav}
                  alt="medicalendar logo"
                  aria-label="medicalendar logo"
                />
              </Link>
            </div>
            
          </div>
        </div>
  
          <DropDown/>
  
    </nav>
  )
}

export default ProfileHeader