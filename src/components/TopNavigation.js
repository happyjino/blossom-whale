import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {

  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  }

  const goCompany = () => {
    navigate('/company')
  }

  const goSystem = () => {
    navigate('/system')
  }

  const goVege = () => {
    navigate('/vege')
  }

  const goProduct = () => {
    navigate('/product')
  }

  const goNotice = () => {
    navigate('/notice')
  }

  const goNews = () => {
    navigate('/news')
  }

  const [menuOn, setMenuOn] = useState(false);
  
  const openMenu = () => {
    setMenuOn(isOpen => !isOpen);
  };

  return (
    <div className="top-nav">
      <div className="first-line">
        <div className="logo-box">
          <a href="https://smartstore.naver.com/bloomong_whale/products/9635647018?NaPm=ct%3Dlql3u5f4%7Cci%3D5aa65cef2c5f6bed132976137fbeb661b9a02990%7Ctr%3Dsls%7Csn%3D9692135%7Chk%3D929cc19a34f003626cc05e3f64bd93d1bbaae313"><span className="material-symbols-outlined">storefront</span></a>
          <a href="https://www.instagram.com/blooming.whale?igsh=OGQ5ZDc2ODk2ZA=="><span className="material-symbols-outlined">public</span></a>
          <a href="https://map.naver.com/p/search/%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EB%B2%94%EC%84%9C%EC%9D%8D%20%EB%93%B1%EB%84%98%EA%B8%B8%2069/address/14386293.6415101,4244845.7066515,%EC%9A%B8%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%9A%B8%EC%A3%BC%EA%B5%B0%20%EB%B2%94%EC%84%9C%EC%9D%8D%20%EB%93%B1%EB%84%98%EA%B8%B8%2069,new?c=16.15,0,0,0,dh&isCorrectAnswer=true"><span className="material-symbols-outlined">map</span></a>
        </div>
        <div className="tel-box">052-244-0228</div>
      </div>
      <div className="second-line">
        <div className="main-logo">
          <img onClick={goHome} src={process.env.PUBLIC_URL + 'Logo.jpg'} />
        </div>
        <div className="menu-list">
          <span className="material-symbols-outlined" onClick={openMenu}>menu</span>
          <div onClick={goHome}>HOME</div>
          <div onClick={goCompany}>회사 소개</div>
          <div onClick={goSystem}>시스템 소개</div>
          <div onClick={goVege}>채소 소개</div>
          <div onClick={goProduct}>판매 소개</div>
          {/* <div onClick={goNotice}>채용 공고</div> */}
          <div onClick={goNews}>새 소식</div>
        </div>
      </div>
      <div className={menuOn ? "mobile-menu show-menu" : "mobile-menu"}>
        <div onClick={goHome}>HOME</div>
        <div onClick={goCompany}>회사 소개</div>
        <div onClick={goSystem}>시스템 소개</div>
        <div onClick={goVege}>채소 소개</div>
        <div onClick={goProduct}>판매 소개</div>
        <div onClick={goNews}>새 소식</div>
        {/* <div onClick={goNotice}>채용 공고</div> */}
      </div>
    </div>
  )
}

export default TopNavigation;