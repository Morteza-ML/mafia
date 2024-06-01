let $=document;
let all_persen=$.querySelectorAll('.content');
let prompt_frist_page=$.querySelector('#prompt');
let button_start=$.querySelector('.button-start');
let radio=$.querySelectorAll('.radio-first-page')
let persen;
let i;

for(i=0;i<all_persen.length;i++){
    all_persen[i].addEventListener('click',select_persen);
}
function select_persen(event){
   persen=event.target.parentElement;
   if(persen.getAttribute('class')!='contentAll'){
        persen.style.border='aqua 1px solid';
        persen.children[1].style.backgroundColor='aqua';
       event.target.parentElement.children[2].checked=true;
       button_start.style.backgroundColor=' burlywood';
       persen.style.transform="scale(0.95)";
      
   }
    all_persen.forEach(function(event2){
        if(event2.getAttribute('value')!=persen.getAttribute('value'))
            if(event2.style.border!='red 1px solid'){
                event2.style.border='red 1px solid';
                event2.children[1].style.backgroundColor='rgb(75, 99, 99)';
                event2.style.transform="scale(1)";
            }
    });

}