import mainStyles from "./Main.module.css";
import styles from "../Card.module.css";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; //좌우 화살표
import "swiper/css/pagination"; //하단 이동 버튼
import "swiper/css/autoplay"; //자동 넘기기
//contect
import { useContext } from "react";
import { APIContext } from "../../context/APIContext";


function Top100() {

  const API = useContext(APIContext);

  const TOP100 = API.filter((item) => item.rank !== "no info");

  const randomArray = [];
  const reallOnlyArray = [];


  function Random() {
    let n = 0;
    // 랜덤으로 10개 추출
    while (n < 10) {
      const randomNum = Math.floor(Math.random() * 100);
      //랜덤칵테일 배열에 넣기
      const random100 = TOP100[randomNum];
      // console.log(random100);
      randomArray.push(random100);
      n = n + 1;
    }
    RemoveSame()
  }
  // 중복제거 후 5개만 배열에 추가
  function RemoveSame() {
    const removeDuplicate = Array.from(new Set(randomArray));
    for (let i = 0; i < 5; i++) {
      reallOnlyArray.push(removeDuplicate[i])
    }
    // console.log(reallOnlyArray)
  }
  //랜덤함수 실행
  Random();

  const linkTop100 = 1;
  
  //버튼 클릭시 스크롤 맨 위로 향하게 하는 함수(onClick 안에 들어감)
  function scrollTOP(){
      window.scrollTo(0,0)
  }

  return (
    <div className={mainStyles.Top100}>
      <h1>
        World's Top 100
        <p>Cocktails</p>
      </h1>

      {/* <Random /> */}

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        // 슬라이드 간 여백
        // spaceBetween={100}  
        // 한 번에 보여지는 개수
        slidesPerView={3}
        centeredSlides={"true"}
        grabCursor={"true"}
        
        
        // autoplay={{
        //     delay: 2000,
        //     disableOnInteraction: false,
        // }}
        navigation={true}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="swiper-container">
          {reallOnlyArray[0] != undefined ? (
            reallOnlyArray.map((item) => (
              <SwiperSlide key={item.name} className={mainStyles.slide}>
                <Link to={`/desc:${item._id.$oid}`}>
                  <img src={item.img} />
                </Link>
              </SwiperSlide>
            ))
          ) : (
            <div><h2>WE'RE GOING TO SHOW"</h2>"</div>
          )}
        </div>
      </Swiper>

      <Link to={`/find:${linkTop100}`} onClick={scrollTOP}>
        <div className={mainStyles.more}>
          <span>+ Top 100 Cocktails 더보기</span>
        </div>
      </Link>

    </div>
  );
}
export default Top100;
