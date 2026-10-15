import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faNetworkWired } from '@fortawesome/free-solid-svg-icons';


const Skill = () => {
  const data = [
    {id: 1, heading: "Core Backend", description: "Designing scalable, decoupled microservices and monolithic architectures with a focus on maintainability.", sub1: "Java", sub2: "Spring Boot", sub3: "Python", logo: faServer},

    {id: 2, heading: "Data Engineering", description: "Building automated extraction, normalization, and classification pipelines for complex datasets.", sub1: "Pandas", sub2: "ETL", sub3: "SQL", logo: faDatabase},

    {id: 3, heading: "Infrastructure & Algorithms", description: "Deploying self-hosted solutions and writing optimized, algorithmically sound code for intensive computations.", sub1: "DSA", sub2: "Linux", sub3: "QEA", logo: faNetworkWired}
  ]
 
  
  return (
    <div className="">
      <h2 className="font-mono text-xl underline">Technical Arsenal</h2>
      <div className="flex mt-10 gap-15 pl-6 pr-6">
        {data.map((item, index)=>(
            <div key={index} className="bg-light-cards rounded-2xl p-6">
                <FontAwesomeIcon icon={item.logo} className="text-4xl" />
                <h3 className="text-xl">{item.heading}</h3>
                <p className="bg-bg-light/50 p-2 mt-2">{item.description}</p>
                <div className="flex text-text-dark gap-4">
                    <span>{item.sub1}</span>
                    <span>{item.sub2}</span>
                    <span>{item.sub3}</span>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Skill