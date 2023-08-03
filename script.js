function randomSelect() {
  const items = document.querySelectorAll('.item');
  const index = Math.floor(Math.random() * items.length);
  const img = items[index].querySelector('img').src;
  const name = items[index].querySelector('p').textContent;
  const resultImg = document.querySelector('.result img');
  const resultName = document.querySelector('.result h2');
  resultImg.src = img;
  resultName.textContent = name;
}const items = [
    {
        name: "菜品1",
        img: "img/2e88a2068c9a6d0f163af027ac22e72.jpg",
        description: "这是菜品1的描述吗"
    },
    {
        name: "菜品2",
        img: "img/3d0f4f8ca6ad653eb9f5bc53c6191d5.jpg",
        description: "这是菜品2的描述"
    },
    {
        name: "菜品3",
        img: "img/3d0f4f8ca6ad653eb9f5bc53c6191d5.jpg",
        description: "这是菜品1的描述"
    },
    {
        name: "甜点1",
        img: "img/ 6c70ec3cf27f7f03ad7e8799f9850a3.jpg",
        description: "这是菜品1的描述"
    },
    {
        name: "甜点2",
        img: "img/ 6c70ec3cf27f7f03ad7e8799f9850a3.jpg",
        description: "这是菜品1的描述"
    },
    {
        name: "麻辣烫",
        img: "img/新一A座川锦汇15r.jpg",
        description: "新一A座（川锦汇）15r"
    },
    {
        name: "蛋炒饭",
        img: "img/2e88a2068c9a6d0f163af027ac22e72.jpg",
        description: "新一A座（回味斋）7r"
    }
];

const resultImg = document.querySelector(".result-img");
const resultName = document.querySelector(".result-name");
const drawButton = document.querySelector(".draw");
//弹出框
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

drawButton.addEventListener("click", () => {
  // 随机选择一个项目
  const selectedItem = items[Math.floor(Math.random() * items.length)];

  // 更新抽奖结果
  resultImg.src = selectedItem.img;
  resultName.innerHTML = "<strong>" + selectedItem.name + "</strong>：<br>" + selectedItem.description;

  // 显示抽奖结果
  document.querySelector(".result").style.display = "block";
});

resultImg.addEventListener("click", () => {
  // 显示弹出框
  lightboxImg.src = resultImg.src;
  lightbox.style.display = "block";
});

lightboxClose.addEventListener("click", () => {
  // 隐藏弹出框
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", event => {
  // 如果点击的是弹出框外部，隐藏弹出框
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});