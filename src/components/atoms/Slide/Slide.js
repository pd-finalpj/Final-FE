import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 22px 0px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  margin: 0 12.5px;
  cursor: pointer;
  position: relativ e;
`;

const Row = styled.div`
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

const Img = styled.img`
  border-radius: 7px;
  margin: 0;
  margin: 0 12.5px;
  position: relative;
  cursor: pointer;
  transition: all 0.5s linear;
`;
const PrivewImg = styled.img`
  transition: all 1s linear;
  border-radius: 7px;
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  justify-content: center;
  border: none;
  font-size: 12px;
  height: 50px;
  border-radius: 60px;
  padding: 25px 10px;
  opacity: 0.5;
  z-index: 2;
  i {
    color: rgba(0, 0, 0, 0.5);
  }
  width: 50px;
`;

const LeftButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const RightButton = styled(Button)`
  transition: all 0.5s ease-in-out;
`;

const ImgWrapper = styled.div`
  position: relative;
`;
const ImgDes = styled.div`
  position: absolute;
  z-index: 5;
  width: 330px;
  height: 150px;
  border-radius: 5px;
  background-color: white;
  left: 30px;
  bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 27px 0px 20px 0px;
`;

const Title = styled.span`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 14px;
`;
const Des = styled.span`
  padding-left: 20px;
  padding-bottom: 24px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkSpan = styled.span`
  padding-left: 20px;
  padding-top: 16px;
  color: #3366ff;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  i {
    margin-left: 5px;
  }
`;

const MiniWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s ease-in-out;
`;

const MiniTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-top: 22px;
  margin-bottom: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
`;

const MiniDes = styled.span`
  font-size: 14px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const WantedImg = [
  "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
  "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
  "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
  "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
  "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
  "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
  "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
  "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
  "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
];

const wantedTitle = [
  "????????? ??????",
  "????????? ??????",
  "????????? ????????????...",
  "????????? ?????? ????????? -?????????-",
  "???????????? ???????????? ??????????",
  "????????? ?????? ?????? ??????!",
  "????????? ?????? ?????? ??????!?",
  "?????????????????? ?????????!",
  "UX ??????????????? ????????? ??????",
];

const wantedDes = [
  "???????????? ?????? ??? ?????? ????????????",
  "?????? ????????? ???????????????!",
  "????????? ?????? 2???????????? ??????????",
  "?????? ?????? ?????? ???????????? ?????????!",
  "OOO ???????????? ??? ???!",
  "Velog, ??? ?????? ??????????????? ?????????",
  "??????????????? ?????? ???????????? ????????????",
  "??????????????? ?????? ????????????",
  "????????? ????????? ????????? ?????????",
];

function Slider() {
  //????????????
  const slideRef = useRef(null);
  const [index, setIndex] = useState(0); // ???????????? ??????????????????.
  const [isSlide, setIsSlide] = useState(false); // ???????????? ????????? ??????????????????. ???????????? ?????? ????????? ????????? ?????? ????????? ?????? ??????
  const [x, setX] = useState(0); // css?????? ???????????? ??????????????? ????????? ???????????? x?????? ??????????????? ???????????????.

  //???????????? ???????????? ?????????
  const [isClick, setIsClick] = useState(false); // ???????????? ??????????????? ??????????????????.
  const [mouseDownClientX, setMouseDownClientX] = useState(0); // ???????????? ????????? ????????? x ????????? ???????????????
  const [mouseUpClientX, setMouseUpClientX] = useState(0); // ???????????? ??? ????????? x ????????? ???????????????.

  //????????? ?????????
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // ???????????? ???????????? ????????? ?????? ????????? ???????????? ???????????????.

  const increaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(-56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 8 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
    //setIndex((prevs) => (prev === 7 ? 0 : prev + 1));
  };
  const decreaseClick = async () => {
    if (isSlide) {
      return;
    }
    setX(+56);
    setIsSlide(true);
    await setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 8 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };
  const morePrevImg = index === 1 ? 8 : index === 0 ? 7 : index - 2;
  const PrevImg = index === 0 ? 8 : index - 1;
  const NextImg = index === 8 ? 0 : index + 1;
  const moreNextImg = index === 8 ? 1 : index === 7 ? 0 : index + 2;
  //console.log(slideRef.current);
  //console.log(index);

  const onMouseDown = (event) => {
    setIsClick(true);
    setMouseDownClientX(event.pageX);
    // console.log(slideRef);
  };
  const onMouseLeave = (event) => {
    setIsClick(false);
  };
  const onMouseUp = (event) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;
    // console.log(imgX);
    if (imgX < -100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      increaseClick();
    } else if (imgX > 100) {
      slideRef.current.style.transform = `translateX(${imgX}px)`;
      decreaseClick();
    }
  };
  const onMouseMove = (event) => {
    if (!isClick) return;
    event.preventDefault();
    setMouseUpClientX(event.pageX);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (Math.abs(imgX) > 100) {
      // slideRef.current.style.transform = `translateX(${imgX}px)`;
    }
  };
  const resizeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeWidth);
    return () => {
      window.removeEventListener("resize", resizeWidth);
    };
  }, []);

  useEffect(() => {
    const autoPage = setTimeout(() => {
      setX(-56);
      setIsSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 8 ? 0 : prev + 1));
        setX(0);
        setIsSlide(false);
      }, 500);
    }, 5000);
    return () => {
      clearTimeout(autoPage);
    };
  }, [index, isClick]);
  // console.log(`???????????? ????????? : ${windowWidth}`);
  return (
    <Wrapper>
      <LeftButton
        style={{
          left:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
              ? `10%`
              : windowWidth > 1300
              ? `5%`
              : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={decreaseClick}
      >
        <i class="fas fa-chevron-left" style={{ right: "0.5rem" }}>
          <img
            alt="src"
            src="./Image/svg.png"
            style={{ width: "30px", height: "30px", transform: "scaleX(-1)" }}
          />
        </i>
      </LeftButton>
      <Row
        key={index}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      >
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[morePrevImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[PrevImg]}
          ></PrivewImg>
        </Container>
        <ImgWrapper>
          <Img
            style={{
              opacity: 1,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[index]}
          />
        </ImgWrapper>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[NextImg]}
          ></PrivewImg>
        </Container>
        <Container>
          <PrivewImg
            style={{
              opacity: 0.5,
              width: windowWidth > 1200 ? null : `80vw`,
              height:
                windowWidth > 1200
                  ? null
                  : windowWidth < 770
                  ? "185px"
                  : "250px",
            }}
            src={WantedImg[moreNextImg]}
          ></PrivewImg>
        </Container>
      </Row>

      <RightButton
        style={{
          right:
            windowWidth > 1800
              ? `18.5%`
              : windowWidth > 1500
              ? `10%`
              : windowWidth > 1200
              ? `5%`
              : `0%`,
          visibility: windowWidth < 1335 ? "hidden" : "visible",
        }}
        onClick={increaseClick}
      >
        <i class="fas fa-chevron-right" style={{ left: "0.5rem" }}>
          <img
            alt="src"
            src="./Image/svg.png"
            style={{ width: "30px", height: "30px" }}
          />
        </i>
      </RightButton>
    </Wrapper>
  );
}

export default Slider;
