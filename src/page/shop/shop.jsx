import React from "react";
import "./shop.css";

export default function Shop() {
  return (
    <>
      <body>
        <div id="shop">
          <div id="introduction">
            <div id="navigator">
              <div id="frame-navigator_left">
                <form id="navigator-search">
                  <button style={{ all: "unset" }} type="submit">
                    <a>
                      <img
                        className="img-navigator_left"
                        src={process.env.PUBLIC_URL + '/img/search.svg'}
                        loading="lazy"
                      />
                    </a>
                  </button>
                  <input type="search" name="search" id="search" />
                </form>
              </div>
            </div>
            <div className="intro-content">
              <p style={{ fontWeight: 800, fontSize: 80, marginBottom: 40 }}>
                Fitness and health
              </p>
              <p style={{ fontWeight: 800, fontSize: 20, marginBottom: 80 }}>
                Dedicated to Your Wellness Journey: Empowering Health and
                Fitness Every Step of the Way.
              </p>
              <a style={{ fontWeight: 800, fontSize: 40 }}>Shop Now</a>
            </div>
          </div>
          <div id="food-shop">
            <img
              style={{ height: 300, width: "100%" }}
              src={process.env.PUBLIC_URL + '/img/NUTROBOLICS.png'}
              loading="lazy"
            />
            <div id="food-info">
              <a>
                <img src={process.env.PUBLIC_URL + '/img/left.svg'} loading="lazy" />
              </a>
              <div className="fooditem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/food1.png'} />
                <p>Nutrabolics Anabolic State Elite 21 servings</p>
                <h1>800.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <div className="fooditem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/food2.png'} />
                <p>Nutrabolics Mass Fusion 12lbs</p>
                <h1>700.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <div className="fooditem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/food3.png'} />
                <p>Nutrabolics Hydropure 100% Hydrolyzed Whey Protein 4.5lbs</p>
                <h1>900.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <a>
                <img src={process.env.PUBLIC_URL + '/img/right.svg'} loading="lazy" />
              </a>
            </div>
          </div>
          <div id="workout-shop">
            <img
              style={{ height: 300, width: "100%" }}
              src={process.env.PUBLIC_URL + '/img/CORENGTH.png'}
              loading="lazy"
            />
            <div id="workout-info">
              <a>
                <img src={process.env.PUBLIC_URL + '/img/left.svg'} loading="lazy" />
              </a>
              <div className="workoutitem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/workout1.png'} />
                <p>Tạ Cầm tay lục giác</p>
                <h1>200.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <div className="workoutitem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/workout2.png'} />
                <p>Thanh tập chống đẩy có tay cầms</p>
                <h1>300.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <div className="workoutitem">
                <img width="250px" height="250px" src={process.env.PUBLIC_URL + '/img/workout3.png'} />
                <p>Dây nhảy tập kháng lực 15m</p>
                <h1>300.000 VNĐ</h1>
                <div>Mua ngay</div>
              </div>
              <a>
                <img src={process.env.PUBLIC_URL + '/img/right.svg'} loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}