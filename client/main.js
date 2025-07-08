//버튼 클릭하면,
document
//할일을 서버로 부터 받아온다
//자바스크립트 문법:DOM 선택, 이벤트 제어*/
document.querySelector("input").addEventListener("click",()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
})

