import BottomInfo from "../components/BottomInfo";
import TopNavigation from "../components/TopNavigation";

const System = () => {

  const point1 = "꽃피는고래는 그린하우스에서 재배합니다. \n 일반적인 온실 형태에 스마트 제어 시스템이 결합되어 있기 때문에 \n 체계적으로 작물을 관리할 수 있습니다."
  const point2 = "그린하우스는 자연광으로 길러 \n 식물 공장에서 기른 채소보다 색이 선명하고 맛도 깊습니다. \n 물의 사용량 또한 토경재배 방식보다 현저히 적고, \n 에너지도 적게 사용하기 때문에 친환경적 재배 농법이라고 할 수 있습니다."
  const point3 = "사용한 물과 비료를 회수해 재사용함으로써 \n 자원을 절약하고 하천의 오염을 방지하는 순환식 분무수경재배 방식을 도입했습니다. \n 이로써 농수 사용량도 훨씬 적답니다."

  return (
    <div className="system-page">
      <TopNavigation />
      <div className="section">
        <div className="title"><span>POINT1</span>스마트 제어 시스템을 겸비한 그린하우스</div>
        <img src={process.env.PUBLIC_URL + `assets/companyDesc2.png`} />
        <div className="desc">{point1}</div>
      </div>
      <div className="section">
        <div className="title"><span>POINT2</span>자연에서 자라 색과 맛이 선명한 채소</div>
        <img src={process.env.PUBLIC_URL + `assets/NEW_4267.jpg`} />
        <div className="desc">{point2}</div>
      </div>
      <div className="section">
        <div className="title"><span>POINT3</span>환경을 지키는 순환식 분무수경재배</div>
        <div className="img-box">
          <img src={process.env.PUBLIC_URL + `assets/NEW_4351.jpg`} />
          <img src={process.env.PUBLIC_URL + `assets/system.jpg`} />
        </div>
        <div className="desc">{point3}</div>
      </div>
      <BottomInfo />
    </div>
  )
}

export default System;