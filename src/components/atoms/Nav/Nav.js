import "../../style/css/main.css";

const Nav = () => {
  return (
    <div class="navigation--container">
      <div class="navigation--wrapper">
        <div class="navigation--item">
          <a href="/" class="selected">
            경매 물품
          </a>{" "}
          <a href="/Topic/">공지사항</a>
        </div>
      </div>
    </div>
  );
};
export default Nav;
