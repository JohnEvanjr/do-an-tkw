import React from "react";
import "../workout/workout.css";

export default function Workout() {
  return (
    <div className="Container">
      <div className="hero">
        <div className="main-content">
          <div className="body">
            <div class="body-top">
              <div class="info">
                <h2 class="heading-lv2">Choose one and start</h2>
                <p class="desc">
                  Build new skills with new trendy courses and shine for the
                  next future career.
                </p>
              </div>
            </div>
            <div className="action-list">
              <div class="list-item">
                <a href="https://www.youtube.com/results?search_query=gym+workout" target="blank">
                  <img
                    src={process.env.PUBLIC_URL + "/img/gym.jpg"}
                    alt="gym"
                    class="thumb"
                  />
                </a>
                <div class="info">
                  <h3 class="title">
                    <a href="#!">Gym</a>
                  </h3>
                </div>
              </div>

              <div class="list-item">
                <a href="https://www.youtube.com/results?search_query=calisthenics+cho+ng%C6%B0%E1%BB%9Di+m%E1%BB%9Bi+t%E1%BA%ADp" target="blank">
                  <img
                    src={process.env.PUBLIC_URL + "/img/calisthenics.jpg"}
                    alt="Calisthenics"
                    class="thumb"
                  />
                </a>
                <div class="info">
                  <h3 class="title">
                    <a href="#!">Calisthenics</a>
                  </h3>
                </div>
              </div>

              <div class="list-item">
                <a href="https://www.youtube.com/results?search_query=Yoga" target="blank">
                  <img
                    src={process.env.PUBLIC_URL + "/img/yoga.jpg"}
                    alt="yoga"
                    class="thumb"
                  />
                </a>
                <div class="info">
                  <h3 class="title">
                    <a href="#!">Yoga</a>
                  </h3>
                </div>
              </div>

              <div class="list-item">
                <a href="https://www.youtube.com/results?search_query=how+to+relax+stress" target="blank">
                  <img
                    src={process.env.PUBLIC_URL + "/img/relax.jpg"}
                    alt="relax"
                    class="thumb"
                  />
                </a>
                <div class="info">
                  <h3 class="title">
                    <a href="#!">Relax</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
