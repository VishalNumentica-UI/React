import { Container, Image, Row, Col } from "react-bootstrap";
import BrowseProductNavigator from "../../CommonFunctionalities/BrowseProductNavigator.js";
import { playstation1 } from "../../resources/images.js";
import "../../CssStyling/homePage.css";
import { alexa } from "../../resources/images.js";
import { ProductCard } from "../../CommonFunctionalities/CardCreation.js";
import { OfferTag } from "../../CommonFunctionalities/OfferTag.js";
export function BestDeals() {
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
        <div>
          <section className="bestIdeal d-flex justify-content-between mt-5">
            <div className="bestIdeal__title d-flex justify-content-between ">
              <h4>Best deals</h4>
              <p className="p-1">Deals ends in</p>

              <div class="timer p-1 align-item-center mt-1">
                <span className="hour">00</span>
                <span>:</span>
                <span className="minute">00</span>
                <span>:</span>
                <span className="second">00</span>
              </div>
            </div>
            <BrowseProductNavigator />
          </section>
          <Row>
            <Col xl={3} lg={4} className="exploreProduct position-relative">
              <OfferTag />
              <div class="offersPercentage--image">
                <Image src={playstation1} alt="" fluid />
              </div>
              <div class="customerRating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(52,677)</span>
              </div>

              <h5>
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Version
              </h5>

              <span class="highlight_color">
                <span class="highlight">$865.99</span> $442.12
              </span>

              <p>
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>

              <div class="addToCart--button d-flex justify-content-center  align-self-center">
                <i class="fa-regular fa-heart btn--add_cart align-self-center"></i>
                <div class="btn--cart d-flex">
                  <i class="fa-solid fa-cart-shopping align-self-center"></i>
                  <span>ADD TO CART</span>
                </div>
                <i class="fa-regular fa-eye btn--add_cart align-self-center"></i>
              </div>
            </Col>
            <Col xl={9} lg={8} className="df">
              <div className="ProductItems">
                {productDetail.map((item) => {
                  return <ProductCard props={item} />;
                })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
