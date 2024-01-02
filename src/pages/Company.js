import BottomInfo from "../components/BottomInfo";
import TopNavigation from "../components/TopNavigation";

const Company = () => {

  const companyDesc1 = `그거 아시나요? \n 어미 고래는 새끼 고래가 태어났을 때, \n 새끼 고래의 첫 숨을 도와주기 위해 고래를 수면 위로 올려 준답니다. \n 저희 꽃피는고래도 발달장애인들이 사회에 첫걸음을 떼는 것을 \n 어미 고래의 마음으로 도와주고자 탄생하게 되었답니다.`;
  const companyDesc2 = `저희 농업회사법인 주식회사 꽃피는고래는 \n 발달장애인과 함께 수경재배방식으로 유러피안 채소를 재배하는 농원입니다. \n 자연까지 생각하는 기업, 꽃피는 그린하우스에서 정성으로 키워내 \n 여러분의 문 앞에 건강함과 신선함을 전하겠습니다. \n\n\n AS SOW SEED, AS SOW DREAM, 씨앗을 심듯, 꿈을 심는다. \n 자연을 생각하는 그린하우스에서 유럽형 상추를 키우며 \n 사회의 일원이 되고자 하는 발달장애인의 꿈을 현실화시킵니다. \n 울산에 거주하는 발달장애인 꽃고래 농부가 정성으로 키워갑니다.`;
  const companyDesc3 = `장애인에게 최고의 복지는 직업이라는 말이 있습니다. \n 그 이유는 장애인 대부분이 학교 졸업 후에도 \n 가족에게 생활 전반을 의존하기 때문인데요. \n 직업을 갖게 되면 사회·경제적으로 스스로 자립하고 \n 당당한 사회구성원으로 우뚝 서서 자유를 누릴 수 있습니다.`;
  const subDesc1 = `현재 \n 국내 농업의 \n 가장 큰 문제는 \n 일손 부족`
  const subDesc2 = `발달장애 \n 청년에게 \n 최고의 복지는 \n 일자리`
  const subDesc3 = `일손 부족, \n 일자리 문제를 \n 동시에 해결!`

  return (
    <div className="company-page">
      <TopNavigation />
      <div className="section1 section">
        <img src={process.env.PUBLIC_URL + `assets/companyDesc22.png`} />
        <div className="desc1 desc">
          <div className="desc1-title">저희 꽃피는고래는요...</div>
          {companyDesc1}
        </div>
      </div>
      <div className="section2 section">
        <img src={process.env.PUBLIC_URL + `assets/companyDesc2.png`} />
        <div className="desc2 desc">
          {companyDesc2}
        </div>
      </div>
      <div className="section3 section">
        <div className="desc-img">
          <div className="sub-desc">{subDesc1}</div>
          <span class="material-symbols-outlined">add</span>
          <div className="sub-desc">{subDesc2}</div>
          <span class="material-symbols-outlined arrow">arrow_right_alt</span>
          <div className="sub-desc">{subDesc3}</div>
        </div>
        <div className="desc3 desc">
          {companyDesc3}
        </div>
      </div>
      <div className="section4 section">
        <div className="section4-title">회사 연혁</div>
        <ul className="company-history">
          <li>2023. 2. 28. 한국사회적기업진흥원 사회적기업가 육성사업 선정</li>
          <li>2023. 5. 19. 농업회사법인 주식회사 꽃피는고래 등기</li>
          <li>2023. 5. 25. 사업자 등록</li>
          <li>2023. 8. 29. 예비사회적 기업 지정</li>
          <li>2023. 10. 21. 여성기업 승인</li>
          <li>2023. 10. 31. GAP 획득</li>
        </ul>
      </div>
      <BottomInfo />
    </div>
  )
}

export default Company;