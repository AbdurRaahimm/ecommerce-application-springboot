// import React from 'react'

const MiddleHeader = () => {
  return (
    <section>
        <div className="mainHeader">
            <div className="container">
                <div className="mainHeaderContent">
                    <div className="headerLogoCol">
                        <ul className="toggleIconWrap">
                            <li className="toggleIconItem"></li>
                            <li className="toggleIconItem"></li>
                            <li className="toggleIconItem"></li>
                        </ul>
                        <a href="index.html" className="headerLogo">s commerce</a>
                    </div>
                    <div className="headerRightCol">
                        <div className="searchCol">
                            <div className="searchWrapper">
                                <label className="searchInner">
                                    <input type="text" className="formControl" placeholder="Searching..." />
                                    <span className="searchIcon"><i className="fas fa-search"></i></span>
                                </label>
                                <div className="searchBtnWrapper">
                                    <button className="btn searchBtn">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="headerCartCol">
                            <button className="headerCartBtn">
                                <i className="fas fa-shopping-cart"></i> my cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MiddleHeader