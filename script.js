$(function() {
  
  // toggleChangeBtn関数を定義する
  //「.change-btn」要素「前へ」「次へ」の表示/非表示の処理
  function toggleChangeBtn() {
    // 変数slideIndexに「.active」要素のインデックス番号を代入する
    var slideIndex = $('.slide').index($('.active'));
    // 「前へ」「次へ」を両方表示して条件分岐によって表示/非表示を行う
    $('.change-btn').show();
    // ifとelse ifを用いて、「.change-btn」の表示/非表示を行う
    if (slideIndex == 0) {
      // 1枚目のスライドの時、「前へ」を隠す
      $('.prev-btn').hide();
    // スライドの枚数が変わっても対応できるようにlengthメソッドを用いて書き換える
    } else if (slideIndex == $('.slide').length - 1) {
      // 最後のスライドの時、「次へ」を隠す
      $('.next-btn').hide();
    }
  }
  
  // インデックスボタン（1〜５）が押されたときのclickイベント
  $('.index-btn').click(function() {
    // activeクラスを外す
    $('.active').removeClass('active');
    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入する
    var clickedIndex = $('.index-btn').index($(this));
    // クリックしたインデックスボタンのスライドオブジェクトにactiveクラスを追加する
    $('.slide').eq(clickedIndex).addClass('active');
    // toggleChangeBtn関数の呼び出し
    toggleChangeBtn();
  });
  
  // チェンジボタン（「前へ」「次へ」）が押されたときのclickイベント
  $('.change-btn').click(function() {
    // 変数$displaySlideを定義し、'.active'クラスを持っているオブジェクトを代入する
    var $displaySlide = $('.active');
    // 変数$displaySlideからactiveクラスを取り除く
    $displaySlide.removeClass('active');
    // クリックされたボタンに'next-btn'クラスがあったら、次のオブジェクトに'active'クラスを追加する
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    // 'next-btn'クラスがなかったら、前のオブジェクトに'active'クラスを追加する
    } else {
      $displaySlide.prev().addClass('active');
    }
    // toggleChangeBtn関数の呼び出し
    toggleChangeBtn();
  });
});
