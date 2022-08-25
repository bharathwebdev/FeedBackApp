import { Link } from "react-router-dom";
import {FaGithub} from 'react-icons/fa'
import PropTypes from 'prop-types'
const NavBar = ({title})=>{
    return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
           <div className="flex-none px-2 mx-2">
               <FaGithub className="inline pr-2 text-3xl"/>
               <Link to='/' className="text-lg font-bold">
                   {title}
               </Link>
           </div>
           <div className="flex-1 px-2 mx-2">
               <div className="flex justify-end">
                   <Link to='/' className="btn btn-primary btn-sm mx-2 rounded-btn">home</Link>
                   <Link to='/about' className="btn btn-primary mx-2 btn-sm rounded-btn">about</Link>
               </div>
           </div>
           
        </div>
    </nav>
    )
   
}
NavBar.defaultProps={
    title:'Github Finder'
}
NavBar.propTypes={
    title:PropTypes.string,
}
export default NavBar;