let navabarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navabarDiv.classList.add('navbar-cng');
    }else{
        navabarDiv.classList.remove('navbar-cng');
    }
});

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
//Shows Navigation Bar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

//Hide Navigation Bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});


document.addEventListener('DOMContentLoaded', () => {
    const styleToggleButton = document.getElementById('change-theme');
    const styleSheetLink = document.getElementById('css_file');

    // Load the preferred style from localStorage
    const currentStyle = localStorage.getItem('currentStyle') || 'css/style.css';
    styleSheetLink.href = currentStyle;
    console.log(styleSheetLink.href);

    // Update button text based on the current style
    styleToggleButton.textContent = currentStyle === 'css/style_2.css' ? 'Switch to Basic Mode' : 'Switch to Professional Mode';

    // Toggle style on button click
    styleToggleButton.addEventListener('click', () => {
        console.log("Clicked");
        const newStyle = styleSheetLink.href.includes('css/style_2.css') ? 'css/style.css' : 'css/style_2.css';
        styleSheetLink.href = newStyle;
        localStorage.setItem('currentStyle', newStyle);
        styleToggleButton.textContent = newStyle === 'css/style_2.css' ? 'Switch to Basic Mode' : 'Switch to Professional Mode';
    });
});
