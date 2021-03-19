const canvas = document.getElementById("jsCanvas");
//canvas는 이 안의 픽셀들을 다루는 기능을 함.
const ctx = canvas.getContext("2d");
//js 내 canvas와 관련된 함수. 그 요소 안에서 픽셀을 다룸
const colors = document.getElementsByClassName("jsColor");

canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
//pixel modifier에 size주기

ctx.strokeStyle = " #2c2c2c"; //색상
ctx.lineWidth = 2.5; //선 두께

let painting = false;

function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  //-> mdn 참고하기
  //여기에서 모든 움직임을 감지하고 라인을 만듦.
  const x = event.offsetX; //canvas내에서 x값 출력
  const y = event.offsetY; //canvas내에서 y값 출력
  if (!painting) {
    //painting 하지 않을 때임. creating a path
    ctx.beginPath(); /* path is a line!!! 마우스 클릭했을 때 path를 만듦
                        path를 만들면 마우스의 x y 좌표로 path를 옮김 */
    ctx.moveTo(x, y);
  } else {
    //creating a line
    ctx.lineTo(x, y);
    ctx.stroke();
    //이게 선을 긋는 것임. mdn에는 '현재의 sub-path를 현재의 stroke style로 획을 그음'이라고 명시되어 있음.
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor; //backgroundcolor 받기
  ctx.strokeStyle = color; //color 바꾸기 위에서 default를 검정으로 해놓은거
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
