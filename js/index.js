'use strict';


///section1
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const arrowLeft = document.querySelector('.sec1-btn>span.arrow.left');
const arrowRgith = document.querySelector('.sec1-btn>span.arrow.right');

const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;

const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];

}



arrowLeft.addEventListener('click', () => {
  const first = galleryUl.firstElementChild;
  galleryUl.appendChild(first);
})
arrowRgith.addEventListener('click', () => {
  const last = galleryUl.lastElementChild;
  galleryUl.prepend(last);
})


//section2
const sec2Btn = document.querySelector('.sec2-btn');
const sec2BtnArrowLeft = document.querySelector('span.sec2-arrow.left');
const sec2BtnArrowRight = document.querySelector('span.sec2-arrow.right');

const newItems = document.querySelector('.new-items');
const newItemsUl = newItems.querySelector('ul')
const newItemsUlLi = newItemsUl.querySelectorAll('li')

const sec2Gap = newItemsUlLi[5].offsetLeft - newItemsUlLi[0].offsetLeft;

let i = 0;

sec2BtnArrowLeft.addEventListener('click', () => {
  if (i >= 2) i = -1;

  i++;
console.log(i)


  const sec2Goto = (-i * sec2Gap) + 'px';
  newItems.style.left = sec2Goto;
  newItems.style.transition = 'all 0.3s';
})
sec2BtnArrowRight.addEventListener('click', () => {
  if (i < 1) i = 3;

  i--;
  const sec2Goto = (-i * sec2Gap) + 'px';
  newItems.style.left = sec2Goto;
  newItems.style.transition = 'all 0.3s';
})




//section4
const thumItems = document.querySelector('.thum-items');
const thumItemsUl = thumItems.querySelector('ul')
const thumItemsUlLi = thumItems.querySelectorAll('li')
const thumItemsUlLiImg = thumItems.querySelectorAll('li>img');

const thumTitle = thumItems.querySelectorAll('p.title')

const sec4ArrowLeft = document.querySelector('span.sec4-arrow.left');
const sec4ArrowRight = document.querySelector('span.sec4-arrow.right');

const sec4Bottom = document.querySelector('.sec4-bottom');
const sec4BottomPoster = sec4Bottom.querySelector('.poster');
const sec4BottomPosterImg = sec4Bottom.querySelector('img');

const sec4RightTitleImg = document.querySelector('.title-con>h3.title>img');

const titleText = document.querySelector('.title-text');

const subTitle = [
  '초짜 개원의의 웃픈 메디컬 코미디!',
  '티빙이 준비한 첫번째 오리지널',
  '국내 유일 어드벤처 버라이어티 [대탈출] 유니버스',
  '세 여자의 일상을 그린 본격 기승전술 드라마',
  '새로운 시작을 꿈꾸는 래퍼들을 위한 힙합 솔루션',
  '세포들과 함께 성장하는 평범한 유미의 세포 자극 공감 로맨스',
  '이별한 커플들이 새로운 사랑을 찾아나가는 연애 리얼리티',
  '극강의 음소거 추격 스릴러',
  '놀라운 토요일의 아이돌 버전 스핀오프 프로그램',
  '영화로 재탄생한 레전드 액션 웹툰'
];

const conTitle=document.querySelector('p.con-title');
const arrConTitle=[
  '[경]박원장 내과 개원[축]', 
  '추리예능의 신세계 여고추리반! 볼수록 빠져드는 추리반 이야기',
  'DTCU[대탈출] 공식 MD, 티빙몰 상륙!',
  'WORK LATER, DRINK NOW!',
  '환자들의 명곡을 빕니다. 힙합 구조대 구함!',
  '싱크로율 100%, 유미♥구웅 PICK 만찢템',
  '추억보다 깊은 eX vs 설렘의 New',
  '데일리룩에 영화의 스릴 그대로~',
  '원샷노트 하나면 내가 바로 원샷요정♥',
  '올여름 더위는 샤크와 함께 시원하게 SHARK~'
];

