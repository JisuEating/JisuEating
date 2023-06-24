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
        img:"img/3d0f4f8ca6ad653eb9f5bc53c6191d5.jpg",
        description: "这是菜品1的描述"
    },
    {
        name: "菜品2",
        img: "img/3d0f4f8ca6ad653eb9f5bc53c6191d5.jpg",
        description: "这是菜品1的描述"
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
        description: "新一A座川锦汇15r"
    }
];

const resultImg =document.querySelector(".result-img");
const resultName = document.querySelector(".result-name");
const drawButton = document.querySelector(".draw");

drawButton.addEventListener("click", () => {
    // 随机选择一个项目
    const selectedItem = items[Math.floor(Math.random() * items.length)];
    
    // 更新抽奖结果
    resultImg.src = selectedItem.img;
    resultName.innerHTML = "<strong>" + selectedItem.name + "</strong>：<br>" + selectedItem.description;
    
    // 显示抽奖结果
    document.querySelector(".result").style.display = "block";
});