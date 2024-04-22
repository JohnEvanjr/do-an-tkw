import "./blog.css";
import React from "react";
import { Route } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <div className="Container">
      <section className="first-blog">
        <h3><center>Tin tức gần đây</center></h3><br></br>
        <div className="latest-posts">
          <div className="post">
            <img src={process.env.PUBLIC_URL + "/img/image1.jpg"} />
            <div className="post-info">
              <h4>
                <a href="#">Lựa chọn"tuyệt vời"cho việc giảm cân </a>
              </h4>
              <p className="post-meta">Ngày đăng: 01/01/2024</p>
            </div>
          </div>
          <div className="post">
            <img src={process.env.PUBLIC_URL + "/img/image2.jpg"} />
            <div className="post-info">
              <h4>
                <a href="#">Tác dụng không ngờ đến của trái cây</a>
              </h4>
              <p className="post-meta">Ngày đăng: 02/01/2024</p>
            </div>
          </div>
          <div className="post">
            <img src={process.env.PUBLIC_URL + "/img/image3.jpg"} />
            <div className="post-info">
              <h4>
                <a href="#">Yoga sự lựa chọn tuyệt vời cho cơ thể</a>
              </h4>
              <p className="post-meta">Ngày đăng: 02/01/2024</p>
            </div>
          </div>
          <div className="post">
            <img src={process.env.PUBLIC_URL + "/img/image4.jpg"} />
            <div className="post-info">
              <h4>
                <a href="#">Những bài tập đơn giản mà hiệu quả </a>
              </h4>
              <p className="post-meta">Ngày đăng: 02/01/2024</p>
            </div>
          </div>
        </div>
      </section>
      {/* style="padding-left:5% " */}
      
      <section className="second-blog">
      <h3><center>Bài đăng mới nhất</center></h3><br></br>
        <div className="posts">
            {/* <!-- Bài đăng 1 -->  */}
        <div className="blog-post">
          <h2>Tập luyện hiệu quả ngay tại nhà.</h2>
          <div className="post-meta">
            <span className="author">By John Doe,</span>
            <span className="date">March 8, 2024</span>
          </div>
          <div className="content">
            <p>
              Việc tập luyện các bài tập vận động ngay tại nhà đang ngày càng
              phổ biến và trở nên hiệu quả không ngờ.
            </p>
            <p>
              Lợi ích rõ ràng nhất của việc tập luyện tại nhà là không cần đến
              phòng tập mà bạn vẫn có thể thực hiện các bài tập rèn luyện sức
              khỏe,các bài tập cơ bản giúp thân hình của bạn ngày càng trở nên
              khỏe khoắn và săn chắc...
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image6.jpg"} />
          </div>
        </div>

        {/* <!-- Bài đăng 2 --> */}
        <div className="blog-post">
          <h2>Lợi ích không ngờ từ việc chạy bộ mỗi ngày.</h2>
          <div className="post-meta">
            <span className="author">By Hanna Joe</span>
            <span className="date">March 8, 2024</span>
          </div>
          <div className="content">
            <p>
              Việc chạy bộ giúp tăng cường sức mạnh cơ bắp và sức bền của tim
              mạch, giảm cân hiệu quả và duy trì cân nặng lý tưởng.
            </p>
            <p>
              Cải thiện tinh thần, giảm căng thẳng và lo âu. Đồng thời giúp bạn
              cải thiện hệ tiêu hóa và giảm nguy cơ các bệnh về đường tiêu hóa.
              Không những thế chạy bộ mỗi ngày còn giúp bạn ...
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image7.jpg"} />
          </div>
        </div>

        {/* <!-- Bài đăng 3 --> */}
        <div className="blog-post">
          <h2>Những động tác vận động mạnh có hiệu quả cao. </h2>
          <div className="post-meta">
            <span className="author">By Josepn Dian</span>
            <span className="date">March 8, 2024</span>
          </div>
          <div className="content">
            <p>
              Vận động mạnh tăng cường sức mạnh cơ bắp, sự linh hoạt và cải
              thiện độ bền. Giảm nguy cơ béo phì, tiểu đường và các bệnh về tim
              mạch.
            </p>
            <p>
              Khi vận động hợp lý giúp ta cải thiện tư duy, tăng cường sự tập
              trung và cải thiện tinh thần tỉnh táo. Giúp cơ thể tiêu hao năng
              lượng dư thừa và đốt cháy calo một cách hiệu quả...
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image9.jpg"} />
          </div>
        </div>

        {/* <!-- Bài đăng 4--> */}
        <div className="blog-post">
          <h2>Tại sao chúng ta cần ăn phải ăn kiêng ?</h2>
          <div className="post-meta">
            <span className="author">By Merry Joe</span>
            <span className="date">March 7, 2024</span>
          </div>
          <div className="content">
            <p>
              Việc ăn kiêng giúp ta kiểm soát lượng calo và chọn lựa thực phẩm
              phù hợp, giúp đạt được mục tiêu giảm cân một cách hiệu quả.
            </p>
            <p>
              Ăn kiêng lành mạnh làm giảm lượng chất béo bão hòa và cholesterol
              trong khẩu phần, điều này có thể giảm nguy cơ mắc các bệnh tim
              mạch như đau thắt ngực và đột quỵ.
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image8.jpg"} />
          </div>
        </div>
        {/* <!-- Bài đăng 5--> */}
        <div className="blog-post">
          <h2>Chinh phục những cảnh giới của Street workout!</h2>
          <div className="post-meta">
            <span className="author">By Hadmet Kean</span>
            <span className="date">March 7, 2024</span>
          </div>
          <div className="content">
            <p>
              Street workout và Calisthenics đang ngày càng phổ biến và được yêu
              thích khắp nơi và được xem là một xu hướng của giới trẻ hiện nay.
            </p>
            <p>
              Nếu bạn đã quá nhàm chán với các bài lên xà hít đất đơn điệu ngày
              này qua tháng khác thì đây là bài viết dành cho bạn. 10 kỹ thuật
              cao cấp dưới đây sẽ khiến bạn toát mồ hôi theo cả nghĩa đen lẫn
              nghĩa bóng, và nếu chinh phục được thì cũng đáng để gọi là kỳ
              công..
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image10.jpg"} />
          </div>
        </div>
        {/* <!-- Bài đăng 6 --> */}
        <div className="blog-post">
          <h2>Những tuyệt chiêu để có cơ bụng 6 múi ngay tại nhà.</h2>
          <div className="post-meta">
            <span className="author">By Hanm Rate</span>
            <span className="date">March 6, 2024</span>
          </div>
          <div className="content">
            <p>
              Một thân hình đẹp luôn là mong ước của rất nhiều người, đặc biệt
              một cơ thể hoàn mỹ, một body săn chắc với cơ bụng 6 múi.
            </p>
            <p>
              Vậy làm cách nào để có được điều trên? Đó là tập luyện và vận động
              các bài tập theo chu trình kết hợp với sự nghỉ ngơi hợp lý để đạt
              được cơ bụng 6 múi mà bao người mong ước...
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image11.jpg"} />
          </div>
        </div>

        {/* <!-- Bài đăng 7 --> */}
        <div className="blog-post">
          <h2>Bơi-Môn thể thao tuyệt vời cho mọi lứa tuổi.</h2>
          <div className="post-meta">
            <span className="author">By Yun Deni</span>
            <span className="date">March 6, 2024</span>
          </div>
          <div className="content">
            <p>
              Bơi không chỉ là một môn thể thao mà nó còn là một hoạt động
              aerobic toàn diện dành cho mọi lứa tuổi.{" "}
            </p>
            <p>
              Bơi tăng cường sức khỏe tim mạch và hệ hô hấp,giảm căng thẳng trên
              các khớp và cơ bắp, phù hợp cho những người có vấn đề về cơ hoặc
              khớp.Đốt cháy năng lượng lớn, giúp kiểm soát cân nặng và tăng
              cường sức khỏe tim mạch, cơ bắp, thể trạng...
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image12.jpg"} />
          </div>
        </div>

        {/* <!-- Bài đăng 8 --> */}
        <div className="blog-post">
          <h2>Những thực phẩm không thể thiếu trong bữa ăn.</h2>
          <div className="post-meta">
            <span className="author">By John Doe</span>
            <span className="date">March 5, 2024</span>
          </div>
          <div className="content">
            <p>
              Rau củ quả là một trong những thực phẩm hết sức cần thiết trong
              mỗi bữa ăn để cơ thể khỏe mạnh và phát triển.
            </p>
            <p>
              Ăn rau củ quả mỗi ngày giúp hàm lượng chất sơ, vitamin các và
              khoáng chất giúp cơ thể phát triển toàn diện và giảm thiểu được
              rất nhiều bệnh tật. Không những thế theo nghiên cứu, khi ăn rau củ
              quả nhiều còn giúp thanh nhiệt, giải độc, và giúp giảm cân..
            </p>
            <img src={process.env.PUBLIC_URL + "/img/image5.jpg"} />
          </div>
        </div>
        </div>
      </section>
      <div className="third-blog">
        <figure>
          <img src={process.env.PUBLIC_URL + "/img/image13.jpg"} />
          <figcaption>Tập luyện hiệu quả </figcaption>
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + "/img/image14.jpg"} />
          <figcaption>Huấn luyện viên</figcaption>
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + "/img/image15.jpg"} />
          <figcaption>Dinh dưỡng hợp lý</figcaption>
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + "/img/image16.jpg"} />
          <figcaption>Các khóa đào tạo</figcaption>
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + "/img/image17.jpg"} />
          <figcaption>Bài viết hữu ích</figcaption>
        </figure>
      </div>
      </div>
    </>
  );
}