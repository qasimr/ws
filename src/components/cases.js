import React from "react";

const caseStudies = [
  {
    id: 1,
    subtitle: "BlueLotus.AI",
    title: "BlueLotus Slogan",
    img: "ffm1",
    link: "/blueLotus"
  },
  {
    id: 2,
    subtitle: "Winterengel",
    title: "Die clevere Winterdienst Platform",
    img: "ffmsnow",
    link: "/winterengel"
  },
  {
    id: 3,
    subtitle: "MMS.today",
    title: "MMS.today",
    img: "ffm",
    link: "/mms"
  }
];

const Cases = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='row'>
          {caseStudies.map(caseItem => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
