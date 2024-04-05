import TopNavigation from "../components/TopNavigation";

const Notice = () => {

  const mainSection1 = "안녕하세요? 농업회사법인 주식회사 꽃피는 고래입니다. \n하나금융그룹의 ESG경영 지원으로 운영하는 #하나파워온 \n혁신기업 인턴십사업에 저희 꽃고래도 함께하게 되었습니다. \n(주)꽃피는 고래 인턴을 모집합니다~~!! \n꽃고래와 함께 할 발달장애인 농부님은 \n하나파워온 홈페이지를 통해 지원서를 접수해주세요. \n본 게시글에 첨부한 링크로도 접속 가능합니다. \n"
  const mainSection2 = "1)지원접수기간: 2023.04.1(월)~04.24(수) \n2)근무기간:2023.05.01~07.31\n3)근무지: 울산광역시 울주군 범서읍 등넘길69(망성리13-1)\n4)급여: 주5일 8시간 기준 최대 220만원\n\n 5)상세업무내용: \n수경재배용 스펀지에 씨앗심기(파종), \n새싹모종을 배드에 옮겨심기(이식),\n농산물 수확 후 포장, 하우스 시설관리 등\n\n6)자격요건: 울산시내 거주하는 만18세~54세발달장애인(지적장애.자폐성장애로등록된자) \n7)복리후생: 중식제공, 인턴계약 시 4대보험 \n"
  const mainSection3 = "\n\n많은 관심 부탁드립니다~~~!!"
  return (
    <div className="notice-page">
      <TopNavigation />
      <div className="img-section">
        <img src={process.env.PUBLIC_URL + `assets/incruit_img.webp`} />
      </div>
      <div className="main-section">
        <p className="main1">
          {mainSection1}
        </p>
        <p className="main2">
          {mainSection2}
        </p>
        <p className="main3">
          <a href="https://www.hanapoweron.com/internship/test">채용 접수 링크</a>
          {mainSection3}
        </p>
      </div>
    </div>
  )
}

export default Notice;