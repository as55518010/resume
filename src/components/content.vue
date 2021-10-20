<template>
  <div class="content-bd">
    <div class="content-left">
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">項目經歷</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--經歷:綠豆芽科技-->
          <div class="item">
            <header class="item-hd">
              <h3 class="item-name">西安綠豆芽信息科技有限公司(西安)</h3>
              <span class="item-time">2018.01 至 2020.02</span>
              <a
                class="btn item-more"
                href="https://baike.baidu.com/item/%E8%A5%BF%E5%AE%89%E7%BB%BF%E8%B1%86%E8%8A%BD%E4%BF%A1%E6%81%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8"
                target="_blank"
                title="點擊查看->西安綠豆芽信息科技有限公司百度百科"
                >工作</a
              >
            </header>
            <ol class="item-project">
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.bitchang.com"
                    target="_blank"
                    title="點擊進入->幣廠交易所首頁"
                    >數字貨幣交易所</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所後端</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          該項目為數字貨幣交易所，為用戶提供便捷的數字資產交易系統，包括幣幣交易、法幣交易、行情查看等主要功能。後端開發語言採用Java，主要採用Spring
                          boot + Hibernate
                          JPA作為後端服務框架；項目後端服務主要包含：API網關、JWT用戶認證、去中心化錢包的資金管理、交易系統、交易訂單撮合引擎、WebSocket
                          K線數據分發服務以及錢包系統（區塊鏈鏈上操作）等多項服務組成。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            負責項目框架搭建以及疑難問題解決，為項目成員提供開發思路
                          </li>
                          <li>
                            主導整個項目正常開發流程，研究了高可用、高併發服務器的架構設計（keepalived+nginx+haproxy）
                          </li>
                          <li>
                            對常用數據進行緩存處理（Redis），並對[撮合引擎]系統進行了架構設計，採用Redis內存撮合、Rabbit
                            MQ消息隊列異步入庫實現高性能撮合系統，從而實現撮合引擎彈性伸縮
                          </li>
                          <li>
                            針對Redis可能出現髒讀的問題可以採用消息隊列處理，消除多線程同一時間操作同一Redis數據的髒讀問題；或可以通過Redis鎖解決高併發的髒讀問題（不推薦，可能會造成無效等待）
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所前端</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          該項目前端開發框架採用目前市面流行的Vue.js框架與Element
                          UI 2.0。採用websocket、TradingView、vuex等技術棧
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            負責項目框架搭建以及疑難問題解決，為項目成員提供開發思路
                          </li>
                          <li>
                            主導整個項目正常開發流程，研究K線渲染組件TradingView的使用與原理
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">以太坊智能合約開發</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          智能合約並非現實中常見的合同，而是存在區塊鏈上，可以被觸發執行的一段程序代碼，這些代碼實現了某種預定的規則，是存在於以太坊執行環境中的“自治代理”，是在以太坊虛擬機上運行的應用程序。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            在法律允許或不觸犯法律的條件下，負責公司在數字貨幣、智能合約開發上的需求
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">交易所APP開發</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          該項目移動APP端採用Java進行原生Android
                          APP開發，項目主要涉及網絡請求、底層框架設計、WebSocket、KLine圖表繪製、實時交易處理展示等功能。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            負責Android端APP基礎框架搭建，採用xUtils進行網絡請求
                          </li>
                          <li>websocket進行實時數據傳輸，與服務端建立長鏈接</li>
                          <li>K線圖表採用MPAndroidChart庫做二次開發。</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.bitchang.com"
                    target="_blank"
                    title="點擊進入->數字貨幣錢包"
                    >數字貨幣錢包</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">錢包APP</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          該項目是一款加密數字貨幣錢包項目，為用戶提供去中心化區塊鏈數字貨幣錢包功能，包含：轉賬、收付款、資產查看、合約挖礦、共振等功能。主要涉及區塊鏈鏈上交易發起及獲取鏈上數據、合約挖礦訂單等操作
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>負責項目框架搭建以及鏈上交互開發</li>
                          <li>
                            通過公鏈提供API以及JSON
                            RPC文檔實現數字貨幣轉賬、充提幣、錢包創建等邏輯
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              <li class="project-1">
                <h3 class="project-name">
                  <a
                    href="http://www.ledianyun.com/"
                    target="_blank"
                    title="點擊進入->樂店雲商城系統"
                    >樂店雲商城系統</a
                  >
                </h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">後台開發(PHP)</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          <a
                            href="https://baike.baidu.com/item/%E4%B9%90%E5%BA%97%E4%BA%91"
                            target="_blank"
                            title="點擊查看->樂店雲百度百科"
                            >樂店雲</a
                          >是一個專門為商戶提供新零售智慧店鋪解決方案的<a
                            href="https://www.ledianyun.com/"
                            target="_blank"
                            title="樂店雲官網"
                            >一站式小程序生成平台</a
                          >。項目主要採用PHP+Phalcon+Mysql，包含分銷、砍價、拼團等營銷以及基礎的商城功能。
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            負責拼團功能開發，該功能主要涉及用戶與用戶共同下單邏輯，需要保證在庫存無誤的情況下，實現多用戶訂單的提交與交易的正常進行
                          </li>
                          <li>負責官網的開發以及官網搜索引擎優化</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <!--經歷:伴知旅行-->
          <div class="item">
            <header class="item-hd">
              <h3 class="item-name">河南伴知旅行網絡科技有限公司(鄭州)</h3>
              <span class="item-time">2017.07 至 2017.12</span>
              <a
                class="btn item-more"
                href="https://baike.baidu.com/item/%E4%BC%B4%E7%9F%A5%E6%97%85%E8%A1%8C"
                title="點擊查看->伴知旅行百度百科"
                >工作</a
              >
            </header>
            <ol class="item-project">
              <li class="project-1">
                <h3 class="project-name">伴知旅行</h3>
                <ol>
                  <li class="project-2">
                    <div class="item-bd">
                      <h3 class="project-name-2">伴知旅行Android APP</h3>
                      <div class="div-item">
                        <h3 class="project-des">【項目簡介】</h3>
                        <p class="item-project-des">
                          <a
                            href="https://baike.baidu.com/item/%E4%BC%B4%E7%9F%A5%E6%97%85%E8%A1%8C"
                            target="_blank"
                            title="點擊查看->伴知旅行百度百科"
                            >伴知旅行</a
                          >是一個旅行社交分享社區<a
                            href="https://itunes.apple.com/cn/app/banzhi/id1281393616?mt=8"
                            target="_blank"
                            title="點擊進入->蘋果App Store查看伴知旅行APP"
                            >APP</a
                          >，它為每一個旅行者和當地人提供分享與交流的空間。主要提供：旅行結伴、旅行發現、知伴服務等服務
                        </p>
                      </div>
                      <div class="div-item">
                        <h3 class="project-des">【工作職責】</h3>
                        <ul class="section-content">
                          <li>
                            負責團隊基礎技術支撐，包含構建流程、工具包、新技術探索等
                          </li>
                          <li>制定APP開發規劃，快速迭代、統一代碼規範</li>
                          <li>主導和開發團隊快速完成Android APP</li>
                          <li>協助完成部分Java API開發與維護</li>
                          <li>
                            設計和開發項目底層框架，通過對工具及項目封裝，解決開發過程中效率低的問題
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
            </ol>
          </div>

          <!--經歷:在校-->
          <div class="item">
            <header class="item-hd">
              <h3 class="item-name">豆芽科技工作室</h3>
              <span class="item-time">2015.08 ~ 2017.08</span>
              <a
                class="btn item-more"
                href="http://www.ztbu.edu.cn/"
                title="河南理工大學萬方科技學院官網"
                >在校</a
              >
            </header>
            <div class="item-bd">
              <p class="item-des">
                在校期間創建工作室，擔任技術總監主導和帶領朋友創業，工作室曾服務於：<span
                  style="font-weight: bold"
                  >高校、企業及個人</span
                >，部分項目如下：
              </p>
              <ul class="section-content">
                <li>
                  <a
                    href="http://www.ztbu.edu.cn/tw"
                    title="點擊進入->校團委官網"
                    >校團委官網</a
                  >
                  校方組織比賽，勝出團隊有報酬開發並維護團委官網
                </li>
                <li>
                  <a
                    href="https://www.beious.com/"
                    title="點擊進入->貝歐名邸官網"
                    >貝歐名邸傢具</a
                  >
                  湖南客戶公司商城系統
                </li>
                <li>
                  <a
                    href="https://android.myapp.com/myapp/detail.htm?apkName=com.fendoumao.waimai"
                    title="點擊查看->奮鬥貓APP"
                    >奮鬥貓APP</a
                  >
                  西安客戶公司APP外賣點餐系統
                </li>
                <li>
                  <a
                    href="https://baike.baidu.com/item/%E5%A5%8B%E6%96%97%E7%8C%AB"
                    title="點擊查看->奮鬥貓百度百科"
                    >奮鬥貓全網優化</a
                  >
                  奮鬥貓全網優化項目包含搜索引擎優化（SEO）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="content-right">
      <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">技能</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--技能:WEB後端開發-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">WEB後端開發</span>
              <a class="btn item-more">熟練掌握</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>
                  兩年後端應用Java、PHP實際開發經驗，掌握Java面向對象思想編程
                </li>
                <li>
                  熟練使用Spring Boot、SpringMVC等主流框架，熟悉Restful
                  風格API設計
                </li>
                <li>
                  熟練使用數據庫操作框架Hibernate JPA，掌握SQL語句增刪改查
                </li>
                <li>
                  熟練使用Websocket，並使用websocket進行服務端與客戶端實時數據傳輸
                </li>
                <li>熟練使用Jwt等用戶鑒權產品</li>
                <li>熟悉API開發基本流程，熟悉Restful 風格API設計</li>
                <li>
                  熟練使用非關係型數據庫Redis、MongoDB等，有Redis實際項目開發使用經驗
                </li>
                <li>
                  熟練使用消息中間件Rabbit MQ、kafka等開源中間件，有Rabbit
                  MQ實際項目開發使用經驗
                </li>
                <li>
                  了解Spring cloud，正學習Spring
                  cloud在企業大型應用中的應用，以及大型應用的微服務化及服務治理知識學習
                </li>
                <li>有金融交易、區塊鏈及數字貨幣行業獨立工作經驗</li>
              </ul>
            </div>
          </div>

          <!--React-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">數據庫</span>
              <a class="btn item-more">熟練掌握</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>熟悉關係型數據庫技術，熟練使用關係型數據庫Mysql、Oracle</li>
                <li>
                  熟悉非關係型數據庫技術，熟練使用非關係型數據庫Nosql：Redis
                </li>
                <li>
                  熟練使用Hibernate JPA，了解 MyBatis、JDBC等數據庫操作框架使用
                </li>
                <li>
                  了解分布式數據庫及Mycat中間件，並正致力於提高分布式數據庫能力和對於數據庫高併發高可用的知識儲備
                </li>
              </ul>
            </div>
          </div>

          <!--服務器|架構-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">服務器|架構</span>
              <a class="btn item-more">熟練掌握</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>熟練掌握Nginx、Tomcat、Apache服務器使用</li>
                <li>
                  熟練掌握常用軟件（MySQL、Redis、Rabbit
                  MQ等）在服務器的搭建與使用
                </li>
                <li>熟練使用Centos(Linux)雲服務器並掌握線上環境和應用的部署</li>
                <li>了解Docker使用及Docker應用部署</li>
                <li>熟悉微服務、高併發、高可用集群服務端架構</li>
                <li>熟練掌握Git、Github、gradle、maven等工具使用</li>
              </ul>
            </div>
          </div>

          <!--WEB前端開發-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">WEB前端開發</span>
              <a class="btn item-more">掌握</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>
                  有一年以上Android原生開發經驗，熟練掌握使用Java
                  SE開發Android原生APP
                </li>
                <li>
                  熟悉前端技術HTML、VUE、JS、CSS、Flutter，有實際項目中的前端開發、維護經驗
                </li>
                <li>掌握網頁重構所需的CSS、SCSS</li>
                <li>掌握前端流行框架Vue</li>
                <li>熟知JS基本語法與知識，熟悉JS語法</li>
                <li>
                  熟練使用Websocket，並使用其進行服務端與客戶端實時數據傳輸
                </li>
                <li>熟練使用Tradingview，使用Tradingview進行K線展示</li>
              </ul>
            </div>
          </div>

          <!--區塊鏈-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">區塊鏈</span>
              <a class="btn item-more">熟悉</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>熟練掌握以太坊鏈上操作</li>
                <li>熟悉以太坊DAPP開發；了解EOS公鏈DAPP開發</li>
                <li>熟練掌握數字錢包、加密貨幣、交易所開發流程</li>
                <li>
                  兩年數字貨幣交易所系統開發經驗，有區塊鏈智能合約、鏈上交互開發經驗
                </li>
              </ul>
            </div>
          </div>

          <!--Golang-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">Golang</span>
              <a class="btn item-more">熟悉</a>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>熟悉Golang基本語法與標準庫</li>
                <li>用Golang開發過小型項目服務</li>
              </ul>
            </div>
          </div>

          <!--獨立開發-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">獨立開發</span>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>有獨自主導並負責的項目開發經驗，在項目中可進行獨立開發</li>
                <li>
                  有良好的編碼習慣與編程思想，學習能力強，可快速學習新技術，對新技術、好技術熱愛
                </li>
                <li>
                  工作穩定性高，對公司負責，有一定的項目管理經驗，有創業經歷
                </li>
              </ul>
            </div>
          </div>

          <!--其它-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">其它</span>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>掌握Java、PHP、Golang、C、Git、Docker、硬件開發</li>
                <li>本科畢設：智能家電物聯網控制系統</li>
                <li>資深Mac & JetBrains用戶</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!--開源項目-->
      <section class="project">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">開源項目</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          以下是我的開源項目與學習總結，細節請點擊鏈接查看文檔（其他項目開發中，尚未開源，敬請期待）

          <!--項目:博客-->
          <div class="item">
            <header class="item-hd">博客/Github</header>
            <div class="item-bd">
              <ul>
                <li>
                  <a href="https://blog.csdn.net/qq_28505809" target="_blank"
                    >CSDN博客</a
                  >
                </li>
                <li>
                  <a href="https://github.com/GuoyiZhang" target="_blank"
                    >Github</a
                  >
                </li>
                <li>
                  <a href="http://www.guoyi.pro" target="_blank"
                    >個人網站主頁</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!--項目:WEB前端-->
          <div class="item">
            <header class="item-hd">WEB前端</header>
            <div class="item-bd">
              <ul>
                <li>
                  <a href="https://github.com/GuoyiZhang/013-HtmlWeb-Js_KLine"
                    >K線</a
                  >
                  JS實現的K線展示組件，項目基於開源項目改造
                </li>
                <li>
                  <a
                    href="https://github.com/GuoyiZhang/077-Android-ListeningLove"
                    >樂聽樂愛</a
                  >
                  全網音樂搜索與播放APP，可播放下載酷狗、QQ音樂、網易雲等音樂庫資源，此項目僅用於學習交流
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!--獎項/證書-->
      <section class="prize">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">獎項/證書</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--技能:WEB後端開發-->
          <div class="item">
            <header class="item-hd">
              <span class="item-time">獲獎經歷</span>
            </header>
            <div class="item-bd">
              <ul class="section-content">
                <li>2017年9月獲得Ican創新設計大賽三等獎</li>
                <li>2017年7月獲得智能互聯創新大賽二等獎</li>
                <li>2016年獲得校網頁設計大賽三等獎</li>
                <li>2016年獲得計算機二級證書</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!--致謝-->
      <section class="thanks">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <h2 class="section-title">致謝</h2>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <!--技能:WEB後端開發-->
          <div class="item">
            <h2 style="font-weight: bold; line-height: 24px; margin-top: 10px">
              感謝您在百忙之中閱讀這份履歷，誠摯的期望能得到面試的機會，希望有榮幸能為公司效力！再次致以我最誠摯的謝意！！
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>
