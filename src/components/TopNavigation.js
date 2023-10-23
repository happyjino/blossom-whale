const TopNavigation = () => {

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
          <div>HOME</div>
          <div>ABOUT US</div>
          <div>SERVICES</div>
          <div>MORE</div>
        </div>
      </div>
    </div>
  )
}

export default TopNavigation;