// Принимает объект с настройками для меню
export default class FloatMenu{
  // @params - object
  construnctor(params){
    this.elem = params.elem;
    this.height = params.height;
    this.first_class = params.first_class;
    this.second_class = params.second_class;
    this.active_class = params.first_class;
  }

  init(){

    if(window.pageYOffset > this.height){
      this.elem.classList.add(this.first_class);
      this.elem.classList.add(this.second_class);
    }else{
      this.elem.classList.add(this.first_class);
    }

    window.addEventListener('scroll', () => {

      if(window.pageYOffset > this.height &&  this.active_class === this.first_class){
        this.elem.classList.add(this.second_class);
        this.active_class = this.second_class;
      }else if(window.pageYOffset < this.height && this.active_class === this.second_class ){
        this.elem.classList.remove(this.second_class);
        this.active_class = this.first_class;
      }

	});  
  }
}  
