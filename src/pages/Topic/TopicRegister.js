const TopiceRegister = () => {
  return (
    <div>
      <div class="content">
        <div class="contentWrapper">
          <div class="helpHeader">
            <div class="helpTitle">
              <ol>
                <li>
                  <a href="/cs/6/topics/">공지사항 등록</a>
                </li>
              </ol>
            </div>
          </div>

          <div class="articleBottom">
            <p>공지사항 제목</p>
            <div class="helpSearch">
              <input
                type="text"
                id="helpSearch"
                name="helpSearch"
                placeholder="제목을 입력하세요"
              />
            </div>
          </div>
          <p>공지사항 내용</p>
          <div class="helpSearch">
            <input
              type="text"
              id="content"
              name="helpSearch"
              placeholder="내용을 입력하세요"
              style={{ height: "30em" }}
            />
          </div>
        </div>
      </div>
      <button>입력</button>
      <button>취소</button>
    </div>
  );
};
export default TopiceRegister;
