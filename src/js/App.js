import React from 'react';
import '../App.css';
import '../css/index.css';
import './Site.js';
import yasai from '../img/yasai.png';
import profile from '../img/pro.jpg';
import yasai2 from '../img/S__8781832.jpg';
import unitychan from '../img/unitychan.png';
import unitychan2 from '../img/S__8781833.jpg';
import singularity from '../img/singularity.png';
import singularity2 from '../img/S__8781830.jpg';

function App() {
  return (
    <div>
    <header class="header">
        <div class="header-inner">
            <h1 class="logo"><a href="#">MyProfile</a></h1>
            <div class="menu-wrapper">
            </div>
        </div>
    </header>
  
  <div class="img"></div>

  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  
  <nav class="globalMenuSp">
      <ul>
          <li><a href="#myprofile">1.自己紹介</a></li>
          <li><a href="#work">2.制作作品</a></li>
          <li><a href="#">3.トップ</a></li>
      </ul>
  </nav>

      <div class="main">

        <div class="box17" id="myprofile">
            <p>自己紹介</p>
        </div>

        <div class="profile">
            <img class="profile__img" src={profile} alt="profile" />
            <div class="profile__name">佐久間　楓</div>

            <div class="box18" id="work">
                <p>制作作品</p>
            </div>
            <div class="profile__desc">
                年齢:20<br />性別:男<br />趣味:バイク、車<br />スキル:C.C++.C#.JavaScript.
            </div>
        </div>
      </div>

    <div id="photo1">
        <a href={yasai} alt="yasai" data-lightbox="group"><img src={yasai2} alt="yasai2" width="300" /></a>
    </div>
    
    <div id="photo2">
        <a href={unitychan} alt="unitychan" data-lightbox="group"><img src={unitychan2} alt="unitychan2" width="300" /></a>
    </div>

    <div id="photo3">
        <a href={singularity} alt="singularity" data-lightbox="group"><img src={singularity2} alt="singularity2" width="300" /></a>
    </div>

  <footer>
      <a href="#" id="page-top"><i class="blogicon-chevron-up"></i>トップへ戻る</a>

    <h2>連絡先</h2>

    <p>
        Mail:kaede.sakuma@force-corp.co.jp
    </p>

    <p>
        Tel:070-3200-9540
    </p>
</footer>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="./js/Site.js" type="text/javascript"></script>

  </div>
  );
}

export default App;
