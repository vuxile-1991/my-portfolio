import initTilt from './js/tilt';
import initSr from './js/sr';
import MyResume from './assets/vukasin_milekic_resume.pdf'
import './style/main.scss';

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

function addResume(MyResume){
  const elements = document.getElementsByClassName('.cta-btn--resume');
  for(let el of elements){
    el.href = url(MyResume);
  }
}

addResume();
initSr();
initTilt();
