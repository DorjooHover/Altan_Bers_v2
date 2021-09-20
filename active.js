var sectionHeader = document.getElementById("header");
function scrollFunction() {
  if (
    document.body.scrollTop > sectionHeader.offsetHeight ||  document.documentElement.scrollTop > sectionHeader.offsetHeight
  ) {
    
   document.getElementById("nav").style.width = "70vw";
  } else {
    document.getElementById("nav").style.width = "100vw";
  }
}
var sections = document.querySelectorAll("section");
onscroll = function () {
  scrollFunction();
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {

    switch(section.id){
      case 'header':
        if((scrollPosition < 420 )&&(scrollPosition >= 0)){
          var currentId = section.attributes.id.value;
          removeClassAbout();
          removeClassProduct();
          removeClassContact();
          addActiveClass(currentId);
        }
        break;
      case 'about':
        if((scrollPosition < 2194)&&(scrollPosition >= 420)){
          currentId  = section.attributes.id.value

          removeClassContact()
          removeClassProduct()
          removeClassHeader()
          addActiveClass(currentId);
        }
        break;
      case 'product':
        if((scrollPosition <= 3300)&&(scrollPosition>=2194)) {
          currentId = section.attributes.id.value;
          removeClassHeader();
          removeClassContact();
          removeClassAbout();
          addActiveClass(currentId);
        }
        break;
      case 'contact':
        if(scrollPosition >= 3300) {
          currentId = section.attributes.id.value;
          removeClassAbout();
          removeClassProduct();
          removeClassHeader();
          addActiveClass(currentId);
        }
        break;
        default:
    }
  
  });
};

function removeClassHeader() {
  var el1 = document.querySelector('#header1');
  el1.classList.remove('active')
}
function removeClassAbout() {
  var el1 = document.querySelector('#about1');
  el1.classList.remove('active')
}
function removeClassProduct() {
  var el1 = document.querySelector('#product1');
  el1.classList.remove('active')
}
function removeClassContact() {
  var el1 = document.querySelector('#contact1');
  el1.classList.remove('active')
}
function addActiveClass(element) {
 var el = document.querySelector('#'+ element + '1');
  el.classList.add('active');
}