'use strict'

{
  // menuクラス内のli aを配列に格納
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    // タブがクリックされたとき
  clickedItem.addEventListener('click', e => {
      // aタグのページ遷移動作をキャンセル
      e.preventDefault();

      // 各部品のactiveクラスを外す
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

    // クリックされたタブにactiveをつける
    clickedItem.classList.add('active');

    // コンテントのactiveクラスを外す
    contents.forEach(content => {
      content.classList.remove('active');
    });

    // クリックされたタブに対応するコンテントにactiveをつける
    document.getElementById(clickedItem.dataset.id).classList.add('active');

    });
  });
}