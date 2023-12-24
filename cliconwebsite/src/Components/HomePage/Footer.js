import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import {
  appleStoreIcon,
  cliconIcon,
  playStoreIcon,
} from "../../icons/svgIcons";

export function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col>
          <Image src={cliconIcon} alt="" />
          <div className="link--contact mt-4">
            <span>Customer Supports:</span>
            <p>(629) 555-0129</p>
            <span>4517 Washington Ave. Manchester, Kentucky 39495</span>
            <p>info@kinbo.com</p>
          </div>
        </Col>

        <Col>
          <div className="link--title">
            <p>TOP CATEGORY</p>
          </div>
          <div className="topCategory--products">
            <span>Computer & Laptop</span>
            <span>SmartPhone</span>
            <span>Headphone</span>
            <p>&mdash; Accessories</p>
            <span>Camera & Photo</span>
            <span>TV & Homes</span>
            <p>Browse All Product &#8594;</p>
          </div>
        </Col>

        <Col>
          <div className="link--title">
            <p>QUICK LINKS</p>
          </div>
          <div className="quicklinks--items d-flex flex-column justify-content-between">
            <span>Shop Product</span>
            <span>Shoping Cart</span>
            <span>Wishlist</span>
            <span>Compare</span>
            <span>Track Order</span>
            <span>Customer Help</span>
            <span>About Us</span>
          </div>
        </Col>

        <Col>
          <div className="link--title">
            <p>DOWNLOAD APP</p>
          </div>

          <div className="link--app d-flex">
            <div className="link--icon">
              <Image src={playStoreIcon} alt="" />
            </div>

            <div className="link--content ">
              <span>Get it now</span>
              <p>Google Play</p>
            </div>
          </div>

          <div className="link--app d-flex ">
            <div className="link--icon ">
              <Image src={appleStoreIcon} alt="" />
            </div>

            <div className="link--content">
              <span>Get it now</span>
              <p>App Store</p>
            </div>
          </div>
        </Col>

        <Col>
          <div className="link--title">
            <p>POPULAR TAG</p>
          </div>
          <div className="link--button p-2">
            <button>Game</button>
            <button>iPhone</button>
            <button>TV</button>
            <button>Asus Laptops</button>
            <button>Macbook</button>
            <button>SSD</button>
            <button>Graphics Card</button>
            <button>Power Bank </button>
            <button>Smart TV</button>
            <button>Speaker</button>
            <button>Tablet</button>
            <button>Microwave</button>
            <button>Samsung</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
