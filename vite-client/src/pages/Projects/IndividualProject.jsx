import { Link, useParams } from 'react-router-dom'
import './IndividualProject.css'
import pfp from '../../assets/developer-image.jpg'
import { getDoc, doc } from "firebase/firestore";
import { React, useState, useEffect } from 'react';
import { db } from '../../config/firestore'

const IndividualProject = () => {

  const { id } = useParams(); // Get the ID from the URL
  const [data, setData] = useState([]);

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
            <Link to="/" className='back-button' >/Back</Link>
        </div>

        <div className="project-content">
            <div className="row1">
                <div className="project-name">
                    <h3>{data.name}</h3>
                </div>
                <div className='project-images'>
                    <img src={pfp} height={100} width={100} alt="" />
                </div>
            </div>
            
            <div className="row2">
                <h4>Project description</h4>
                <ul>
                  <li>{data.desc_pt_1}</li>
                  <li>{data.desc_pt_2}</li>
                  <li>{data.desc_pt_3}</li>
                </ul>
            </div>

            <div className="row3">
              <h4>Technology stack</h4>
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