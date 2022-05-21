import {useState, useEffect} from "react"


function Projects (props){

    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch (props.URL + "projects")
        const data = await response.json()


        setProjects(data)
    };

    useEffect(()=> {getProjectsData()}, []),
    console.log(projects)

    const loaded =() =>{

        return projects.map((projects) =>(
            <div>
                <h1>{projects.name}</h1>

                <a href={projects.git}>
                 <button>Github</button>
                </a>

                <a href={projects.live}>
                    <button>Live Site</button>
                </a>

            </div>

        ));
    }
    return projects ? loaded(): <h1>Loading...</h1>
    
}
export default Projects