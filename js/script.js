const container = document.querySelector('#container');

function createGrid(gridSize){
    for(let i=0;i<gridSize;i++){
      for(let j=0;j<gridSize;j++){
        this['div'+j+'_'+i] = document.createElement('div');
        this['div'+j+'_'+i].classList.add('tile');
        //this['div'+j+'_'+i].textContent=i+"-"+j;
        container.appendChild(this['div'+j+'_'+i]);
      }
    }
    container.style.setProperty('grid-template-columns', `repeat(${gridSize}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${gridSize}, 1fr)`);
  }

  createGrid(50);

  document.querySelectorAll(".tile").forEach(function(tile) {
    tile.addEventListener('mouseenter', function(e){
      e.target.style.background = 'LightSkyBlue';
    });
      });
  
  