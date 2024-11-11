import { useState } from "react";


function Navbar() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNavClick = (index) => {
      setActiveIndex(index);
    };

    
    
    return (
        <header>
            <nav id="section-content" className="px-3 shadow bg-gradient bg-primary py-2 d-flex align-items-center gap-3 rounded-pill">
                <a href="#home" title="Home" onClick={()=> handleNavClick(0)} className={`nav-link p-0 m-0 ${activeIndex === 0 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item "><i className="fa-solid fa-user" />
                    </li>
                </a>
                <a href="#about-me" title="About Me" onClick={()=>handleNavClick(1)} className={`nav-link p-0 m-0 ${activeIndex === 1 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item ">
                        <i className="fa-brands fa-servicestack" /></li>
                </a>

                <a href="#service" title="My Service" onClick={()=>handleNavClick(2)} className={`nav-link p-0 m-0 ${activeIndex === 2 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item ">
                     <i className="fa-solid fa-diagram-project"></i> 
                     </li>  
                </a>

                
                <a href="#project" title="My Projects" onClick={()=>handleNavClick(3)} className={`nav-link p-0 m-0 ${activeIndex === 3 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item "> <i className="fa-regular fa-image" /></li>
                </a>
                <a href="#skill" title="My Skills" onClick={()=>handleNavClick(4)} className={`nav-link p-0 m-0 ${activeIndex === 4 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item "> <i className="fa-solid fa-user-tie" /></li>
                </a>
                <a href="#contact" title="Contact Me" onClick={()=>handleNavClick(5)} className={`nav-link p-0 m-0 ${activeIndex === 5 ? 'active' : ''} rounded-pill`}>
                    <li className="list-group-item "> <i className="fa-solid fa-network-wired" /></li>
                </a>
            </nav>
            
        </header>

    );
}

export default Navbar