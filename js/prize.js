const items = [
    {
        name: "菜品1",
        img: "https://via.placeholder.com/150x150.png?text=Item+1"
    },
    {
        name: "菜品2",
        img: "https://via.placeholder.com/150x150.png?text=Item+2"
    },
    {
        name: "菜品3",
        img: "https://via.placeholder.com/150x150.png?text=Item+3"
    },
    {
        name: "甜点1",
        img: "https://via.placeholder.com/150x150.png?text=Dessert+1"
    },
    {
        name: "甜点2",
        img: "https://via.placeholder.com/150x150.png?text=Dessert+2"
    },
    {
        name: "甜点3",
        img: "https://via.placeholder.com/150x150.png?text=Dessert+3"
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
    resultName.textContent = selectedItem.name;
    
    // 显示抽奖结果
    document.querySelector(".result").style.display = "block";
});