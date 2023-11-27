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

  return (
    <div className="top-nav">
      <div className="first-line">
        <div className="logo-box">
          <span class="material-symbols-outlined">mail</span>
          <span class="material-symbols-outlined">mail</span>
          <span class="material-symbols-outlined">mail</span>
          <span class="material-symbols-outlined">mail</span>
        </div>
        <div className="tel-box">012-3345-6789</div>
      </div>
      <div className="second-line">
        <div className="main-logo">
          <img src={process.env.PUBLIC_URL + 'Logo.jpg'} />
        </div>
        <div className="menu-list">
          <span class="material-symbols-outlined">menu</span>
          <div onClick={goHome}>HOME</div>
          <div onClick={goCompany}>회사 소개</div>
          <div onClick={goSystem}>시스템 소개</div>
          <div onClick={goVege}>채소 소개</div>
          <div onClick={goProduct}>판매 소개</div>
        </div>
      </div>
    </div>
  )
}

export default TopNavigation;