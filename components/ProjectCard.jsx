// import React from 'react';
import Image from "next/image"


function ProjectCard(props) {

    return (
        <div className={`${props.category} col-lg-3 col-md-6 col-sm-12`}>
        <div className="project-hover card">
            <Image src={`${props.picture}`} height={500} width={500} className="img-fluid object-fit-cover"
                alt={`${props.title}`} />
            <div className="p-3">
                <h5 title={`${props.title}`} className="text-primary">
                    { props.title }
                </h5>
                <p title={`${props.tech}`}>{props.tech}</p>
                <button className="btn btn-primary fw-bold py-1 px-3"><a
                    href={`${props.link}`}
                    className="nav-link text-white">Live View</a></button>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard