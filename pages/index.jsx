import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import ProjectCard from "@/components/ProjectCard";
// import Perticles from '@/components/Perticales';
import "@/assets/css/main.min.css";
import TypeName from "@/components/TypeName";
import Footer from "@/components/footer";
import ServiceCard from "@/components/serviceCard";
// import { color } from "framer-motion";

export default function Index() {
  const front_end = [
    "Responsive Web Design",
    "Custom Design Development",
    "UI/UX Design Implementation",
    "Performance Optimization",
    "JavaScript Frameworks(react,next,vue,inertia)",
    "Animation & Interaction",
    "Cutting-Edge Technologies",
  ];

  const back_end = [
    "Custom API Development",
    "Database Management & Optimization",
    "Authentication & Security",
    "Third-Party Integrations",
    "Languages: PHP, Laravel, MySQL, SQL Server",
    "Performance-Driven Development",
    "Security-Centric Approach",
  ];

  const app_dev = [
    "Cross-Platform App Development",
    "UI/UX Design",
    "App Integration",
    "App Maintenance & Support",
    "Fast Development Cycle",
    "Custom API Implementation",
    "Enterprise App Development",
  ];

  const projectCards = [
    {
      category: "next-js,tailwind,daisyUI,react-js,software",
      picture: "/image/material-calculation-software.jpg",
      title: "Material Calculation Software",
      tech: "HTML | CSS | JAVASCRIPT | Tailwind | Daisy UI | Theme Management | React JS | NEXT JS",
      link: "https://matel-calculation-next.vercel.app",
    },
    {
      category: "next-js,tailwind,daisyUI,react-js,software",
      picture: "/image/image-editing-software.jpg",
      title: "Image Edit Software",
      tech: "HTML | CSS | JAVASCRIPT | Tailwind | Daisy UI | Theme Management | React JS | NEXT JS",
      link: "https://image-edit-software.vercel.app",
    },
    {
      category: "bootstrap,vue-js,axios,software",
      picture: "/image/vue-currency-coverter.jpg",
      title: "Vue Currency Coverter Software",
      tech: "HTML | CSS | SCSS | BOOTSTRAP | JAVASCRIPT | Vue JS | AXIOS | Currency API",
      link: "https://vue-currency-convert.netlify.app",
    },
    {
      category: "bootstrap",
      picture: "/image/happiness-project.jpg",
      title: "Happiness Website Design",
      tech: "HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/happiness-template",
    },
    {
      category: "bootstrap",
      picture: "/image/restuarent-Project.jpg",
      title: "Restaurant Website Design",
      tech: "HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/restaurent-templete",
    },
    {
      category: "bootstrap",
      picture: "/image/pet-consultency-Project-Presentation.jpg",
      title: "Pet Consultancy Website Design",
      tech: "HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/pet-consultency-templete",
    },
    // ,{
    //   category:'bootstrap',
    //   picture:'/image/home-solution-Project-Presentation.jpg',
    //   title: 'Home Solution Website Design',
    //   tech:'HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS',
    //   link:'https://iftekher2108.github.io/home-solution-template',
    // }
    {
      category: "bootstrap",
      picture: "/image/tata-web-clone.png",
      title: "TATA Website Clone Design",
      tech: "HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/tata-web",
    },
    {
      category: "bootstrap",
      picture: "/image/us-whole-sale.png",
      title: "US Whole Sale Clone Website",
      tech: "HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/uk-whole-sale",
    }
    ,
    {
      category: "software",
      picture: "/image/calculator-Project-Presentation.png",
      title: "Calculator Software",
      tech: "HTML5 | CSS3 | JAVASCRIPT",
      link: "https://iftekher2108.github.io/calculator-project",
    }
    ,
    {
      category: "software",
      picture: "/image/currency-converter.jpg",
      title: "Currency Converter",
      tech: "HTML | CSS| BOOTSTRAP | JAVASCRIPT | Axios | JQUERY | PLUGINS",
      link: "https://iftekher2108.github.io/currency-converter",
    }
  ];

  return (
    <Layout>
      {/* intro section */}
      <div
        id="home"
        className="container-fluid overflow-hidden position-relative"
      >
        {/* <div className="position-absolute z-2">
              <Perticles/>
          </div> */}

        <div className="row pt-3 m-0 h-100 overflow-hidden">
          <div
            className="hero-content col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center p-2 m-0"
            data-aos="fade-right"
          >
            <h3>
              Hi, My name is <br />
              <span className="first_name ms-1">Iftekher</span>
              <span className="last_name ms-1">Mahmud</span>.
            </h3>
            <p className="fs-6 fw-medium">
              i am a professional Full Stack Web Developer with 2+ years of
              experience dynamic and user-friendly Web solutions. In my journey
              in this field have acquired both front-end and back-end
              development skills, as well as a strong sense of development that
              ensures seamless functionality and eye-catching aesthetics.{" "}
            </p>

            <div className="skill-group m-0">
              <div className="skill-base d-flex text-danger mx-lg-9 mx-md-4 mx-sm-2 flex-column justify-content-center">
                <TypeName />
              </div>
            </div>
          </div>
          <div
            className="hero-image col-lg-6  col-sm-12 my-2 m-0  p-lg-6 p-md-4 p-sm-3"
            data-aos="fade-left"
          >
            <Image
              src="/image/3.jpg"
              height={500}
              width={1200}
              className="img-fluid"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <div id="about-me">
        <div className="about-content">
          <div className="content-section px-5 py-4" data-aos="fade-up">
            <h2
              className="text-center p-3
                     bg-primary text-white 
                     text-uppercase fw-bold 
                     rounded-2 border-8 
                     border-start border-end
                      border-warning "
            >
              About Me
            </h2>

            <div className="row g-3 overflow-hidden mt-4">
              <div className="col-lg-6 col-md-6  col-sm-12">
                <Image
                  src="/image/iftekher.jpg"
                  height={500}
                  width={500}
                  className="object-fit-cover img-fluid border-4 p-3 rounded-4 border-start border-end border-primary bg-transparent my-2"
                  alt="about-me"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <h3 className="fs-2 border-2 border-end text-primary border-primary">
                    Iftekher Mahmud Pervez
                  </h3>

                  <p className="text-justify fw-medium fs-6">
                    {" "}
                    I am a professional Full Stack web developer with 2+ years
                    of experience crafting dynamic and user-friendly web
                    solutions. In my journey in this field, I have acquired both
                    front-end and back-end development skills, as well as a
                    strong sense of development that ensures seamless
                    functionality along with appealing, eye-catching aesthetics.
                  </p>

                  <div className="button-group my-2 d-flex gap-2 align-items-center justify-content-lg-start justify-content-center  ">
                    <a
                      className="btn btn-primary shadow-sm fw-bold px-lg-5 px-md-3"
                      href="#contact"
                    >
                      {" "}
                      Hire Me
                    </a>
                    <a
                      className="btn btn-danger shadow-sm fw-bold px-lg-5 px-3"
                      href="/image/iftekher_mahmud_cv.pdf"
                    >
                      {" "}
                      Get CV
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <p> If you are looking for web presence or an employer to hire. You can get in touch in here.</p> */}
          </div>
        </div>
      </div>

      {/* ===============================================this is service section start here==============================================  */}
      <div id="service" className="m-0 overflow-hidden py-4">
        <div
          className="service-content m-0 mt-2 text-center overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="px-5">
            <h2
              className="text-center p-3
             bg-primary text-white 
             text-uppercase fw-bold 
             rounded-2 border-8 
             border-start border-end
              border-warning "
            >
              My Services
            </h2>
          </div>
        </div>

        <div className="row p-5 g-3">
          <div className="col-md-4">
            <ServiceCard title="Front-end Development" list={front_end} />
          </div>
          <div className="col-md-4">
            <ServiceCard title="Back-end Development" list={back_end} />
          </div>
          <div className="col-md-4">
            <ServiceCard title="Application development" list={app_dev} />
          </div>
        </div>
      </div>
      {/* ====================================================this is service section end here==========================================================  */}

      {/* =============================this is project section start here==============================================  */}
      <div id="project" className="overflow-hidden bg-transparent">
        <div className="project-title px-5 pt-lg-5 pt-3 ">
          <h2
            className="text-center p-3
                     bg-primary text-white 
                     text-uppercase fw-bold 
                     rounded-2 border-8
                     border-start border-end
                      border-warning "
          >
            My Projects
          </h2>
        </div>

        <div className="project-content" data-aos="zoom-in">
          <div className="project-photo row g-3 p-3 m-0">
            {projectCards.map((projectCard, index) => (
              <ProjectCard
                category={projectCard.category}
                picture={projectCard.picture}
                title={projectCard.title}
                tech={projectCard.tech}
                link={projectCard.link}
                key={index}
              />
            ))}

          </div>

          <div className="mb-5 mx-lg-5 ms-md-3 ms-sm-2 px-lg-5 px-md-3 px-sm-2">
            <Link
              href="project"
              className="project-btn-link btn shadow text-white 
                    fs-5 mx-5 p-2  rounded-2 fw-bolder nav-link"
            >
              Show More
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================this is project section end here================================================== */}

      {/* ===============================================this is skill section start here==============================================  */}
      <div id="skill" className="m-0 overflow-hidden p-0">
        <div
          className="skill-content m-0 mt-2 text-center overflow-hidden"
          data-aos="zoom-in"
        >
          <div className="px-5">
            <h2
              className="text-center p-3
                     bg-primary text-white 
                     text-uppercase fw-bold 
                     rounded-2 border-8 
                     border-start border-end
                      border-warning "
            >
              My Skills
            </h2>
          </div>
        </div>

        <div className="skill-section p-5">
          <div className="card p-3" style={{ border: "2px solid #DD4B25" }}>
            <i
              className="fa-brands mb-1 fa-html5"
              style={{ color: "#DD4B25" }}
            ></i>
            <h5>HTML</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #264DE4" }}>
            <i
              className="fa-brands mb-1 fa-css3"
              style={{ color: "#264DE4" }}
            ></i>
            <h5>CSS</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #7411F6" }}>
            <i
              className="fa-brands mb-1 fa-bootstrap"
              style={{ color: "#7411F6" }}
            ></i>
            <h5>Bootstrap</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #F8A8C4" }}>
            <i
              className="fa-brands mb-1 fa-sass"
              style={{ color: "#F8A8C4" }}
            ></i>
            <h5>Scss/Sass</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #38bdf8" }}>
            <Image
              src="/image/tailwind-icon.png"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #38bdf8" }}
              alt="tailwind-icon"
            />
            <h5>Tailwind</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #E4D04B" }}>
            <i
              className="fa-brands mb-1 fa-square-js"
              style={{ color: "#E4D04B" }}
            ></i>
            <h5>Javascript</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #0868AC" }}>
            <Image
              src="/image/jquery-icon.png"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #0868AC" }}
              alt="jquery-icon"
            />
            <h5>Jquery</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #258CB2" }}>
            <i
              className="fa-brands mb-1 fa-wordpress"
              style={{ color: "#258CB2" }}
            ></i>
            <h5>Wordpress</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #777BB3" }}>
            <i
              className="fa-brands mb-1 fa-php"
              style={{ color: "#777BB3" }}
            ></i>
            <h5>PHP</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #00678C" }}>
            <Image
              src="/image/mysql-icon.svg"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #00678C" }}
              alt="jquery-icon"
            />
            <h5>Mysql</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #41B882" }}>
            <Image
              src="/image/vue.jpeg"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #41B882" }}
              alt="icon"
            />
            <h5>Vue</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #08D9FF" }}>
            <i
              className="fa-brands mb-1 fa-react"
              style={{ color: "#08D9FF" }}
            ></i>
            <h5>React</h5>
          </div>

          {/* <div className="card p-3" style={{ border: "2px solid #F2F3EE" }}>
            <Image
              src="/image/nextjs.png"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #F2F3EE" }}
              alt="icon"
            />
            <h5>Next js</h5>
          </div> */}

          <div className="card p-3" style={{ border: "2px solid #7E67ED" }}>
            <Image
              src="/image/inertia.jpeg"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #7E67ED" }}
              alt="icon"
            />
            <h5>Inertia</h5>
          </div>

          <div className="card p-3" style={{ border: "2px solid #FE5A4F" }}>
            <i
              className="fa-brands mb-1 fa-laravel"
              style={{ color: "#FE5A4F" }}
            ></i>
            <h5>Laravel</h5>
          </div>

          {/* <div className="card p-3" style={{ border: "2px solid #0087CB" }}>
            <Image
              src="/image/dart.png"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #00D2B8" }}
              alt="icon"
            />
            <h5>Dart</h5>
          </div> */}

          {/* <div className="card p-3" style={{ border: "2px solid #29B4F4" }}>
            <Image
              src="/image/flutter.png"
              height={100}
              width={100}
              className="bg-white mb-1 rounded-3"
              style={{ border: "2px solid #29B4F4" }}
              alt="icon"
            />
            <h5>Flutter</h5>
          </div> */}

        </div>

        <h2 className="fw-bold  mt-4 text-center">
          <span className="px-4 py-1 border-4 border-start border-end border-primary">
            Work Experiance
          </span>
        </h2>

        <div className="skills-content px-lg-5 px-md-3 px-sm-2 py-3">
          <div
            className="skills-items row g-3 text-center"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="p-3 px-4 my-2 items">
                <div className="icon fs-1">
                  <i className="fa-solid fa-certificate"></i>
                </div>
                <h2>Work Experience</h2>
                <small>2+ Years</small>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="p-3 px-5 my-2 items">
                <div className="icon fs-1">
                  <i className="fa-solid fa-bars-progress"></i>
                </div>
                <h2>Projects</h2>
                <small>10+ completed</small>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="p-3 px-5 my-2 items">
                <div className="icon fs-1">
                  <i className="fa-solid fa-user-group"></i>
                </div>
                <h2>Clients</h2>
                <small>10+ International</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================================================this is skill section end here==========================================================  */}

      {/* =============================================this is contact section start here==================================================== */}
      <div id="contact" className="py-3 px-2">
        <div className="px-5">
          <h2
            className="text-center p-3
                     bg-primary text-white 
                     text-uppercase fw-bold 
                     rounded-2 border-8 
                     border-start border-end
                      border-warning "
          >
            Contact Me
          </h2>
        </div>

        <div className="contact-content row p-lg-5 p-sm-3 m-0 overflow-hidden">
          <div
            className="contact-image col-lg-6 col-sm-12 p-lg-5 p-sm-0 my-2"
            data-aos="fade-right"
          >
            <h3 className="vstack mx-auto py-2 border-primary border-end border-3 ">
              Iftekher Mahmud Pervez
            </h3>
            <div className="gmail-whatsapp hstack gap-2 row p-lg-2 p-sm-1 m-0">
              <div className="gmail col-12 px-lg-5 px-sm-2 py-2 text-center rounded-4">
                <i className="fa-regular fa-envelope"></i>
                <h5>Gmail</h5>
                <p className="text-wrap">iftekhermahmud1@gmail.com</p>
                <small>
                  <a
                    href="mailto:iftekhermahmud1@gmail.com"
                    className="nav-link"
                  >
                    {" "}
                    Send E-mail
                  </a>
                </small>
              </div>
              <div className="whatsapp col-12 px-lg-5 px-sm-2 py-2 text-center rounded-4">
                <i className="fa-brands fa-whatsapp"></i>
                <h5>Whatsapp</h5>
                <p>+880 1580-359517</p>
                <small>
                  <a href="https://wa.me/8801580359517" className="nav-link">
                    {" "}
                    Send Message
                  </a>
                </small>
              </div>
            </div>
          </div>
          {/* form section  */}
          <div
            className="contact-info bg-dark shadow col-lg-6 col-sm-12 rounded-3"
            data-aos="fade-left"
          >
            <div className="px-2">
              <h5 className="text-center py-2 px-5  border-start border-end border-4 border-primary mb-1 mt-5 text-white">
                GET IN TOUCH
              </h5>
            </div>
            <div className="info-section py-3 px-5">
              <form
                action="https://formspree.io/f/mqkoqqjw"
                method="post"
                className="py-5"
              >
                <input
                  type="text"
                  className="form-control mb-3 rounded-0"
                  name="Name"
                  placeholder="Name"
                  required
                />

                <input
                  type="email"
                  className="form-control mb-3 rounded-0"
                  name="email"
                  placeholder="E mail"
                  required
                />

                <textarea
                  className="form-control mb-3 rounded-0"
                  placeholder="Send Text Message..."
                  name="message"
                  style={{ height: "100px" }}
                  required
                ></textarea>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="input-button btn btn-primary py-2 my-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* form section  */}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
