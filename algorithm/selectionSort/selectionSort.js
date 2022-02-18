// [?] 무작위 데이터를 순서대로[ASC|DESC] 정렬

// 정렬 알고리즘(Sort Algorithm): 가장 [작은|큰] 데이터를 왼쪽으로 순서대로 이동
(function () {
  // [1] Input: 자료구조(array, list, stack, queue, tree, db, ...)
  const data = [3, 2, 1, 5, 4]; // 정렬되지 않은 데이터
  const N = data.length; // 의사코드(psudo-code): 프로그램을 작성할 때 각 모듈이 작동하는 논리를 표현하기 위한 언어

  // [2] Process: Selection Sort(선택 정렬) 알고리즘

  // [3] Output: UI(console, web, mobile, desktop, ...)
  for (let i = 0; i < N; i++) {
    console.log(data[i]);
  }
})();
