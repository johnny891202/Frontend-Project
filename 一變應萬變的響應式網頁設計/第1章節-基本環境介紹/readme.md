# 基本環境介紹
## RWD基礎-html head裡面的viewport
* viewport主要是為了解決智慧型手機及平板顯示網頁時畫面較小的問題
* 常見設定
  * width = device-width 瀏覽器顯示寬度 = 裝置寬度
  * initial-scale 設定畫面初始縮放比例
  * minimum-scale 設定畫面初始最小縮放比例
  * maximum-scale 設定畫面初始最大縮放比例
  * user-scalable 是否允許使用者改變縮放比例

        <meta name="viewport" content="width=device-width, initial-scale=1" >
## Media Query觀念
* @media(條件){處發內容}
* 響應式設計永遠從最高解析度到最低解析度，或是最低到最高
* 最高到最小範例

      .title{
          color:red
      }

      @media(max-width:768px){
          .title{
              color:blue;
          }
      }
      @media(max-width:375px){
          .title{
              color:yellow;
          }
      }
