// import { useState } from "react";
import "/assets/css/project.min.css";
import Image from "next/image";
import Footer from "../components/footer";
import ProjectCard from "../components/ProjectCard";
import Layout from "@/components/layout";
import Link from "next/link";
function Project() {
  // const [project,setProject] = useState(0)

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
    }
    ,{
      category:'bootstrap',
      picture:'/image/home-solution-Project-Presentation.jpg',
      title: 'Home Solution Website Design',
      tech:'HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS',
      link:'https://iftekher2108.github.io/home-solution-template',
    },
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
    ,
    {
      category: "software",
      picture: "/image/select-todo-list.png",
      title: "Select Todo List Project",
      tech: "HTML5 | CSS3 | JAVASCRIPT | JQUERY",
      link: "https://iftekher2108.github.io/todo-app-select",
    }
  ];

  return (
    <Layout>
      {/* background web  */}
      <div
        className="background fixed-top"
        style={{ zIndex: "-10", opacity: "0.5" }}
      >
        <Image
          src="/image/background/background_3.png"
          fill
          className="img-fluid"
          alt="background"
        />
      </div>
      {/*  background web  */}

      <div className="project">
        <div className="project-title">
          <h2 className="text-center mt-md-4 mt-2  py-2">
            <span className="border-start px-5 py-2 border-primary fw-bold border-end border-3">
              Recent Work Project
            </span>
          </h2>

          <h3 className="btn text-white btn-primary m-3">
            <Link href="/" className="nav-link">
              <i className="fa-solid me-2 fa-arrow-left"></i>
              Back
            </Link>
          </h3>

          {/* <div className="d-flex gap-1 justify-content-center align-items-center flex-wrap m-0 p-0">
                        <div className="btn-all active btn border-0 ">
                            ALL
                        </div>

                        <div className=" btn-bootstrap btn border-0 ">
                            BOOTSTRAP
                        </div>

                        <div className=" btn-wordpress btn border-0 ">
                            WORDPRESS
                        </div>

                        <div className=" btn-others btn border-0 ">
                            OTHERS
                        </div>

                    </div> */}
        </div>

        <div className="project-content p-5" data-aos="zoom-in">
          <div className="project-photo row g-3">
        
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
        </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default Project;
