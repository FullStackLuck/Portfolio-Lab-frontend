import {useState, useEffect} from 'react';


function About (props){
    //This state holds the about data 

    const [about, setAbout] = useState(null)

    const getAboutData = async () => {

        const response = await fetch(props.URL + "about")
        const data = await response.json();

        setAbout(data)
    }

    useEffect(()=> {getAboutData()},[]);

    const loaded = ()=>(
        <div>
            <h3>{about.name}</h3>
            <h2>{about.email}</h2>
            <p>{about.bio}</p>
        </div>


    ) 

    return about ? loaded() : <h1>Loading..</h1>
}
export default About