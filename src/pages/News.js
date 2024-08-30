import TopNavigation from "../components/TopNavigation";
import BottomInfo from "../components/BottomInfo";

const News = () => {

  const point1 = "꽃피는고래는 그린하우스에서 재배합니다. \n 일반적인 온실 형태에 스마트 제어 시스템이 결합되어 있기 때문에 \n 체계적으로 작물을 관리할 수 있습니다."
  const point2 = "그린하우스는 자연광으로 길러 \n 식물 공장에서 기른 채소보다 색이 선명하고 맛도 깊습니다. \n 물의 사용량 또한 토경재배 방식보다 현저히 적고, \n 에너지도 적게 사용하기 때문에 친환경적 재배 농법이라고 할 수 있습니다."
  const point3 = "사용한 물과 비료를 회수해 재사용함으로써 \n 자원을 절약하고 하천의 오염을 방지하는 순환식 분무수경재배 방식을 도입했습니다. \n 이로써 농수 사용량도 훨씬 적답니다."
  
  return (
    <div className="news-page">
      <TopNavigation />
      <div className="section">
        <div className="title"><span>소식 1</span>지역농가 살리는 로컬푸드 판로개척 관련 뉴스</div>
        <div className="desc"><a href="https://www.news1.kr/local/ulsan/5523005">울산 남구, '로컬푸드 판로개척' 실무자 회의 개최</a></div>
        <div className="desc"><a href="https://www.nongmin.com/article/20240820500210">울산 범서농협·울산 남구·노인복지기관 5곳 로컬푸드 판로개척 업무협약 맺어</a></div>
      </div>
      <div className="section">
        <div className="title"><span>소식 2</span>어미 고래처럼 발달장애인 사회 첫걸음 도와(울산경제뉴스)</div>
        <img src={process.env.PUBLIC_URL + `assets/news_240719.jpg`} />
      </div>
      <div className="section">
        <div className="title"><span>소식 3</span>농협 조합원 인터뷰</div>
        {/* <div className="img-box">
          <img src={process.env.PUBLIC_URL + `assets/interview1.png`} />
          <img src={process.env.PUBLIC_URL + `assets/interview2.png`} />
        </div> */}
        <img src={process.env.PUBLIC_URL + `assets/interview1.png`} />
        <img src={process.env.PUBLIC_URL + `assets/interview2.png`} />
      </div>
      <BottomInfo />
    </div>
  )
}

export default News;