# 最後，讓你的網頁變得更專業
## CSS 權重觀念
* css 先看權重, 權重相同時, 後寫的 css 樣式會覆蓋先寫的 css 樣式
* 用 class 指定, 權重 10分; 用 id 指定, 權重 100 分, 原生 html 標籤 1 分
* css 裡指定 class 樣式用 .name{}; 在 css 裡指定 id 樣式用 #name{}, 注意井字號的不同, 但不要在 css 用 id(權重太高容易出錯)
* id 在網頁上是唯一一個; 但在網頁上可以有多個相同的 class 標籤, id 通常在 html 代表錨點, 或是給後端工程師用
* 標籤可以用 style="xxxx" 直接在 html指定樣式, 但通常是javaScript 要直接指定樣式才會這樣用, 這個權重為 1000
* 如果在 css 樣式後加上 !important, 代表永遠不會被覆蓋掉

      p{
	      color: red !important;
      }
* 權重小結
  * 預設html標籤 1分(最常用)
  * class 10 分(最常用)
  * id 100 分
  * html 直接下 style 1000分
  * css 樣式後加 !important 最高
## html head 進階資訊設定
* 網頁頁籤上顯示小圖, 小圖的副檔名為 ico, 大小為 32x32 px

      <link:rel="short icon" href="xxx.ico">
* 網站簡述

      <meta name="description" content="網站描述文字">
* 使用者可以用什麼關鍵字搜尋到網站, 用 , 隔開

      <meta name="keywords" content="關鍵字1, 關鍵字2..">
* 轉貼專用, 使用者轉貼網址
     
      <meta property="og:title" content="FB顯示標題, 自己改">
      <meta property="og:description" content="FB顯示描述, 自己改">
      <meta property="og:type" content="website">
      <meta property="og:url" content="FB上的網址, 自己改">
      <meta property="og:image" content="FB上的圖片, 自己改">
* IE 相容性設定

      <meta http-equiv="X-UA-Compatible" contetn="IE-Edge">
* 先載入 css 再載入 javaScript

      <link rel="stylesheet" href="style.css">
      <script type="text/javascript" src="xxx.js"></script>
