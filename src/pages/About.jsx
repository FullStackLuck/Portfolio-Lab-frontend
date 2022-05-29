import {useState, useEffect} from 'react';
import '../App.css'


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
        <>
        <div className='about'>
            <ol>
            <h3>{about.name}</h3>
            <p className='bio'>{about.bio}</p>
            <img className='pic' src ={about.headshot}/>
            </ol>
        </div>
        <h1>Contacts</h1>
        <div className='name'>
            <h2>{about.email}</h2>
            <h1>Technologies</h1>
            <h2>{about.tech}</h2>
        </div>
        </>
    ) 

    return about ? loaded() : <h1>Loading..</h1>
}
export default About