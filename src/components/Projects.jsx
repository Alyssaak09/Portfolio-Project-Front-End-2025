import { useState, useEffect } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        async function fetchProjects() {
            let resp = await fetch('https://portfolio-project-2025.onrender.com/api/projects');
            let data = await resp.json();

            console.log(data);
            setProjects(data);

        }  // fetchProjects()

        // Call the fetchProjects function to get the projects data
        fetchProjects();

    }, []);  // useEffect(() 


    return (

        <main >
            <section id="projects">
                <h2 >Projects</h2>

                {
                    projects.map((p) => {
                        return (

                            <article key={p._id}>

                                <div>
                                    <div>
                                        <h3>{p.title}</h3>
                                        <img src={`/images/${p.imagelink}`} alt="My image" />

                                        <p >
                                            <br />{p.description}<br /><br />
                                        </p>
                                        <p>
                                            <span>Skills: </span>
                                            <span>
                                                {p.skills.join(', ')}
                                            </span>
                                        </p>
                                        <br />
                                        <a href={p.link} target="_blank" className="project-button">
                                            View Project
                                        </a>

                                    </div>
                                </div>
                            </article>

                        )

                    })  // projects.map((p) => {
                }
            </section>
        </main>

    )   // return 

}  // function Projects() {

export default Projects;