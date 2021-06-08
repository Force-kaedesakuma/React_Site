import $ from 'jquery';

//ハンバーガーメニューバー
$(function() {
    $('.btn').on('click',function(){// .btnをクリックすると〜
        $('.btn').toggleClass('close');// .btnにcloseというクラスが追加される
        $('nav').fadeToggle(500);// navの表示・非表示切り替わる
      });
    });
  //ここまで
  
  $(function () {
    $('#openModal').click(function(){
        $('#modalArea').fadeIn();
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
  });
  
  /*ハンバーガーメニューバー*/
  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
  });