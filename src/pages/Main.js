import TopNavigation from "../components/TopNavigation";
import '../css/Main.css';

const Main = () => {

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
              <button>FARMER</button>
              <ul>
                <li>Smart farm</li>
                <li>청년 농부</li>
                <li>보령</li>
              </ul>
            </div>
            <div>
              <button>CUCUMBER</button>
              <ul>
                <li>미니오이</li>
                <li>백다다기</li>
                <li>취청</li>
              </ul>
            </div>
            <div>
              <button>SERVICES</button>
              <ul>
                <li>스마트팜 농장 체험/교육</li>
                <li>스마트 농부 아카데미</li>
              </ul>
            </div>
            <div>
              <button>PRODUCTS</button>
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
        <img src={process.env.PUBLIC_URL + 'assets/NEW_8134.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/NEW_8007.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/NEW_4238.jpg'} />
        <img src={process.env.PUBLIC_URL + 'assets/SU1_9714.jpg'} />
      </div>
    </div>
  )
}

export default Main;