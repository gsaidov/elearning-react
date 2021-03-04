import React from "react";

const About = (prop) => {
  return (
    <>
      <section className="about py-5">
        <div className="container">
          <div className="row text-white">
            <div className="col-12 mb-5">
              <h4 className="text-center">About Us</h4>
            </div>
            <div className="col h1">
              <p className="about-header">
                We believe everyone can <span>access education</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mission">
        <div className="row justify-content-center">
          <div className="col-md-5 text-justify py-5">
            Advancement in technology made it possible for every person able to
            access education. Yet, only few have been privileged to access to
            high-quality education. We are here to offer online courses to that
            everyone can afford. Online classes may increase efficiency and
            course productivity. To supplement lectures, teachers can provide
            access to tools that facilitate discussion and active participation.
            In an online environment, teachers can reach students with different
            learning styles more easily.
          </div>
        </div>
      </section>
      <section className="beliefs py-5">
        <div className="container text-center">
          <h3>We believe</h3>
          <div className="row justify-content-center">
            <div className="col-md-6">
              Online Learning helps human progress.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              It helps to changes the world from bad to good, from poverty to
              prosperity, from conflict to peace.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              It makes it possible to transform people's lives, families,
              communities.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              And CloudLearn is here to make it happen. We partner with the best
              organizations to bring quality learning to every corner of the
              world.
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 ">
              So that anyone, anywhere has the ability to transform their life
              through learning.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
