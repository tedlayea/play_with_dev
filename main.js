$(document).ready(function(){
  var cards = [{rank:1, cardImage:"img/1.png"},{rank:2, cardImage:"img/2.png"},
              {rank:3, cardImage:"img/3.png"},{rank:4, cardImage:"img/4.png"},
              {rank:5, cardImage:"img/5.png"},{rank:6, cardImage:"img/6.png"},
              {rank:7, cardImage:"img/7.png"},{rank:8, cardImage:"img/8.png"},
              {rank:9, cardImage:"img/9.png"},{rank:10, cardImage:"img/10.png"},
              {rank:10, cardImage:"img/j.png"},{rank:10, cardImage:"img/q.png"},
              {rank:20, cardImage:"img/joker-black.png"},
              {rank:20, cardImage:"img/joker-red.png"},
              {rank:0, cardImage:"img/back.png"}]

  function createGameBoard(){
    for(var i=0;i<3;i++){
      var backside = $('<img id="i" src="img/back.png" alt="">').attr('id',"flip"+i)
      $('#gameboard').append(backside)
    }
  }
  createGameBoard()

  function flipcards(){
    var playedCards=[]
    var x;
    var sum =0;
    $("#flip0").on("click",()=>{
      x= Math.floor(Math.random() * 13) + 1
      $("#flip0").attr('src',cards[x].cardImage)
      checkFunction()
    })
    $("#flip1").on("click",()=>{
       x= Math.floor(Math.random() * 13) + 1
      $("#flip1").attr('src',cards[x].cardImage)
      checkFunction()
    })
    $("#flip2").on("click",()=>{
       x= Math.floor(Math.random() * 13) + 1
      $("#flip2").attr('src',cards[x].cardImage)
      checkFunction()
    })
    function checkFunction(){
      playedCards.push(x)
      if(playedCards.length==2){
        sum = cards[playedCards[0]].rank + cards[playedCards[1]].rank
        $("#score").text(sum)
        if (sum > 20){
          alert("Congratulation, you won!")
        }
        else{
          alert("Sorry, you didn`t won. Try again !!!!")
        }
      }
    }
  }
  flipcards()
  $("#restart").on("click", ()=>{
    // location.reload()
    for(var i=0;i<3;i++){
      $('#flip'+i).attr('src',cards[14].cardImage)
    }
    flipcards()
  })
})
