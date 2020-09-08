//OPACITY
function opacity(imageToShowId,time,scrollability){
    window.addEventListener("scroll", ()=> {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const windowWidth = window.innerWidth; 
      let wayToBottom = scrollable-scrolled;
      let picToShow = document.getElementById(imageToShowId);
  
      if(scrolled > scrollable/scrollability) {
        picToShow.style.opacity = (scrolled*time/scrollable)-0.8;
        console.log(picToShow.style.opacity);
      }
    })
  }

  opacity("titleAccroche",5,10);
  opacity("titleDeux",3,5);
  opacity("titleTrois",1,10);
  