import React from "react";
import "../about/about.css";

export default function About() {
  return (
    <>
      <div className="Container">
        <div className="introduct">
          <div className="intro-text">
            <center>
              <div className="smalTitle">About Us</div>
            </center>
            <p>
              Chào mừng đến với H&FWeb! Chúng tôi là một cộng đồng đam mê dành
              riêng cho sức khỏe và thể dục. Sứ mệnh của chúng tôi là cung cấp
              cho bạn các công cụ, sự hỗ trợ và động lực bạn cần để đạt được các
              mục tiêu về sức khỏe và thể lực của mình.
            </p>
            <p>
              Tại H&FWeb, chúng tôi cung cấp các chương trình đào tạo được cá
              nhân hóa, lời khuyên về chế độ dinh dưỡng hợp lý của các chuyên
              gia và cộng đồng hỗ trợ để giúp bạn từng bước trên hành trình rèn
              luyện thể chất của mình.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/img/about1.webp"}
            alt="Health & Fitness"
          />
        </div>
        <div className="members">
          {" "}
          {/* Thay đổi từ container thành members */}
          <div className="member">
            <img
              src={process.env.PUBLIC_URL + "/img/about3.png"}
              alt="Dinh Van"
              className="member-photo"
            />

            <div className="member-info">
              <h2>Phạm Đình Văn</h2>
              <p>MSSV: 2001225777</p>
              <p>Email: johnevanjr1902@gmail.com</p>
              <p>Sở thích: Music and Guitar</p>
              <p>Liên hệ: 0376699063</p>
              <p>Nhiệm vụ: .....................</p>
            </div>
          </div>
          <div className="member">
            <img
              src={process.env.PUBLIC_URL + "/img/about3.png"}
              alt="Dinh Van"
              className="member-photo"
            />

            <div className="member-info">
              <h2>Đinh Ngọc Huy</h2>
              <p>MSSV: 2001221699</p>
              <p>Email: dinhngochuy1125@gmail.com</p>
              <p>Sở thích: Music and Movies</p>
              <p>Liên hệ: 0334470351</p>
              <p>Nhiệm vụ: .....................</p>
            </div>
          </div>
          <div className="member">
            <img
              src={process.env.PUBLIC_URL + "/img/about3.png"}
              alt="Dinh Van"
              className="member-photo"
            />

            <div className="member-info">
              <h2>Từ Anh Văn</h2>
              <p>MSSV: 2001225779</p>
              <p>Email: tuanhvan2018@gmail.com</p>
              <p>Sở thích: Music and Reading</p>
              <p>Liên hệ: 0908785398</p>
              <p>Nhiệm vụ: .....................</p>
            </div>
          </div>
          <div className="member">
            <img
              src={process.env.PUBLIC_URL + "/img/about3.png"}
              alt="Dinh Van"
              className="member-photo"
            />

            <div className="member-info">
              <h2>Đỗ Hữu Phúc</h2>
              <p>MSSV: 2033223754</p>
              <p>Email: phuchuudo2468@gmail.com</p>
              <p>Sở thích: Technology and Rubik's Cube</p>
              <p>Liên hệ: 0906551283</p>
              <p>Nhiệm vụ: ......................</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
