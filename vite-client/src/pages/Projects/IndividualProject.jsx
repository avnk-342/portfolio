import { Link, useParams } from 'react-router-dom'
import './IndividualProject.css'
import { getDoc, doc } from "firebase/firestore";
import { React, useState, useEffect } from 'react';
import { db } from '../../config/firestore'

const IndividualProject = () => {

  const { id } = useParams(); // Get the ID from the URL
  const [data, setData] = useState([]);
  const [isWideImage, setIsWideImage] = useState(false);

  const handleImageLoad = (e) => {
    const {width, height} = e.target;
    setIsWideImage(width>height);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'individual_project_info', id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='individual-project-main'>
        <div className="back-button">
            <Link to="/" className='back-button' >&lt; Back</Link>
        </div>

        <div className="project-content">
            
            {/* <a href={data.git_links} target='_blank' className="github-links">Github</a> */}
            <div className = {isWideImage ? "col1" : "row1"}>
                <div className='project-images'>
                    <img src= {data.image1} alt="" onLoad={handleImageLoad} />
                </div>
                <div className="project-name">
                    <h3>{data.name}</h3>
                    <p>{data.oneintro}</p>
                </div>
            </div>
            <hr />
            <div className="row2">
                <h4>Problem Solved</h4>
                <p className='project-description'>{data.desc}</p>
            </div>
            <hr />
            <div className="row3">
              <div className="tech-stack">
                {data.tech_stack && data.tech_stack.split(',').map((tech, index) => (
                  <span key={index} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default IndividualProject