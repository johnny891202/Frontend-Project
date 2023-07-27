# Flex 網頁排版技巧
[Flex 六角線上模擬器](https://codepen.io/peiqun/pen/WYzzYX)
## Flex 外層(父層)必備屬性 (container)
* display: flex(讓 container 裡面的 div 根據主軸方向排列)
* flex-direction: 決定flex的主軸線

      flex-direction: row; (左到右, 預設值)
      flex-direction: row-reverse; (右到左)
      flex-direction: column; (上到下)
      flex-direction: column-reverse; (下到上)
* justify-content: 主軸線的對齊方式

      justify-content: flex-start; (從起點開始對齊, 預設值)
      justify-content: flex-end; (從終點開始對齊)
      justify-content: space-around; (置中留白左右留白1)
      justify-content: space-evenly; (置中留白左右留白2)
      justify-content: center; (置中貼齊左右留白)
      justify-content: space-between; (置中留白左右貼齊)
* flex-wrap: 決定換行的屬性, 當內層寬度總和超過外層(父層)之設定時, 換成 n 行, n 根據當內層寬度總和決定, 行間距離可設定於內層的margin-bottom

      flex-wrap: wrap;
      flex-wrap: nowrap; (預設, 不換行)
* align-items: 交錯軸線的對齊

      flex-direction: row; 或 flex-direction: row-reverse; 交錯軸都是上到下
      flex-direction: column; 或 flex-direction: column-reverse; 交錯軸都是左到右
      align-items: flex-start; (靠上或靠左)
      align-items: flex-end; (靠下或靠右)
      align-items: center; (置中於主軸線)
      align-items: stretch; (滿版)
