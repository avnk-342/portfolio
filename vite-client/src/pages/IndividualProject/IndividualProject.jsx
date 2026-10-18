import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { db } from '../../config/firestore'
import Footer from '../../components/Footer/Footer';

const IndividualProject = () => {
  const navigate = useNavigate();
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
    <div className="flex min-h-screen flex-col items-center pt-24 text-text-dark">
      <Link onClick={() => navigate(-1)} className="fixed left-0 top-24 p-5 text-[1.3em] no-underline">&lt; Back</Link>

        <div className="flex flex-col justify-center items-center">
            
          {/* <a href={data.git_links} target='_blank' className="github-links">Github</a> */}
          <div className={isWideImage
            ? "flex w-[80%] flex-col gap-12"
            : "flex w-[80%] flex-row-reverse items-center gap-[10%]"}>
            <div className="flex items-center justify-center">
              <img src={data.image1} alt="" onLoad={handleImageLoad} />
                  </div>
            <div>
              <h3 className="w-full text-[2em] font-bold font-mono">{data.name}</h3>
              <p className="w-full text-[1.13em]">{data.oneintro}</p>
                  </div>
          </div>

          <hr className="w-[80%]" />

          <div className="flex w-[80%] flex-col items-center justify-center">
            <h4 className="w-full text-[1.5em]">Problem Solved</h4>
            <p className="text-[1.25em]">{data.desc}</p>
              </div>
          <hr className="w-[80%]" />
          <div>
            <div className="flex flex-wrap gap-2.5 text-white">
                  {data.tech_stack && data.tech_stack.split(',').map((tech, index) => (
                    <span key={index} className="rounded-[5px] bg-light-cards px-2.5 py-1.25 text-[1.5625em] text-text-dark">{tech.trim()}</span>
                  ))}
                </div>
              </div>
        </div>
                  <Footer/>
    </div>
  )
}

export default IndividualProject