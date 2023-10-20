import React, { useState } from 'react';

const DoctorTabs = () => {
  const [activeTab, setActiveTab] = useState('overview'); // Default active tab is 'overview'

  // Sample data for 5 doctors
  const doctorsData = [
    {
      name: 'Doctor 1',
      overview: {
        aboutMe: 'I am a dedicated doctor with a passion for helping patients.',
        education: 'Medical School 1, Residency 1',
        workExperience: 'Hospital 1, Clinic 1',
        services: 'General Checkup, Pediatrics, Surgery',
        awards: 'Best Doctor Award 2021, Top Surgeon 2020',
        specializations: 'Cardiology, Pediatrics',
      },
      locations: 'Location 1, Location 2',
      reviews: '5 reviews',
      businessHours: 'Mon-Fri: 9 AM - 5 PM',
    },
    {
      name: 'Doctor 2',
      overview: {
        aboutMe: 'Experienced doctor specializing in various medical fields.',
        education: 'Medical School 2, Residency 2',
        workExperience: 'Hospital 2, Clinic 2',
        services: 'Internal Medicine, Dermatology, Psychiatry',
        awards: 'Top Physician Award 2022',
        specializations: 'Internal Medicine, Dermatology',
      },
      locations: 'Location 3, Location 4',
      reviews: '8 reviews',
      businessHours: 'Mon-Fri: 8 AM - 4 PM',
    },
    // Add data for the other doctors here
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const doctor = doctorsData[0]; // Display the information for the first doctor by default
  const { name, overview, locations, reviews, businessHours } = doctor;

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick('overview')}>Overview</button>
        <button onClick={() => handleTabClick('locations')}>Locations</button>
        <button onClick={() => handleTabClick('reviews')}>Reviews</button>
        <button onClick={() => handleTabClick('businessHours')}>Business Hours</button>
      </div>

      <div>
        <h2>{name}</h2>
        {activeTab === 'overview' && (
          <div>
            <h3>About Me</h3>
            <p>{overview.aboutMe}</p>

            <h3>Education</h3>
            <p>{overview.education}</p>

            <h3>Work & Experience</h3>
            <p>{overview.workExperience}</p>

            <h3>Services</h3>
            <p>{overview.services}</p>

            <h3>Awards</h3>
            <p>{overview.awards}</p>

            <h3>Specializations</h3>
            <p>{overview.specializations}</p>}
          </div>
        )}
        {activeTab === 'locations' && <p>{locations}</p>}
        {activeTab === 'reviews' && <p>{reviews}</p>}
        {activeTab === 'businessHours' && <p>{businessHours}</p>}
      </div>
    </div>
  );
};

export default DoctorTabs;
