# 使用 CSS 變更 HTML 標籤特性
## 區塊元素
* display: block
* 如果沒設定寬度時, 盡可能佔滿版面(會依照父元素的寬度自適應延伸佔滿)
* 每個都獨立佔據一行呈現, 不管寬度如何
* 預設為區塊元素的常見標籤的是 h, p, li, div
* 可以設定寬, 通常在不知道內容長度的情況下不會設定高
* div 為單純點綴樣式(沒有語意), 排版用的區塊標籤
## 行內元素
* display: inline
* 不會另起一行
* 比較常用在區塊元素之標籤內
* 預設為行內元素的常見標籤的是 a, span
* 行內元素沒辦法直接設定寬高
* span 為單純點綴樣式(沒有語意), 排版用的行內標籤
## 小技巧
* 可用以下方便檢查是否滿版

      選擇器{
	           background: green;
	           color: white;
      }
* 把 a 標籤設定為區塊元素, 在不改變字體大小下可以設定按鈕大小
## margin, padding
* 排版用屬性
* margin 向外推其他人
* padding 向內推其他人
* test3.html 範例
## box model(盒模型)
* padding, border 會影響到實際標籤的寬高, margin 不會
* 實際標籤的寬高計算需要加 padding, border
* 可以用 chrome 檢查發現 margin 是用虛線標示
* box model 通常不會設定 height
* margin: 0 auto; 是 margin: 0 auto 0 auto; 的簡寫，表示上下邊界為 0 ，左右為 auto 表示自己均分

範例
    
    實際 box的 寬為 500 + 5*2(border) + 20*2(padding) = 550
    .box{
	     border: 5px solid red;
	     width: 500px;
	     height: 300px;
	     margin: 10px;
	     padding: 20px;
	     margin: 30px;
	     background: gray;
    }
## 不想算盒模型的推擠
* 一般預設為 box-sizing: content-box;
* 使用 box-sizing: border-box;

      實際 box 的寬就直接為 500, 業界常用
      .box3{
	        border: 5px solid red;
	        width: 500px;
	        height: 300px;
	        margin-left: auto;
	        margin-right: auto;
	        padding: 20px;
	        background: gray;
	        box-sizing: border-box;
      }
* 如果要讓全部的html標籤都能用到, 不用每個額外設定, 可以直接加在 css reset 後

      css
      *,*:before,*::after{
              box-sizing: border-box;
      }
* css reset 後常用, 讓圖片會自適應寬度

      img{
	      max-width: 100%;
	      height: auto;
      }
