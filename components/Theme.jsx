
function Theme({ theme, setTheme }) {


   const themeSwitch = (e)=> {
        if(e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }


    return(
     <>
        {/* <!-- theme switch --> */}
        <div class="theme-btn px-1 py-3">
            <div class="form-check form-switch">
                <input
                    class="form-check-input shadow-none"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onChange={(e) => themeSwitch(e) }
                    checked={theme ? 'checked' :'false'}
                />
                <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
        </div>
        {/* <!-- theme switch --> */}
    </>   
    )
    
}

export default Theme