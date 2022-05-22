// start declare the global variables

const selectNav = document.getElementById("nav_list");
const selectSection = Array.from(document.querySelectorAll("section"));

// end declare the global variables

// function to create an items in navbare << its work when add a new section in page >>

function listItems(){
    for(i of selectSection){
        item = document.createElement("li");
        item.innerHTML = `<li><a href="#${i.id}" data-nav="${i.id}" class="item_link">${i.dataset.nav}</a></li>`;
        selectNav.appendChild(item);
    }
};
listItems();

// playing the animation when scroll the page

window.onscroll =function(){
    selectSection.forEach(function(active){
        if(
            active.getBoundingClientRect().top >= -150 &&
            active.getBoundingClientRect().top <= 600){
            active.classList.add("active");
        }else{
            active.classList.remove("active");
        }
    });
};

// select the section from the items in navbare << when click on items in navbare its scroll to section >>
selectNav.onclick = (toi)=>{
    toi.preventDefault();
    if (toi.target.dataset.nav){
        document.getElementById(`${toi.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
        setTimeout(()=>{
            location.hash = `${toi.target.dataset.nav}`;
        },150);
    }
};
