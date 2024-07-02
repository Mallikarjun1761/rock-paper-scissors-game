let s,r,res; 
    let score=JSON.parse(localStorage.getItem('Score')) || { win: 0, lose: 0, tie: 0 };
    function pickcomputerMove(){
      r = Math.random();
      if(r >= 0 && r < 1/3){
        s ='rock';
      }
      else if(r >= 1/3 && r < 2/3){
        s = 'paper';
      }
      else{
        s = 'scissors';
      }
    }
    
    updateScore();

    function result(computermove){
      pickcomputerMove();
      if(computermove ==='scissors'){
        if(s === 'rock'){
        res ='You lose';
      }
      else if(s === 'paper'){
        res ='You win';
      }
      else if(s === 'scissors'){
        res ='Tie';
      }
      }
      else if(computermove==='paper')
      {
        if(s === 'rock'){
        res ='You win';
      }
      else if(s === 'paper'){
        res ='Tie';
      }
      else if(s === 'scissors'){
        res ='You lose';
      }
      }
      else if(computermove==='rock'){
        if(s === 'rock'){
        res ='Tie';
      }
      else if(s === 'paper'){
        res ='You lose';
      }
      else if(s === 'scissors'){
        res ='You win';
      }
      }
      if(res==='You win'){
       score.win+=1;
      }
      else if(res==='You lose'){
       score.lose+=1;
      }
      else if(res==='Tie'){
        score.tie+=1;
      }
      localStorage.setItem('Score',JSON.stringify(score));

      document.querySelector('.result').innerHTML=res;
      document.querySelector('.moves').innerHTML=`You <img class="move-img" src="images/${computermove}-emoji.png" alt="${computermove}"> <img class="move-img" src="images/${s}-emoji.png" alt="${s}"> Computer`;
      updateScore();
    }
    function Resetscore(){
      score = { win: 0, lose: 0, tie: 0 };
      localStorage.removeItem('Score');
      updateScore();
    }
    function updateScore(){
      document.querySelector('.score').innerHTML='Wins : '+score.win+' Loses : '+score.lose+' Ties : '+score.tie;
    }
    let autoplaying =false;
    let id;
    function autoplay(){
      if(!autoplaying){
        id=setInterval(() =>{
          pickcomputerMove();
          let computermove=s;
          result(computermove);
        }, 500);
        autoplaying=true;
      }
      else{
        clearInterval(id);
        autoplaying = false;
      }
    }
    const element3 = document.querySelector('.reset');
    element3.addEventListener('click',
    ()=>{
      Resetscore();
    });
    const element4 = document.querySelector('.auto');
    element4.addEventListener('click',
    ()=>{
      autoplay();
    });
    document.querySelector('.rock').addEventListener('click',
    ()=>{
      result('rock');
    });
    document.querySelector('.paper').addEventListener('click',
    ()=>{
      result('paper');
    });
    document.querySelector('.Scissors').addEventListener('click',
    ()=>{
      result('scissors');
    });
      document.body.addEventListener('keydown',
    (event) => {
      if (event.key === 'r') result('rock');
      else if (event.key === 'p') result('paper');
      else if (event.key === 's') result('scissors');
      else if (event.key === 'a') autoplay();
      else if (event.key === ' ') Resetscore();
    });
    /*document.body.addEventListener('keydown',(event)=>{
      console.log(event.key);
    });*/
