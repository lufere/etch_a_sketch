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

function clearGrid(){
    document.querySelectorAll(".tile").forEach(function(_e_) {
        _e_.style.background = 'LightSalmon'; 
            });
    }



  const btn = document.querySelector('#btn');
  btn.addEventListener('click', function(_e) {
      clearGrid();
      var gridSize = prompt("Enter the new grid size","");
      createGrid(gridSize);
      document.querySelectorAll(".tile").forEach(function(tile) {
        tile.addEventListener('mouseenter', function(e){
          e.target.style.background = 'LightSkyBlue';
        });
          });
  });



  
  