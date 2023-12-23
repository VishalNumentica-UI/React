import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { gadgets } from "../../resources/images";
import NavigationTab from "../../CommonFunctionalities/NavigationTab";
import { ProductCard } from "../../CommonFunctionalities/CardCreation";
import { alexa } from "../../resources/images";

export function FeatureProduct() {
  const productDetail = [
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable Gbps,(18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
    {
      image: alexa,
      productDescription:
        "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      productPrice: "$250",
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <Col xl={3} lg={4}>
            <div className="discountTab">
              <span>COMPUTER & ACCESSORIES</span>
              <h3>32% Discount</h3>
              <span>For all ellectronics products</span>
              <p>
                Offers ends in:{" "}
                <span class="buttonEnabler">ENDS OF CHRISTMAS</span>
              </p>
              <button class="btn">
                SHOP NOW &nbsp;<i class="fa-solid fa-arrow-right"></i>
              </button>
              <Image src={gadgets} alt="" fluid />
            </div>
          </Col>

          <Col xl={9} lg={8} className="df">
            <NavigationTab />
            <div className="ProductItems gap-1">
              {productDetail.map((item) => {
                return <ProductCard props={item} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
