import "../health/health.css";
import { Route } from "react-router-dom";
import React from "react";

export default function Health() {
  return (
    <>
      <div className="Container">
      <div className="healthIntro">
        <p>Tổng quan về các yếu tố tạo nên một sức khỏe tốt</p>
      </div>
      <div className="element">
        <div className="listElement">
          <a href="#foodid">1.Dinh dưỡng</a>
        </div>
        <div className="listElement">
          <a href="#lifeid">2.Sinh hoạt</a>
        </div>
        <div className="listElement">
          <a href="#workoutid">3.Tập luyện</a>
        </div>
      </div>
      {/* ========= FOOD ========= */}
      <div className="food">
        <h1 id="foodid">Dinh Dưỡng</h1>
        <h2>1. CarboHydrates - Tinh bột </h2>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Khái niệm</h3>
              </th>
              <th>
                <h3>Vai trò trong tập luyện và sức khỏe</h3>
              </th>
              <th>
                <h3>Tác hại</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Carbohydrate là nguồn năng lượng chính cho cơ thể, được chuyển
                  đổi thành glucose để cung cấp năng lượng cho các hoạt động
                  hàng ngày và tập luyện.
                </p>
              </td>
              <td>
                <p>
                  Carbohydrate cung cấp năng lượng ngay lập tức cho cơ bắp và
                  giữ nước cho cơ thể. Đối với người tập luyện, duy trì một cân
                  nặng carbohydrate hợp lý giúp tăng hiệu suất tập luyện và giảm
                  cảm giác mệt mỏi.
                </p>
              </td>
              <td>
                <p>
                  Sử dụng quá nhiều carbohydrates có thể dẫn đến tích tụ mỡ
                  trong cơ thể, đặc biệt là nếu bạn không sử dụng hết năng lượng
                  được cung cấp từ chúng.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="source">
        <img src={process.env.PUBLIC_URL + '/img/ch1.jpg'}  />
<img src={process.env.PUBLIC_URL + '/img/ch2.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/ch3.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/ch4.jpg'} />
        </p>
        <h2>2. Protein - Đạm</h2>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Khái niệm</h3>
              </th>
              <th>
                <h3>Vai trò trong tập luyện và sức khỏe</h3>
              </th>
              <th>
                <h3>Tác hại</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Protein làm việc để tái tạo và xây dựng các cơ bắp, cung cấp
                  năng lượng cho cơ thể, và hỗ trợ sự phục hồi sau khi tập
                  luyện.
                </p>
              </td>
              <td>
                <p>
                  Protein cũng làm việc để cung cấp năng lượng cho cơ bắp và hỗ
                  trợ quá trình phục hồi sau khi tập luyện.
                </p>
              </td>
              <td>
                <p>
                  Sử dụng quá nhiều protein có thể gây áp lực cho thận và làm
                  tăng nguy cơ mắc các vấn đề về thận.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="source">
        <img src={process.env.PUBLIC_URL + '/img/pr1.jpg'}  />
<img src={process.env.PUBLIC_URL + '/img/pr2.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/pr3.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/pr4.jpg'} />
        </p>
        <h2>3. Fats - Chất béo</h2>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Khái niệm</h3>
              </th>
              <th>
                <h3>Vai trò trong tập luyện và sức khỏe</h3>
              </th>
              <th>
                <h3>Tác hại</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Fats cung cấp năng lượng dự trữ cho cơ thể, bảo vệ các cơ quan
                  nội tạng, và hỗ trợ quá trình hấp thụ vitamin.
                </p>
              </td>
              <td>
                <p>
                  Fats giúp cơ thể duy trì năng lượng và chức năng cơ bản, đồng
                  thời cũng cần thiết cho sự hấp thụ vitamin.
                </p>
              </td>
              <td>
                <p>
                  Sử dụng quá nhiều chất béo có thể dẫn đến tăng cân, tăng
                  cholesterol và tăng nguy cơ mắc các vấn đề tim mạch.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="source">
        <img src={process.env.PUBLIC_URL + '/img/fats3.jpg'}/>
<img src={process.env.PUBLIC_URL + '/img/fats1.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/fats2.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/fats4.jpg'} />
        </p>
        <h2>4. Vitamins & Minerals - Vitamin & Khoáng</h2>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Khái niệm</h3>
              </th>
              <th>
                <h3>Vai trò trong tập luyện và sức khỏe</h3>
              </th>
              <th>
                <h3>Tác hại</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Vitamins và minerals là các chất dinh dưỡng cần thiết cho các
                  quá trình trao đổi chất và chức năng của cơ thể.
                </p>
              </td>
              <td>
                <p>
                  Chúng hỗ trợ chức năng của các hệ thống cơ thể, bảo vệ cơ thể
                  khỏi bệnh tật và tăng cường sức khỏe nói chung.
                </p>
              </td>
              <td>
                <p>
                  Thiếu hụt vitamins và minerals có thể dẫn đến các vấn đề sức
                  khỏe như suy dinh dưỡng, giảm miễn dịch và suy nhược cơ thể.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="source">
        <img src={process.env.PUBLIC_URL + '/img/vitamins1.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/vitamins2.jpg'} />
<img src={process.env.PUBLIC_URL + '/img/vitamins3.jpg'}/>
<img src={process.env.PUBLIC_URL + '/img/vitamins4.jpg'}/>
        </p>
      </div>
      {/* ========= FOOD ========= */}
      {/* ======== LIFE ======= */}
      <div className="life">
        <h1 id="lifeid">Sinh hoạt</h1>
        <h2>Chế độ ăn</h2>
        <p>
          Mỗi ngày một người trưởng thành có cân nặng trung bình cần tiêu thụ
          khoảng <strong>1700-2200</strong> calories. Trong đó:
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>10%</strong> cho hoạt động tiêu hóa, chuyển hóa thức
                  ăn thành năng lượng
                </p>
              </td>
              <td>
                <p>
                  <strong>20%</strong> cho các hoạt động thể chất, vận động bình
                  thường
                </p>
              </td>
              <td>
                <p>
                  <strong>70%</strong> còn lại dùng cho chức năng cơ bản của các
                  hệ cơ quan và mô thần kinh
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Từ lượng calories trung bình tiêu thụ, ta có khái niệm thâm hụt
          calories được tính bằng công thức :{" "}
          <strong>lượng calories tiêu thụ - lượng calories nạp vào</strong>. Khi
          chỉ số thâm hụt calories dương, cơ thể sẽ bù đắp bằng cách chuyển hóa
          đường dự trữ dưới dạng mỡ trong cơ thể. Do đó, tùy theo mục đích tập
          luyện ta sẽ xây dựng chế độ ăn hợp lý
        </p><br></br><br></br>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Đối với người muốn giảm trọng lượng</h3>
              </th>
              <th>
                <h3>Đối với người muốn tăng trọng lượng</h3>
              </th>
              <th>
                <h3>Đối với người muốn duy trì cân nặng</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  Duy trì chế độ tập luyện và chế độ ăn sao cho chỉ số thâm hụt
                  calories dương.
                </p>
              </td>
              <td>
                <p>
                  Duy trì chế độ tập luyện và chế độ ăn sao cho chỉ số thâm hụt
                  calories âm.
                </p>
              </td>
              <td>
                <p>Cân bằng giữa lượng calories nạp và tiêu thụ.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <h3>Thành phần dưỡng hợp lý trong 1 bữa ăn</h3>
        <div className="dietMeal">
        <img src={process.env.PUBLIC_URL + '/img/life2.jpg'}/>
          <p>
            <strong>Protein (Đạm):</strong> Cung cấp năng lượng cho cơ thể và hỗ
            trợ sự phát triển cơ bắp và tái tạo tế bào. Tỉ lệ phần trăm đề xuất:
            khoảng <strong>15-25%</strong> của tổng lượng calo tiêu thụ hàng
            ngày.
          </p>

          <p>
            <strong>Carbohydrates (Tinh bột):</strong> Là nguồn chính của năng
            lượng cho cơ thể. Tỉ lệ phần trăm đề xuất: khoảng{" "}
            <strong>45-65%</strong> của tổng lượng calo tiêu thụ hàng ngày.
          </p>

          <p>
            <strong>Fats (Chất béo):</strong> Cung cấp năng lượng dự trữ cho cơ
            thể và hỗ trợ hấp thụ vitamin. Tỉ lệ phần trăm đề xuất: khoảng{" "}
            <strong>20-35%</strong> của tổng lượng calo tiêu thụ hàng ngày.
          </p>

          <p>
            <strong>Vitamins và Minerals (Vitamin và Khoáng chất):</strong> Đóng
            vai trò quan trọng trong nhiều quá trình cơ bản của cơ thể. Không có tỉ lệ phần
            trăm cụ thể nhưng cần đảm bảo cung cấp đủ các loại vitamin và khoáng
            chất.
          </p>
        </div>
        <h3>Tác hại của việc tiêu thụ quá nhiều chất dinh dưỡng</h3>
        <div className="dietMeal">
          <p>
            <strong>1. Protein (Đạm)</strong> Quá nhiều protein có thể gây căng
            thẳng cho thận và gan, và cũng có thể dẫn đến tăng cân hoặc vấn đề
            tiêu hóa.
          </p>

          <p>
            <strong>2. Carbohydrates (Tinh bột)</strong> Tiêu thụ quá nhiều
            carbohydrate có thể dẫn đến tăng cân, tăng mức đường trong máu và
            nguy cơ mắc bệnh tiểu đường.
          </p>

          <p>
            <strong>3. Fat (Chất béo)</strong> Quá nhiều chất béo có thể dẫn đến
            tăng cân, tăng mỡ trong máu, và tăng nguy cơ mắc bệnh tim mạch.
          </p>
          <p>
            <strong>4. Vitamins và Minerals (Vitamin và Khoáng chất)</strong>
            Quá mức hoặc không cân đối có thể gây ra các vấn đề như nguy cơ dị
            ứng, vấn đề tiêu hóa, hoặc nguy cơ thiếu hụt chất dinh dưỡng khác.
          </p>
          <img src={process.env.PUBLIC_URL + '/img/life1.jpg'} />
        </div>
        <br></br>
        <h2>Chế độ sinh hoạt hợp lý</h2>
        <br></br>
        <div className="living">
        <img src={process.env.PUBLIC_URL + '/img/life3.jpg'} />
          <p>
            <h4>1. Ăn uống cân đối và đa dạng</h4>
            Bao gồm đủ các nhóm thực phẩm: rau củ, hoa quả, ngũ cốc nguyên hạt,
            protein từ thịt, cá, đậu nành và chất béo lành mạnh như dầu olive.
          </p>
          <p>
            <h4>2. Vận động đều đặn</h4>
            Tập thể dục ít nhất 30 phút mỗi ngày, bao gồm cả cardio, tập luyện
            sức mạnh và tập thể dục linh hoạt.
          </p>

          <p>
            <h4>3. Giữ cân nặng ổn định</h4>
            Theo dõi cân nặng và duy trì trong khoảng lượng cân lí tưởng cho cơ
            thể.
          </p>
          <p>
            <h4>4. Quản lý căng thẳng</h4>
            Tìm phương pháp giảm căng thẳng như thiền, yoga, hoặc tập trung vào
            hoạt động giải trí yêu thích để giúp giảm căng thẳng hàng ngày.
          </p>
          <p>
            <h4>5. Quản lý giấc ngủ</h4>
            Giấc ngủ đóng vai trò rất quan trọng đối với sức khỏe, giấc ngủ ban
            đêm là lúc các cơ quan nội tạng thực hiện thoạt động đào thải.
          </p>
        </div>
      </div>
      {/* ======== LIFE ======= */}
      {/* ========= WORKOUT ======== */}
      <div className="workout">
        <h1 id="workoutid">Tập luyện</h1>
        <h2>Các bài tập phổ biến tại nhà</h2>
        <h3>Push-up (Hít đất)</h3>
        <div className="exer">
        <img src={process.env.PUBLIC_URL + '/img/workout1.jpg'} />
          <div className="detail">
            <p>
              <strong>Cơ ngực (pectorals):</strong> Push-up là bài tập chính để
              phát triển cơ ngực. Khi bạn thực hiện push-up, cơ ngực là nhóm cơ
              chính để nâng và hạ cơ thể.
            </p>
            <p>
              <strong>Cơ vai (deltoids):</strong> Cơ vai đóng vai trò phụ trợ
              trong quá trình nâng và hạ cơ thể trong push-up.
            </p>
            <p>
              <strong>Cơ tay trước (triceps):</strong> Khi bạn đẩy cơ thể lên,
              cơ triceps hoạt động chủ yếu để mở rộng khu vực cánh tay.
            </p>
            <p>
              <strong>Cơ lưng (back muscles):</strong> Push-up cũng kích hoạt
              một phần cơ lưng, đặc biệt là cơ lưng trên.
            </p>
            <p>
              <strong>Tiêu thụ calo:</strong> Số calo tiêu thụ khi thực hiện
              push-up phụ thuộc vào nhiều yếu tố như cân nặng, tần suất và cường
              độ của bài tập. Tuy nhiên, trong một buổi tập tập luyện tích cực,
              push-up có thể đốt cháy từ 3 đến 6 calo mỗi phút cho mỗi cân
              kilogram của cơ thể.
            </p>
            <p>
              <strong>Lợi ích của bài tập push-up:</strong>
              <ul>
                <li>Phát triển sức mạnh cơ bắp</li>
                <li>Tăng cường sức bền</li>
                <li>Cải thiện sự ổn định cơ bắp</li>
                <li>Tăng cường sự linh hoạt của cơ bắp</li>
              </ul>
            </p>
          </div>
        </div>
        <br></br>
        <h3>Squat (Bật nhảy)</h3>
        <div class="exer">
        <img src={process.env.PUBLIC_URL + '/img/workout2.jpg'} />
          <div class="detail">
            <p>
              <strong>Squat:</strong> Squat là bài tập tăng cường sức mạnh và sự
              linh hoạt của chân, hông và cơ đùi.
            </p>
            <p>
              <strong>Tác động lên nhóm cơ:</strong>
              <ul>
                <li>Cơ đùi (quadriceps)</li>
                <li>Cơ hông (glutes)</li>
                <li>Cơ bắp chéo (hamstrings)</li>
              </ul>
            </p>
            <p>
              <strong>Tiêu thụ calo:</strong> Squat có thể đốt cháy từ 5-10 calo
              mỗi phút tùy thuộc vào cân nặng và cường độ của bài tập.
            </p>
            <p>
              <strong>Lợi ích của squat:</strong>
              <ul>
                <li>Phát triển sức mạnh cơ bắp chân và hông</li>
                <li>Tăng cường sự linh hoạt của cơ đùi và cơ hông</li>
                <li>Giúp cải thiện sự ổn định và cân bằng cơ thể</li>
              </ul>
            </p>
          </div>
        </div>
        <br></br>
        <h3>Plank</h3>
        <div class="exer">
        <img src={process.env.PUBLIC_URL + '/img/workout3.jpg'} />
          <div class="detail">
            <p>
              <strong>Plank:</strong> Plank là bài tập cơ bản nhưng hiệu quả,
              giúp tăng cường sức mạnh của cơ lưng, cơ bụng và cơ cánh tay.
            </p>
            <p>
              <strong>Tác động lên nhóm cơ:</strong>
              <ul>
                <li>Cơ cánh tay (triceps)</li>
                <li>Cơ bụng (abdominals)</li>
                <li>Cơ lưng (back muscles)</li>
                <li>Cơ vai (deltoids)</li>
              </ul>
            </p>
            <p>
              <strong>Tiêu thụ calo:</strong> Plank có thể đốt cháy từ 2-5 calo
              mỗi phút tùy thuộc vào cân nặng và cường độ của bài tập.
            </p>
            <p>
              <strong>Lợi ích của plank:</strong>
              <ul>
                <li>
                  Tăng cường sức mạnh và sự ổn định của cơ bụng và cơ lưng
                </li>
                <li>Giúp cải thiện tư thế và cân bằng cơ thể</li>
                <li>Giúp giảm đau lưng và cải thiện sự linh hoạt</li>
              </ul>
            </p>
          </div>
        </div>
        <br></br>
        <h3>Bicycle Crunch</h3>
        <div class="exer">
        <img src={process.env.PUBLIC_URL + '/img/workout4.jpg'} />
          <div class="detail">
            <p>
              <strong>Bicycle Crunch:</strong> Bicycle Crunch là một trong những
              bài tập tác động mạnh mẽ vào cơ bụng, giúp tăng cường sức mạnh và
              sự linh hoạt.
            </p>
            <p>
              <strong>Tác động lên nhóm cơ:</strong>
              <ul>
                <li>Cơ bụng (abdominals)</li>
                <li>Cơ cánh tay (triceps)</li>
                <li>Cơ đùi (quadriceps)</li>
                <li>Cơ hông (glutes)</li>
              </ul>
            </p>
            <p>
              <strong>Tiêu thụ calo:</strong> Bicycle Crunch có thể đốt cháy từ
              5-8 calo mỗi phút tùy thuộc vào cân nặng và cường độ của bài tập.
            </p>
            <p>
              <strong>Lợi ích của Bicycle Crunch:</strong>
              <ul>
                <li>
                  Tăng cường sức mạnh và sự linh hoạt của cơ bụng và cơ đùi
                </li>
                <li>Giúp cải thiện sự ổn định và cân bằng cơ thể</li>
                <li>Giúp giảm mỡ bụng và tăng cường sự đốt cháy calo</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      {/* ========= WORKOUT ======== */}
      </div>
    </>
  );
}