import { playerData } from "../model/content";

export function loadContent(contentArray) {
  for(var individualPlayer of contentArray[0]){
    loadTemplate(individualPlayer);
  }
}

function loadTemplate(individualPlayer){
  if ('content' in document.createElement('template')) {
    
    var t = document.querySelector('#playerScore'),
    td = t.content.querySelectorAll("td");
    
    td[0].textContent = individualPlayer.player_name;
    td[1].textContent = individualPlayer.out_way;
    td[2].textContent = individualPlayer.number_balls;
    td[3].textContent = individualPlayer.score;
  
    // Clone the new row and insert it into the table
    var tb = document.querySelector("tbody");
    var clone = document.importNode(t.content, true);
    tb.appendChild(clone);
      }
}
  
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export function showPlayerDetails(acc){
  for (var i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          var playerName= this.parentElement.parentElement.firstElementChild.textContent;
          // TODO : make request with playername/ playerID
          var panel = this.parentElement.parentElement.nextElementSibling
          var avgScore = getRandomInt(0,7);
          panel.textContent = `${playerName} scored an average of ${avgScore} runs per ball `
          // var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      }
  }
  
}
