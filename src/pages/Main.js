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
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();

  const goCompany = () => {
    navigate('/company');
  }

  const goSystem = () => {
    navigate('/system');
  }

  const goVege = () => {
    navigate('/vege');
  }

  const goProduct = () => {
    navigate('/product');
  }


  const [slideImgList, setSlideImgList] = useState([])
  const imgSrcList = ['NEW_8134', 'NEW_8007', 'NEW_4238', 'SU1_9714']

  const productDes = "꽃피는고래는 \n 유럽형 상추를 \n 수경재배하고 있습니다."

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
        <div>{`안녕하세요. 꽃피는고래 입니다!`}</div>
        <div className="text-hello">{`HELLO!`}</div>
        <img src={process.env.PUBLIC_URL + 'Logo.jpg'} />
      </div>
      <div className="section2">
        <div>
          <p className="tel-box">
            {`꽃피는고래에 대해서 알고 싶으시다면? \n052-244-0228`}
          </p>
          <p className="text-box">
            꽃피는고래를 소개합니다.
          </p>
          <div className="cate-link">
            <div onClick={goCompany}>
              <div className="link-button">COMPANY</div>
              <ul>
                <li>회사 의미</li>
                <li>꽃피는고래</li>
                <li>회사 연혁</li>
              </ul>
            </div>
            <div onClick={goSystem}>
              <div className="link-button">SYSTEM</div>
              <ul>
                <li>그린하우스 재배</li>
                <li>친환경 재배 농법</li>
                <li>순환식 분무수경재배 방식</li>
              </ul>
            </div>
            <div onClick={goVege}>
              <div className="link-button">VEGETABLE</div>
              <ul>
                <li>채소 종류</li>
                <li>활용 방안</li>
              </ul>
            </div>
            <div onClick={goProduct}>
              <div className="link-button">PRODUCT</div>
              <ul>
                <li>기본 상품</li>
                <li>구독 상품</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <span class="material-symbols-outlined">arrow_back_ios</span>
        <div className="text-box">
          <h2>안녕하세요. 꽃피는고래 입니다!</h2>
          <p>{`저희 농업회사법인 주식회사 꽃피는고래는 발달장애인과 함께 수경재배방식으로 유러피안 채소를 재배하는 농원입니다. 자연까지 생각하는 기업, 꽃피는 그린하우스에서 정성으로 키워내 여러분의 문 앞에 건강함과 신선함을 전하겠습니다.`}</p>
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
          <div className="link-button" onClick={goVege}>재배작물 보러가기</div>
        </div>
        <img src={process.env.PUBLIC_URL + 'Logo.jpg'} />
      </div>
      <BottomInfo />
    </div>
  )
}

export default Main;