const BottomInfo = () => {

  const companyDes = `꽃피는고래는 스마트팜 보육 사업 1기 수료생들과 농부의 꿈을 가진 청년들이 모여 최초로 사업화에 성공해 만든 스마트팜 오이 농장입니다! 스마트팜을 배경으로 농업 분야에서 괴물 같은 농부들이 되기 위해 각 분야의 역량이 뛰어난 청년들이 모였습니다.`;
  
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
            <p>012-1234-5678</p>
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