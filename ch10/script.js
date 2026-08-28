const blogSettingOpen = document.querySelector("#blogSettingOpen");
const categorySettingOpen = document.querySelector("#categorySettingOpen");

const modalBody = document.querySelector(".modal-body");
const blogSetting = document.querySelector(".modal-blog-setting");
const categorySetting = document.querySelector(".m-category-setting");

// 블로그 설정 버튼
blogSettingOpen.addEventListener("click", () => {
  modalBody.style.display = "block";
  blogSetting.style.display = "block";
  categorySetting.style.display = "none";
});

// 카테고리 설정 버튼
categorySettingOpen.addEventListener("click", () => {
  modalBody.style.display = "block";
  blogSetting.style.display = "none";
  categorySetting.style.display = "block";
});
