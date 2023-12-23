import { Container, Image } from "react-bootstrap";
import "../../CssStyling/homePage.css";
// import {
//   facebook,
//   instagram,
//   printerest,
//   reddit,
//   twitter,
//   youtube,
// } from "../../icons/svgIcons";
import { NavigationTabSocialMedia } from "../../CommonFunctionalities/NavigationTabSocialMedia";

export function Navigation() {
  return (
    <Container className="socialMediaLinks">
      {/* <div className="d-flex justify-content-between p-2">
        <span>Welcome to Clicon online eCommerce store</span>

        <div className="socialMediaComponents d-flex gap-2">
          <div className="socialMediaLinks--followUs d-flex gap-2 ">
            <span>Follows Us:</span>
            <Image src={twitter} alt="" />
            <Image src={facebook} alt="" />
            <Image src={printerest} alt="" />
            <Image src={reddit} alt="" />
            <Image src={youtube} alt="" />
            <Image src={instagram} alt="" />
          </div>

          <div class="blank_line"></div>

          <div className="lang_Curr d-flex gap-2">
            <select name="Language">
              <option value="Eng">Eng</option>
            </select>
            <select name="Currency">
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div> */}
      <NavigationTabSocialMedia />
      <div>
        <section className="navigation d-flex justify-content-between p-1">
          <div className="navigation--companyIcon d-flex">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
                fill="white"
              />
            </svg>
            <h2>CLICON</h2>
          </div>

          <div class="navigation--searchTab align-self-center">
            <form>
              <input type="search" placeholder="Search for anything..." />
              <button type="submit">Search</button>
            </form>
          </div>
          <div class="navigation__widgets d-flex gap-2 align-self-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 29 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2875 6H27.7125L24.4125 17.55C24.2948 17.9692 24.0426 18.3381 23.6948 18.6001C23.3471 18.862 22.9229 19.0025 22.4875 19H10.5125C10.0771 19.0025 9.65293 18.862 9.30515 18.6001C8.95738 18.3381 8.70524 17.9692 8.5875 17.55L4.0625 1.725C4.0027 1.51594 3.8764 1.33207 3.70271 1.20125C3.52903 1.07042 3.31744 0.999771 3.1 1H1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99735 4.02062 8.54112 4.97328 7.37907C5.92593 6.21701 7.25178 5.42091 8.72525 5.12622C10.1987 4.83153 11.7288 5.05645 13.0551 5.76271C14.3814 6.46897 15.4221 7.61294 16 9C16.5779 7.61294 17.6186 6.46897 18.9449 5.76271C20.2712 5.05645 21.8013 4.83153 23.2748 5.12622C24.7482 5.42091 26.0741 6.21701 27.0267 7.37907C27.9794 8.54112 28.5 9.99735 28.5 11.5C28.5 20 16 27 16 27Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </section>
      </div>
    </Container>
  );
}
