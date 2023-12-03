import BottomInfo from "../components/BottomInfo";
import TopNavigation from "../components/TopNavigation";

const Vege = () => {

  const part2 = "분무수경재배 방식을 활용한 \n 저탄소 작물재배를 통해 \n 발달장애인 그린에이터와 함께 \n 씨앗을 심고 꿈을 심는 회사입니다"

  const vegeDesTitle = "아삭하고 고소한 유러피안 채소"
  const vegeDes1 = "기존 채소의 씁쓸한 맛은 잊어주세요!"
  const vegeDes2 = "유러피안 채소만의 부드러우면서도 아삭한 식감, \n 고소한 맛과 달콤한 맛의 균형있는 조화"
  const vegeDes3 = "그린하우스 재배로 폭염과 한파가 오더라도 \n 언제나 고품질의 신선한 채소를 맛 볼 수 있어요."
  const vegeDes4 = "버터헤드, 로메인, 멀티리프, 롤로로사, 바타비아로 \n 구성된 신선한 꽃고래 채소 꾸러미 상품"

  const vege1 = "롤로로사&비욘다는 국화과에 속하는 상추로 원산지는 이탈리아예요. \n 로사는 이탈리어로 '장미처럼 붉다'는 의미로 적갈색을 띠며 곱슬곱슬한 모양이에요. \n 이에 반해 비욘다는 초록색을 띠는 상추에요. \n 색이 고와 회나 여러가지 요리에 장식용으로 사용해도 좋아요."
  const vege2 = "도톰한 잎과 버터처럼 고소한 풍미를 지닌 버터헤드 \n 자라는 모습이 꼭 꽃이 피어나는 모습과 닮아서 보기만 해도 행복하답니다! \n 상추 특유의 쓴맛이 전혀 없고, 부드럽고 달달해요. \n 불면증 개선에도 도움이 됩니다. \n 햄버거용, 믹스 샐러드용, 쌈용으로 활용하면 좋아요."
  const vege3 = "스페인 북부에서 온 바타비아는 잎 모양이 동글동글하며 아삭한 식감이 특징이에요. \n 다량의 비타민을 함유해서 신체에 중요한 항산화제 공급원이 돼요. \n 저칼로리지만 밀도가 높아 포만감을 느끼는데 도움을 줍니다."
  const vege4 = "이자벨이라고도 불리는 멀티리프는 치커리를 닮은 잎이 특징이에요. \n 하지만 치커리같이 쓴맛은 거의 없어요. \n 양상추와 비슷한 단맛을 내며 아삭한 식감을 가지고 있어요. \n 식이섬유가 풍부하여 조금만 먹어도 포만감을 주기 때문에 다이어트에도 효과적이에요. \n 잎 형태가 샐러드와도 참 잘 어울린답니다."
  const vege5 = "로마인들이 즐겨먹던 상추라 붙여진 이름으로 코스라고도 불려요. \n 잎의 두께도 두꺼워 아삭한 식감이 뛰어나요. \n 부드럽고 고소한 맛까지 더해 다양한 요리의 식재료로 많은 사랑을 받고 있답니다. \n 미니로메인, 적로메인 등 다양한 종류가 있어요."

  return (
    <div className="vege-page">
      <TopNavigation />
      <div className="section1">
        <div className="vege-des">
          <p>
            <span class="material-symbols-outlined">arrow_back_ios</span>
            {vegeDesTitle}
            <span class="material-symbols-outlined">arrow_forward_ios</span>
          </p>
          <ul>
            <li>{vegeDes1}</li>
            <li>{vegeDes2}</li>
            <li>{vegeDes3}</li>
            <li>{vegeDes4}</li>
          </ul>
        </div>
        <img src={process.env.PUBLIC_URL + 'assets/vege1.jpg'} alt="유러피안 채소" /> 
      </div>
      <div className="section2">
        <div className="section2-title">각 채소 설명</div>
        <div className="des-box">
          <div className="vege-des">
            <img src={process.env.PUBLIC_URL + 'assets/vege5.jpg'} alt="채소1" width="100px" /> 
            <p><span>롤로로사&비욘다</span>{vege1}</p>
          </div>
          <div className="vege-des">
            <p><span>버터헤드</span>{vege2}</p>
            <img src={process.env.PUBLIC_URL + 'assets/vege2.jpg'} alt="채소2" width="100px" /> 
          </div>  
          <div className="vege-des">
            <img src={process.env.PUBLIC_URL + 'assets/vege6.jpg'} alt="채소3" width="100px" /> 
            <p><span>바타비아</span>{vege3}</p>    
          </div>
          <div className="vege-des">
            <p><span>멀티리프</span>{vege4}</p>
            <img src={process.env.PUBLIC_URL + 'assets/vege4.jpg'} alt="채소4" width="100px" /> 
          </div>
          <div className="vege-des">
            <img src={process.env.PUBLIC_URL + 'assets/vege3.jpg'} alt="채소3" width="100px" /> 
            <p><span>로메인</span>{vege5}</p>
          </div>
          <div className="vege-des">
            <p><span>오크리프</span>{vege4}</p>
            <img src={process.env.PUBLIC_URL + 'assets/vege7.jpg'} alt="채소4" width="100px" /> 
          </div>
        </div>
      </div>
      <div>
        <video width="30%" autoplay="true" loop muted>
          <source src={process.env.PUBLIC_URL + 'assets/eat_video2.mp4'} type="video/mp4" />
        </video>
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + 'assets/how_to_eat.png'} />
      </div>
      <BottomInfo />
    </div>
  )
}

export default Vege;