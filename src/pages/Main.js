import TopNavigation from "../components/TopNavigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../css/Main.css';
import { useEffect, useState } from "react";
import BottomInfo from "../components/BottomInfo";

const Main = () => {

  const [slideImgList, setSlideImgList] = useState([])
  const imgSrcList = ['NEW_8134', 'NEW_8007', 'NEW_4238', 'SU1_9714']

  const productDes = "꽃피는 고래는 \n 유럽형 상추를 \n 수경재배하고 있습니다."

  useEffect(() => {
    const tempImgList = imgSrcList.map((item, idx) => (
      <SwiperSlide key={idx} className="img-slide">
        {/* <img
          src={process.env.PUBLIC_URL + 'assets/NEW_8134.jpg'}
          alt="대표이미지"
          onError={handleImgError}
        /> */}
        <img src={process.env.PUBLIC_URL + `assets/${item}.jpg`} />
      </SwiperSlide>
    ));
    setSlideImgList(tempImgList);
  }, [])

  

  return (
    <div className="main-page">
      <TopNavigation />
      <div className="section1">
        <div>{`안녕하세요. 꽃피는 고래 입니다!`}</div>
        <div className="text-hello">{`HELLO!`}</div>
        <img src={process.env.PUBLIC_URL + 'Logo.jpg'} />
      </div>
      <div className="section2">
        <div>
          <p className="tel-box">
            {`꽃피는 고래에 대해서 알고 싶으시다면? \n010-1234-5678`}
          </p>
          <p className="text-box">
            꽃피는 고래를 소개합니다.
          </p>
          <div className="cate-link">
            <div>
              <div className="link-button">FARMER</div>
              <ul>
                <li>Smart farm</li>
                <li>청년 농부</li>
                <li>보령</li>
              </ul>
            </div>
            <div>
              <div className="link-button">CUCUMBER</div>
              <ul>
                <li>미니오이</li>
                <li>백다다기</li>
                <li>취청</li>
              </ul>
            </div>
            <div>
              <div className="link-button">SERVICES</div>
              <ul>
                <li>스마트팜 농장 체험/교육</li>
                <li>스마트 농부 아카데미</li>
              </ul>
            </div>
            <div>
              <div className="link-button">PRODUCTS</div>
              <ul>
                <li>GREEN MONSTERS</li>
                <li>캐릭터 상품</li>
                <li>오이 상품</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <span class="material-symbols-outlined">arrow_back_ios</span>
        <div className="text-box">
          <h2>안녕하세요. 꽃피는고래 입니다!</h2>
          <p>{`​그린몬스터즈는 스마트팜 보육 사업 1기 수료생들과 농부의 꿈을 가진 청년들이 모여 최초로 사업화에 성공해 만든 스마트팜 오이 농장입니다! 스마트팜을 배경으로 농업 분야에서 괴물 같은 농부들이 되기 위해 각 분야의 역량이 뛰어난 청년들이 모였습니다.`}</p>
        </div>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </div>
      <div className="section4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={5} slidesPerView={1.5} //간격, 보여질 컨텐츠 수
          slidesPerView={1} //간격, 보여질 컨텐츠 수
          breakpoints={{
            486: {
              slidesPerView: 1.5
            }
          }}
          scrollbar={{ draggable: true }} className="dog-swiper-list" //드래그
        >
          {slideImgList} 
        </Swiper>
        {/* <img src={process.env.PUBLIC_URL + 'assets/NEW_8134.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/NEW_8007.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/NEW_4238.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/SU1_9714.jpg'} /> */}
      </div>
      <div className="section5">
        <div className="product-part">
          <p className="product-title">Whale's VEGETABLE!</p>
          <p className="product-des">{productDes}</p>
          <div className="link-button">재배작물 보러가기</div>
        </div>
        <img src={process.env.PUBLIC_URL + 'Logo.jpg'} />
      </div>
      <BottomInfo />
    </div>
  )
}

export default Main;