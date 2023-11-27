const BottomInfo = () => {

  const companyDes = `저희 농업회사법인 주식회사 꽃피는 고래는 발달장애인과 함께 수경재배방식으로 유러피안 채소를 재배하는 농원입니다. 자연까지 생각하는 기업, 꽃피는 그린하우스에서 정성으로 키워내 여러분의 문 앞에 건강함과 신선함을 전하겠습니다.`;
  
  return (
    <div className="bottom-info">
      <div className="info">
        <div className="company-des">
          <h1>OUR COMPANY</h1>
          <p>{companyDes}</p>
        </div>
        <div className="company-info">
          <div className="sns-link">
            <h2>Farm Office</h2>
            <span class="material-symbols-outlined">mail</span>
            <span class="material-symbols-outlined">mail</span>
            <span class="material-symbols-outlined">mail</span>
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div className="address">
            <p>울산광역시 울주군</p>
            <p style={{fontWeight: "bolder"}}>꽃피는고래</p>
          </div>
          <div className="ceo">
            <p>농업회사법인 꽃피는고래 주식회사</p>
            <p style={{fontWeight: "bolder"}}>대표 하하하</p>
          </div>
          <div className="contact">
            <p>052-244-0228</p>
            <p>blossomWhale@naver.com</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span class="material-symbols-outlined">copyright</span>
        <p>2023 by Blossom-Whale</p>
      </div>
    </div>
  )
}

export default BottomInfo;