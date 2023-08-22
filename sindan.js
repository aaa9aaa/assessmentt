'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

assessmentButton.onclick = function() {
   const userName = userNameInput.value;
   if(userName.length === 0) {
      return; // 名前がカラの時は処理を終了  
   }
   
   //TODO　診断結果表示エリア
   resultDivision.innerText = '';
   const header = document.createElement('h3');
   header.innerText = '診断結果';
   resultDivision.appendChild(header);

   const paragraph = document.createElement('p');
   const result = assessment(userName);
   paragraph.innerText = result;
   resultDivision.appendChild(paragraph);
   //TODO　ツイートエリア
}

//placeholder うすいすけ文字

const answers = [
    '##userName##のいいところは、声です。##userName##の声',
    '##userName##のいいところは、体幹の良さです。##userName##の',
    '##userName##のいいところは、うんちがもりもり出るところです。##userName##の',
    '##userName##のいいところは、歌がうまいことです。##userName##の',
    '##userName##のいいところは、気配りができるところです。##userName##の',
    '##userName##のいいところは、あいさつができるです。##userName##の',
    '##userName##のいいところは、頭がいいところです。##userName##の',
    '##userName##のいいところは、触り心地のいい肌です。##userName##の',
    '##userName##のいいところは、甘え上手なところです。##userName##の',
    '##userName##のいいところは、おしゃれなところです。##userName##の',
    '##userName##のいいところは、気前がいいところです。##userName##の',
    '##userName##のいいところは、スタイルのよさです。##userName##の',
    '##userName##のいいところは、おもしろいところです。##userName##の',
    '##userName##のいいところは、絵がうまいことです。##userName##の',
    '##userName##のいいところは、想像力の豊かさです。##userName##の',
    '##userName##のいいところは、です。##userName##の',

]

/**
 *名前の文字列を渡すと 
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */

 function assessment(userName) {
    //todo 診断結果を実装する
    let sumOfCharCode = 0;

    for (let i = 0; i < userName.length; i++) {
      sumOfCharCode = sumOfCharCode + userName.charCodeAt(i)
//sumOfCharCode =+ userName.charCodeAt(i) でも同じ
    }
   
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('##userName##', userName);
    return result;
 }

 console.assert(
    assessment('太郎') === 
    '太郎のいいところは決断力です。',
    '診断結果間違っているよ'
 );