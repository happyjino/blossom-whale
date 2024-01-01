import BottomInfo from "../components/BottomInfo";
import TopNavigation from "../components/TopNavigation";

const Product = () => {
  
  const productDes = "버터헤드, 로메인, 멀티리프, 롤로로사&비욘다, 바타비아 중 \n 랜덤 3종 이상으로 구성해 보내드립니다."

  return (
    <div className="product-page">
      <TopNavigation />
      <div className="section">
        <img src={process.env.PUBLIC_URL + `assets/product1.jpg`} />
      </div>
      <div className="section">
        <div className="product-des-box">
          <div className="des-title">상 / 품 / 구 / 성</div>
          <img src={process.env.PUBLIC_URL + `assets/product2.jpg`} />
          <div className="product-des">
            {productDes}
          </div>
          <div className="basic-product">
            <span className="option">옵션1</span>
            <span className="product-name">모둠 유러피안 상추 500g</span>
            <span className="price">₩시세적용</span>
          </div>
          <div className="basic-product">
            <span className="option">옵션2</span>
            <span className="product-name">모둠 유러피안 상추 1kg</span>
            <span className="price">₩시세적용</span>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="month-product-title">정기 구독 서비스</div>
        <img src={process.env.PUBLIC_URL + `assets/month_product2.png`} />
      </div>
      <BottomInfo />
    </div>
  )
}

export default Product;