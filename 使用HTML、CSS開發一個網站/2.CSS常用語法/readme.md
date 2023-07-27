# CSS常用語法
## html啟用css的方法
    <head>
    <!-- link:css -->
    <link rel="stylesheet" href="css副檔名的檔案路徑">
    </head>
## css 基本內容
* 注意大括弧與冒號與分號
  
      選擇器{
      屬性: 設定值;
      屬性: 設定值;
      }
* 如果有多個標籤都要用同一個設定, 可用逗號

      完整表示選擇器1, 完整表示選擇器2{
      屬性: 設定值;
      屬性: 設定值;
      }
## 常見屬性
* color: 顏色;
* font-family: 字形
* font-size: 字體大小;
* line-height: 行距;
* text-align: 文字對齊;
* text-indent: 第一行縮排;
* text-decoration: 底線中間線等;
* letter-spacing: 字母之間的間隔大小;
* border: 線條粗細 線條樣式 顏色;
## border 屬性
* border 代表四周
* border-left 代表只有左邊
* solid 實心線
* dashed 虛線
* dotted 圓點虛線
* border 也可用於圖片
## 擬態選擇器
* 與滑鼠游標互動時一些簡單客製化的效果
* hover, 當滑鼠移動到上面時
* active, 滑鼠按著沒有放開

範例
  
    a:hover{
    color: crimson;
    font-size: 40px;
    }
## 鼠標移動到上面時, 鼠標效果
* cursor: pointer;
