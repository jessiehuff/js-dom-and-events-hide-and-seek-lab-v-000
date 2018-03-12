function getFirstSelector(selector){
  return document.querySelector(selector);
};

function nestedTarget(){
  return document.querySelector('#nested .target');
};

function increaseRankBy(n){
  let rank = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rank.length; i++){
    rank[i].innerHTML = i + n 
  }
  return rank
}

function deepestChild(){
  let all = document.getElementById('grand-node')
  let nextNode = all.children[0] 

  while (nextNode){
    all = nextNode 
    nextNode = all.children[0]
  }
  return all 
}