const conText=document.querySelector('p.con-text')
const arrContext=[
  '진정한 의사를 꿈꿨으나 오늘도 파리 날리는 진료실에서 의술과 상술을 고민하는 박원장. 친절 진료! 웃음 클리닉 전문! 박원장 내과로 오세요~',
  '추리반 학생들의 미스터리 어드밴쳐! 사건 일지를 손쉽게 정리할 수 있는 알록달록 스티커부터 벳지까지♥ 추리반 굿즈 풀장착하면 나도 추리반!',
  '대탈출 굿즈 기다린 대추? THATS YOU! 대추들 텅장 만들 준비 완.료. 가을맞이 탈지구급 라인업의 DRCU MD. "버는 자, 쓰자!"',
  '어디서 술냄새 안 나요...? 술로 시작해서 술로 끝나는 술도녀의 공식 굿즈! 오늘 먹을 술을 내일로 미루지 말자. 혼술에도 제격인 취향대로 황금비율 소맥잔!',
  '쇼미더머니 10주년 스페셜 프로젝트! 쉼 없이 달려 지쳐버린 래퍼들을 위한 힙합대디의 래퍼 전문병원 OPEN. 힙합 구조대가 되고 싶다면 준비해라! 각오해라!',
  '웹툰이 현실로! 만화를 찢고 나온 유미와 웅이의 최애템♥ 파파파자로 끝나는 말은~ 양파 대파 쪽파 실파 "나 이거 사고파~" 당신의 프라임 세포는 지름신 세포입니다!',
  '그 겨울의 추억을 돌아보게 하는 eX의 향기와 봄날의 꽃향기로 두근두근 설레는 New의 향기를 불러일으키다..! 이별한 커플들의 연애 정거장을 표현한 환승연애만의 감.성.굿.즈',
  '고요에서 오는 공포, <미드나이트>의 데일리 일코템! 심플한 레터링과 선명한 색감으로 표현해낸 MIDNIGHT MOOD로 무더위를 시원하게 날려보세요.',
  '도레미 마켓에 아이돌 총출동! 원샷노트 준비해서 도레미 군단과 함께 받아쓰기 도전 아주 NICE~  놀토감성 가득 담은 떡메모지와 스티커까지 읏-짜!',
  '"더 이상 도망치기 싫다고요!"리얼 생존 액션 <샤크>의 시원한 패션 아이템들을 소개합니다. 패피들의 PICK 버킷햇부터 컬러감 가득한 폰케이스까지, 올여름 외출 준비는 샤크와 함께 끝!'
];

const rightItems=document.querySelector('.right-items');
const rightItemsUl=rightItems.querySelector('ul');
const rightItemsUlLi=rightItemsUl.querySelectorAll('li');

const rightGoods=document.querySelectorAll('.right-goods');

const hashTag=document.querySelector('.hashTag');
const pTag=hashTag.querySelectorAll('p.tag')




thumTitle.forEach((el, idx) => {
  const imgAlt = thumItemsUlLi[idx].children[0].getAttribute('alt')

  el.innerText = imgAlt;
})


let i2=0;

sec4ArrowLeft.addEventListener('click', () => {
  

  if(i2>=thumItemsUlLi.length-9) i2=0;
  i2++;

  const thumGap=thumItemsUlLi[1].offsetLeft - thumItemsUlLi[0].offsetLeft;
  const thumGoto=(-i2*thumGap)+'px';

  thumItems.style.left=thumGoto;
  thumItems.style.transition='all 0.2s';

});
sec4ArrowRight.addEventListener('click', () => {
 

  if(i2<1) i2=thumItemsUlLi.length-9;

  i2--;

  const thumGap=thumItemsUlLi[1].offsetLeft - thumItemsUlLi[0].offsetLeft;
  const thumGoto=(-i2*thumGap)+'px';

  thumItems.style.left=thumGoto;
  thumItems.style.transition='all 0.2s';

});

thumItemsUl.addEventListener('click', (e) => {
  const eTarget = e.target;
  const eTargetParent = eTarget.parentElement;

  thumItemsUlLi.forEach((el, idx) => {
    if (eTargetParent === el) {
      const imgAlt = el.children[0].getAttribute('alt');
      

      sec4BottomPosterImg.setAttribute('src', `img/poster${idx}.jpg`);
      sec4BottomPosterImg.setAttribute('alt', imgAlt);

      sec4RightTitleImg.setAttribute('src', `img/thum${idx}.png`);
      sec4RightTitleImg.setAttribute('alt', imgAlt);

      titleText.children[0].innerText = imgAlt
      titleText.children[1].innerText = subTitle[idx];

      conTitle.innerText=arrConTitle[idx];
      conText.innerText=arrContext[idx];

      rightGoods.forEach((el2, idx2)=>{
        if(idx==idx2){
          el2.classList.add('goods-index');
          
        }else{
          
          el2.classList.remove('goods-index');
        } 
      })

      pTag.forEach((el3, idx3)=>{
        if(idx==idx3){
          el3.classList.add('hash1');
        }else{
          el3.classList.remove('hash1');
        }
      })
    }

  })
})