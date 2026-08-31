// DOM 요소
const modalBackground = document.getElementById("modalBackground");
const blogSettingModal = document.querySelector(".modal-blog-setting");
const categorySettingModal = document.querySelector(".m-category-setting");

const blogSettingBtn = document.getElementById("blogSettingOpen");
const categorySettingBtn = document.getElementById("categorySettingOpen");
const closeBtns = document.querySelectorAll(".modal-close");

// 블로그 설정 모달 열기
blogSettingBtn.addEventListener("click", () => {
  blogSettingModal.style.display = "block";
  categorySettingModal.style.display = "none";
  modalBackground.style.display = "block";
});

// 카테고리 설정 모달 열기
categorySettingBtn.addEventListener("click", () => {
  categorySettingModal.style.display = "block";
  blogSettingModal.style.display = "none";
  modalBackground.style.display = "block";
});

// 취소 버튼으로 모달 닫기
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalBackground.style.display = "none";
  });
});

// 배경 클릭 시 모달 닫기
modalBackground.addEventListener("click", (e) => {
  if (e.target === modalBackground) {
    modalBackground.style.display = "none";
  }
});

// 카테고리 항목 추가 기능
const addCategoryBtn = document.getElementById("addCategoryBtn");
const categoryList = document.getElementById("categoryList");

addCategoryBtn.addEventListener("click", () => {
  const cateCards = categoryList.querySelectorAll(".modal-cate-card");
  if (cateCards.length >= 20) {
    alert("카테고리는 최대 20개까지 설정 가능합니다.");
    return;
  }

  const newCard = document.createElement("div");
  newCard.className = "modal-cate-card";
  newCard.innerHTML = `
    <input type="text" placeholder="새 카테고리" maxlength="20" />
    <button class="check" title="삭제">⛔︎</button>
  `;

  // 동적 생성된 삭제 버튼 이벤트 연결
  newCard.querySelector(".check").addEventListener("click", () => {
    newCard.remove();
  });

  categoryList.appendChild(newCard);
});

// 기존 삭제 버튼에 이벤트 연결
categoryList.querySelectorAll(".check").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.closest(".modal-cate-card").remove();
  });
});

// --- 파일 첨부 이벤트 (write.html) ---
const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const btnFileDelete = document.getElementById("btnFileDelete");

if (fileInput) {
  // 파일이 선택되었을 때
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      fileNameDisplay.value = e.target.files[0].name;
      btnFileDelete.style.display = "inline-block";
    }
  });

  // 휴지통 버튼 클릭 시 파일 초기화
  btnFileDelete.addEventListener("click", () => {
    fileInput.value = "";
    fileNameDisplay.value = "";
    btnFileDelete.style.display = "none";
  });
}
