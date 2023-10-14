

import React, { useState } from 'react';
import TabItem from './TabItem';
import './TabContainer.css'

const tabData = [
  {
    image: 'https://i.ibb.co/0BnZXFy/cavity.png',
    title: 'Cavity Protection',
    description: 'Cavity protection, in the context of oral health and dentistry, refers to the measures and practices taken to prevent dental cavities, also known as dental caries or tooth decay. Dental cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. They are typically caused by a combination of factors, including bacteria in the mouth, sugary or acidic foods and beverages, and poor dental hygiene.',
  },
  {
    image: 'https://i.ibb.co/rbjLmc3/orthopedic.jpg',
    title: 'Cosmetic Dentistry',
    description: "Cosmetic dentistry is a branch of dentistry that focuses on improving the appearance of a person's teeth, gums, and smile. Unlike general dentistry, which primarily deals with oral health and disease prevention, cosmetic dentistry is primarily concerned with the aesthetic aspects of the teeth and mouth. Cosmetic dentists work to enhance the overall appearance of a patient's smile, which can have a significant impact on a person's self-esteem and confidence.",
  },
  {
    image: 'https://i.ibb.co/kmzFhst/gastrology.jpg',
    title: 'Oral Surgery',
    description: 'Oral and maxillofacial surgery is a surgical specialty focusing on reconstructive surgery of the face, facial trauma surgery, the oral cavity, head and neck, mouth, and jaws, as well as facial cosmetic surgery/facial plastic surgery including cleft lip and cleft palate surgery.',
  },
  {
    image: 'https://i.ibb.co/zf9Q2YN/oral.jpg',
    title: 'Gastrology',
    description: "Gastroenterology is the medical specialty that focuses on the diagnosis and treatment of disorders related to the digestive system. Gastroenterologists are physicians who specialize in this field and are trained to treat conditions such as irritable bowel syndrome, Crohn's disease, ulcerative colitis, acid reflux, liver diseases, and more.",
  },
  {
    image: 'https://i.ibb.co/G215FHW/cosmetic.jpg',
    title: 'Orthopedic',
    description: 'Orthopedic surgery or orthopedics is the branch of surgery concerned with conditions involving the musculoskeletal system. Orthopedic surgeons use both surgical and nonsurgical means to treat musculoskeletal trauma, spine diseases, sports injuries, degenerative diseases, infections, tumors, and congenital disorders.',
  },
 

];

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabData.map((tab, index) => (
          <button key={index} onClick={() => handleTabClick(index)} className={activeTab === index ? 'active' : ''}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabData.map((tab, index) => (
          <div key={index} className={`tab-item ${activeTab === index ? 'active' : 'inactive'}`}>
            {activeTab === index && <TabItem image={tab.image} title={tab.title} description={tab.description} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer;
