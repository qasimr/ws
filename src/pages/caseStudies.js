import React from "react";
import Banner from "../components/banner";

const cases = [
  {
    id: 1,
    subtitle: "BlueLotus.AI",
    title: "BlueLotus Slogan",
    img: "ffm1"
  },
  {
    id: 2,
    subtitle: "Winterengel",
    title: "Die clevere Winterdienst Platform",
    img: "ffmsnow"
  },
  {
    id: 3,
    subtitle: "MUCKSMÄUSCHENSTILL",
    title: "MMS.today",
    img: "ffm"
  }
];

const CaseStudies = () => {
  return (
    <>
    <Banner />
    <section className='casesstudies'>
      <div className='container-fluid'>
        <div className='row'>
          {cases.map(caseStudiesItem => (
            <div className='casestudies' key={caseStudiesItem.id}>
              <div className='casestudies-details'>
                <span>{caseStudiesItem.subtitle}</span>
                <h2>{caseStudiesItem.title}</h2>

              <div className='casestudies-image'>
                <img
                  src={require(`../assets/${caseStudiesItem.img}.png`)}
                  alt={caseStudiesItem.title}
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CaseStudies;
