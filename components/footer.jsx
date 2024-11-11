import { useRouter } from "next/router"
function Footer() {
    const date = new Date().getFullYear()
  const currentRoute = useRouter().pathname
    return (
        <>
          {/* ========================footer section start here=============================================== */}
        <footer className="bg-dark text-white">
            <div className="footer-content p-5">

            {
                currentRoute == '/' ?
              <div className="footer-menu fw-bold d-flex small flex-lg-row flex-md-row flex-sm-column justify-content-center gap-3 my-lg-3 my-sm-1">
                    <a href="#home" className="nav-link my-sm-1 my-lg-0"> Home</a>
                    <a href="#about-me" className="nav-link my-sm-1 my-lg-0"> About Me</a>
                    <a href="#service" className="nav-link my-sm-1 my-lg-0"> Service</a>
                    <a href="#project" className="nav-link my-sm-1 my-lg-0"> project</a>
                    <a href="#skill" className="nav-link my-sm-1 my-lg-0">Skilled</a>
                    <a href="#contact" className="nav-link my-sm-1 my-lg-0"> Contact</a>
                </div> : <></>
            }

                
                <div className="social-media d-flex flex-sm-wrap align-items-center justify-content-center gap-4 mb-2 py-2">
                    <a href="https://www.facebook.com/mdiftekher.mahmud/" className="nav-link rounded-circle p-2 px-3 text-white">
                        <i className="fa-brands fs-5 p-0 m-0 fa-square-facebook" /></a>
                    {/* <a href="#" class="nav-link rounded-circle px-2 text-white"> <i class="fa-brands fa-instagram"></i></a> */}
                    <a href="https://wa.me/8801580359517" className="nav-link rounded-circle p-2 px-3 text-white">
                        <i className="fa-brands fs-5 fa-whatsapp" /></a>
                    <a href="https://github.com/iftekher2108" className="nav-link rounded-circle p-2 px-3 text-white"> <i className="fa-brands fs-5 fa-github" /></a>
                    {/* <a href="#" class="nav-link rounded-circle px-2 text-white"> <i class="fa-brands fa-youtube"></i></a> */}
                    {/* <a href="#" class="nav-link rounded-circle px-2 text-white"> <i class="fa-brands fa-linkedin"></i></a> */}
                </div>
                <div className="text-center"><span className="text-center text-uppercase py-1 px-lg-4 px-md-2 px-sm-1 fs-6  fw-bold">Iftekher Mahmud
                    Pervez</span></div>
                <p className="mt-3 text-center">© Iftekher Mahmud Pervez 2020 - <span>{date}</span></p>
            </div>
            <div className="p-5" />
            <div className="p-1" />
        </footer>
        </>
    )
}

export default Footer