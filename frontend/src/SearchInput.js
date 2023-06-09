const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, onRandomSearch }) {
    const $wrapper = document.createElement("section");
    $target.appendChild($wrapper);

    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    $searchInput.className = "SearchInput";
    $wrapper.appendChild($searchInput);

    $searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        onSearch(e.target.value);
        // 최근 키워드를 로컬스토리지에 저장
        let keywordHistory =
          localStorage.getItem("keywordHistory") === null
            ? []
            : localStorage.getItem("keywordHistory").split(",");
        keywordHistory.unshift(e.target.value);
        keywordHistory = keywordHistory.slice(0, 5);
        localStorage.setItem("keywordHistory", keywordHistory.join(","));
      }
    });

    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.className = "RandomButton";
    this.$randomButton.textContent = "랜덤고양이";

    $wrapper.appendChild($randomButton);

    $randomButton.addEventListener("click", (e) => {
      onRandomSearch();
    });

    this.KeywordHistory = new KeywordHistory({
      $target,
      onSearch,
    });
  }
  render() {}
}
