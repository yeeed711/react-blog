import styled from "styled-components";
import ArrowTopImg from "../../assets/ArrowTop.svg";

const FooterStyle = styled.footer`
  background: var(--white-color);
  margin-top: 10rem;
  h2 {
    color: var(--gray-color);
  }
  .max-width {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 8rem;
    position: relative;
  }
`;

const TopBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6.4rem;
  height: 6.4rem;
  padding-top: 2.2rem;
  border: 0;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background: var(--main-color) url(${ArrowTopImg}) no-repeat 50% 0.4rem / 4rem;
  color: var(--white-color);
  text-align: center;
  font-weight: bold;
`;

function Footer() {
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <FooterStyle>
      <div className="max-width">
        <h2>©Weniv Corp.</h2>
        <TopBtn onClick={handleScrollTop}>TOP</TopBtn>
      </div>
    </FooterStyle>
  );
}

export default Footer;
