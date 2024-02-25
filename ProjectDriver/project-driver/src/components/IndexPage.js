// src/components/IndexPage.js
import React from 'react';
import './IndexPage.css';
import hadoopIcon from '../assets/icons/hadoop-icon.png';
import sparkIcon from '../assets/icons/spark-icon.png';
import jupyterIcon from '../assets/icons/jupyter-icon.png';
import jenkinsIcon from '../assets/icons/jenkins-icon.png';
import serverIcon from '../assets/icons/server-icon.png';

function IndexPage() {
  const applications = [
    { name: 'Apache Hadoop', image: hadoopIcon, alt: 'Hadoop Icon' },
    { name: 'Apache Spark', image: sparkIcon, alt: 'Spark Icon' },
    { name: 'Jupyter Notebook', image: jupyterIcon, alt: 'Jupyter Icon' },
    { name: 'Jenkins', image: jenkinsIcon, alt: 'Jenkins Icon' }
  ];

  const handleAppClick = (appName) => {
    console.log(`You clicked on ${appName}`);
    // Here you can add routing or other logic based on the app clicked
  };

  return (
    <div className="index-page">
        <h1>Big Data Processing Toolbox</h1>
        <div className="server-image">
            <img src={serverIcon} alt="Server" />
        </div>
        <div className="applications">
            {applications.map((app) => (
            <div key={app.name} className="app-icon" onClick={() => handleAppClick(app.name)}>
            <img src={app.image} alt={app.alt} />
            <p>{app.name}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default IndexPage;
