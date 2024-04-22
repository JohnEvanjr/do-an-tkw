import React, { useState,useEffect,useRef } from "react";
import "../home/home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementRefs = document.querySelectorAll(".Row");
    elementRefs.forEach((elementRef, index) => {
      const elementOffsetTop = elementRef.offsetTop;
      if (scrollPosition > elementOffsetTop && !isVisible[index]) {
        setIsVisible(prevState => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
        setActiveIndex(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Container">
      <div className={`Row firstRow`}>

        <img src={process.env.PUBLIC_URL + "/img/man.jpg"} />
        <div className="des">
          <div className="title">
            <div className="smalTitle">Health & Fitness</div>
            <div className="bigTitle">WEBSITE</div>
          </div>
          <p>
            Unleash your potential and embark on a journey towards a stronger,
            fitter, and more confident you. Sign up for 'Make Your Body Shape'
            now and witness the incredible transformation your body is capable
            of!
          </p>
          <div className="advert">
            <table>
              <tbody>
                <tr>
                  <td className="cell advert-info">
                    <div className="smalTitle advert">50K</div>
                    <p>Members</p>
                  </td>
                  <td className="cell program-info">
                    <div className="smalTitle program">100+</div>
                    <p>Fitness programs</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button className="btn">Get Started</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={`Row secondRow ${isVisible[1] ? 'animate' : ''}`}>

        <div className="popular">
          <div className="main-content">
            <div className="popular-top">
              <div className="info">
                <h2 className="heading-lv2">EXPLORE OUR PROGRAM</h2>
                <p className="desc">
                  In here we will help you to shape and build your ideal body
                  and live your life to the fullest.
                </p>
              </div>
            </div>

            <div class="controls">
              <button class="control-btn">
                <img src="" alt="" />
              </button>
              <button class="control-btn">
                <img src="" alt="" />
              </button>
            </div>

            <div className="course-list">
              <div className="course-item">
                <a href="#!">
                  <img
                    src={process.env.PUBLIC_URL + "/img/pic1.jpg"}
                    alt="Ảnh 1"
                    className="thumb"
                  />
                </a>

                <div className="info">
                  <div className="head">
                    <h3 className="title">
                      <a className="line-clamp break-all" href="#!">
                        Strength
                      </a>
                    </h3>
                    <div className="rating">
                      <img src="" alt="" className="star" />
                      <span className="value"></span>
                    </div>
                  </div>

                  <p className="desc line-clamp line-2 break-all">
                    Embrace the essence of strength as we delve into its various
                    dimensions physical, mental, and emotional.
                  </p>

                  <div className="foot">
                    <span className="price"></span>
                    <button className="btn btn-book">Join now</button>
                  </div>
                </div>
              </div>

              <div className="course-item">
                <a href="#!">
                  <img
                    src={process.env.PUBLIC_URL + "/img/pic2.jpg"}
                    alt="Ảnh 1"
                    className="thumb"
                  />
                </a>

                <div className="info">
                  <div className="head">
                    <h3 className="title">
                      <a className="line-clamp break-all" href="#!">
                        Physical Fitness
                      </a>
                    </h3>
                    <div className="rating">
                      <img src="" alt="" className="star" />
                      <span className="value"></span>
                    </div>
                  </div>

                  <p className="desc line-clamp line-2 break-all">
                    It encompasses a range of activities that improve health,
                    strength, flexibility, and overall well-being.
                  </p>

                  <div className="foot">
                    <span className="price"></span>
                    <button className="btn btn-book">Join now</button>
                  </div>
                </div>
              </div>

              <div className="course-item">
                <a href="#!">
                  <img
                    src={process.env.PUBLIC_URL + "/img/pic3.jpg"}
                    alt="Ảnh 1"
                    className="thumb"
                  />
                </a>

                <div className="info">
                  <div className="head">
                    <h3 className="title">
                      <a className="line-clamp break-all" href="#!">
                        Fat Lose
                      </a>
                    </h3>
                    <div className="rating">
                      <img src="" alt="" className="star" />
                      <span className="value"></span>
                    </div>
                  </div>

                  <p className="desc line-clamp line-2 break-all">
                    Through a combination of workout routines and expert
                    guidance, we'll empower you to reach your goals.
                  </p>

                  <div className="foot">
                    <span className="price"></span>
                    <button className="btn btn-book">Join now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`Row thirdRow ${isVisible[2] ? 'animate' : ''}`}>

        <div className="features">
          <div className="main-content">
            <div className="bod">
              <div className="images">
                <img src={process.env.PUBLIC_URL + "/img/health1.jpg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/img/health2.jpg"} alt="" />
              </div>
              <div className="content">
                <h2 className="heading-lv2">THE CLASS YOU WILL GET HERE</h2>
                <p className="desc">
                  Led by our team of expert and motivational instructors, "The
                  Class You Will Get Here" is a high-energy, results-driven
                  session that combines a perfect blend of cardio, strength
                  training, and functional exercises. Each class is
                  carefully curated to keep you engaged and challenged, ensuring
                  you never hit a plateau in your fitness endeavors.
                </p>

                <a href="#!" className="btn cta-btn">
                  Book A Class
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="features features-2nd">
          <div className="main-content">
            <div className="bod">
              <div className="images">
                <img src={process.env.PUBLIC_URL + "/img/health3.jpg"} alt="" />
              </div>
              <div className="content">
                <h2 className="heading-lv2">
                  TAKE THE NEXT STEP TOWARD YOUR PERSONAL
                </h2>
                <p className="desc">
                  Take the next step toward. Join now to receive personalized
                  and more recommendations from the full Programe catalog.
                </p>
                <a href="#!" className="btn cta-btn">
                  Book A Class
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`Row fourthRow ${isVisible[3] ? 'animate' : ''}`}>

        <div className="feedback">
          <div className="main-content">
            <div className="feedback-list">
              <div className="feedback-item">
                <div className="info">
                  <img
                    src={process.env.PUBLIC_URL + "/img/ava1.jpg"}
                    alt="Luna Scalet"
                    className="avatar"
                  />
                  <p className="member-name">Luna Scalet</p>
                  <p className="desc">Software Developer</p>
                  <div className="dots">
                    {activeIndex === 0 ? (
                      <span className="dot active"></span>
                    ) : (
                      <span
                        className="dot"
                        onClick={() => handleDotClick(0)}
                      ></span>
                    )}
                    {activeIndex === 1 ? (
                      <span className="dot active"></span>
                    ) : (
                      <span
                        className="dot"
                        onClick={() => handleDotClick(1)}
                      ></span>
                    )}
                    {activeIndex === 2 ? (
                      <span className="dot active"></span>
                    ) : (
                      <span
                        className="dot"
                        onClick={() => handleDotClick(2)}
                      ></span>
                    )}
                  </div>
                </div>
                <div className="content">
                  {activeIndex === 0 && (
                    <blockquote>
                      What truly sets this gym apart is their expert team of
                      trainers. The trainers are knowledgeable, approachable,
                      and genuinely invested in helping members achieve their
                      fitness goals. They take the time to understand individual
                      needs and create personalized workout plans, ensuring
                      maximum results and safety.
                    </blockquote>
                  )}
                  {activeIndex === 1 && (
                    <blockquote>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eligendi veniam ipsa alias ipsum repellendus error
                      accusantium, similique cupiditate delectus omnis!
                    </blockquote>
                  )}
                  {activeIndex === 2 && (
                    <blockquote>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus eaque recusandae laboriosam a tempora
                      voluptatibus culpa vero blanditiis? Ducimus dolorum nam
                      repellat esse animi! Voluptatum.
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
