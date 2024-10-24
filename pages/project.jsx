// import { useState } from "react";
import '/assets/css/project.min.css'
import Image from 'next/image'
import Footer from '../components/footer'
import ProjectCard from '../components/ProjectCard'
import Layout from '@/components/layout'
import Link from 'next/link'
function Project() {

    // const [project,setProject] = useState(0)

    return (
        <Layout>
            {/* background web  */}
            <div className="background fixed-top" style={{ zIndex: "-10", opacity: "0.5" }}>
                <Image src="/image/background/background_3.png" fill className="img-fluid" alt="background" />
            </div>
            {/*  background web  */}


            <div className="project">
                <div className="project-title">

                    <h2 className="text-center mt-md-4 mt-2  py-2">
                        <span className="border-start px-5 py-2 border-primary fw-bold border-end border-3">Recent Work
                            Project</span>
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

                        {/* Happiness web  */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/happiness-project.jpg'
                            title='Happiness Website Design Project'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/happiness-template'
                        />


                        {/* restaurant web  */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/restuarent-Project.jpg'
                            title='Restaurant Website Design Project'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/restaurent-templete'
                        />

                        {/* pet web  */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/pet-consultency-Project-Presentation.jpg'
                            title='Pet Consultancy Website Design Project'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/pet-consultency-templete'
                        />


                        {/* home rent web  */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/home-solution-Project-Presentation.jpg'
                            title='Home Solution Website Design Project'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/home-solution-template'
                        />


                        {/* TATA web clone   */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/tata-web-clone.png'
                            title='TATA Website Clone Design Project'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/tata-web'
                        />


                        {/* US whole sale web  */}
                        <ProjectCard
                            category='bootstrap'
                            picture='/image/us-whole-sale.png'
                            title='US Whole Sale Clone Website'
                            tech='HTML | CSS| SCSS | BOOTSTRAP | JAVASCRIPT | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/uk-whole-sale'
                        />


                        {/* Calculator Project */}
                        <ProjectCard
                            category='others'
                            picture='/image/calculator-Project-Presentation.png'
                            title='Calculator Software Project'
                            tech='HTML5 | CSS3 | JAVASCRIPT'
                            link='https://iftekher2108.github.io/calculator-project'
                        />


                        {/* Currency Project */}
                        <ProjectCard
                            category='others'
                            picture='/image/currency-converter.jpg'
                            title='Currency Converter Project'
                            tech='HTML | CSS| BOOTSTRAP | JAVASCRIPT | Axios | JQUERY | PLUGINS'
                            link='https://iftekher2108.github.io/currency-converter'
                        />

                        {/* Todo javascript Project */}
                        <ProjectCard
                            category='others'
                            picture='/image/select-todo-list.png'
                            title='Select Todo List Project'
                            tech='HTML5 | CSS3 | JAVASCRIPT | JQUERY'
                            link='https://iftekher2108.github.io/todo-app-select'
                        />







                    </div>
                </div>
            </div>

            <Footer />

        </Layout>
    )
}

export default Project