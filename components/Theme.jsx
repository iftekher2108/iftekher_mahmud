import { useEffect, useState } from "react";
function Theme({theme,setTheme}) {


    const [checkbox,setCheckbox] = useState(true)

   const themeSwitch =(e)=> {
    if (theme === 'dark') {
        // document.documentElement.setAttribute('data-bs-theme','light')
        setTheme('light')
        setCheckbox(false)
    }
    else {
        setTheme('dark')
        setCheckbox(true)
    }
    }
    
    useEffect(()=>{
        document.documentElement.setAttribute('data-bs-theme',`${theme}`)
    },[theme])


    return(
     <>
        {/* <!-- theme switch --> */}
        <div className="theme-btn px-1 py-3">
            <div className="form-check form-switch">
                <input
                    className="form-check-input shadow-none"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onChange={(e) => themeSwitch(e.target.value)}
                    checked={checkbox}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
            </div>
        </div>
        {/* <!-- theme switch --> */}
    </>   
    )
    
}

export default Theme