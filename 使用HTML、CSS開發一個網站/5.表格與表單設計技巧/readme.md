# 表格與表單設計技巧
## 表格基本語法
* 整個表格在 table 標籤內
* tr 表格新增一橫行
* td, th 都是在那一行裡新增一格(直列)
* td, th 在語意上不同, th 有標題的意思, td 表示一般內容
* 通常會直接搭配 css reset, 與 border

      <table class="price">
        <tr>
          <th>標題一</th>
          <th>標題二</th>
        </tr>
        <tr>
          <td>內容一</td>
          <td>內容二</td>
        </tr>
      </table>
## 表單：Form、Label、Submit、互動欄位
* 送出 form 的整個資訊為 input type="submit"
* label 標籤可搭配 input select 標籤裡的 id 使用, 點網頁上 label 的文字, 會聚焦在對應的輸入格
* input 為輸入的標籤
  * 有不同的 type, 裡面的 name 會出現在網址, 用來傳遞資料用, id 用來跟 label 標籤結合
  * input 文字輸入
    * type="text" placeholder="預設提示文字"
    * type="email" 電子信箱
    * type="tel" 電話輸入
  * input 點選輸入(單選, 不支援多選)
    * type="radio" value="要傳送到資料庫的資訊"
    * 顯示文字要另外自己打在別的標籤, 或直接加在後面
  * input 勾選輸入(用於複選題)
    * type="checkbox" value="要傳送到資料庫的資訊"
    * 顯示文字要另外自己打在別的標籤, 或直接加在後面
  * input type="button"
    * 單純只是個按鈕
    * 通常跟 javaScript 結合做些網頁效果
* select 為下拉式選單標籤
  * 裡面的 name 會出現在網址, 用來傳遞資料用, id 用來跟 label 標籤結合
  * 下拉出現的內容設定於 option 標籤, option 標籤裡 value="傳送文字"
* textarea 為輸入多行文字內容用
  * 裡面的 name 會出現在網址, 用來傳遞資料用, id 用來跟 label 標籤結合
  * 一樣可以有 placeholder="預設提示文字"
  * cols="30" rows="10" 為網頁上顯示大小, 超過會自動有捲軸條, 但通常用 css 去控制, 所以這邊不用改
