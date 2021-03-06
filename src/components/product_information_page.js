import React, {Component} from 'react'
import Image1 from '../assests/images/homePageImage.jpeg'
import '../assests/css/product_information_page.css'
import Header from './header';
import Cookies from 'js-cookie';


export default class ProductInformationPage extends Component {
    componentDidMount = () => {
        Cookies.remove("result_page")
    }
  render () {
    return (
        <div className="productInfoContainer">
        <div className="header-div">
          <Header />
        </div>
            <div className="mainContainer">
                <div className="productContainer">
                    <div className="productTitle">
                        <span className="title">Product1</span>
                    </div>
                    <div>
                        <img className="product1Image" src={Image1} alt="product 1"/>
                    </div>
                    <div className="productDescription">
                        <span className="description">
                            Description1
                        </span>
                    </div>
                </div>

                <div className="productContainer">
                    <div className="productTitle">
                        <span className="title">Product2</span>
                    </div>
                    <div>
                        <img className="product2Image" src={Image1} alt="product 2"/>
                    </div>
                    <div className="productDescription">
                        <span className="description">
                            Description2
                        </span>
                    </div>
                </div>

                <div className="productContainer">
                    <div className="productTitle">
                        <span className="title">Product3</span>
                    </div>
                    <div>
                        <img className="product3Image" src={Image1} alt="product 3"/>
                    </div>
                    <div className="productDescription">
                        <span className="description">
                            Description3
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
