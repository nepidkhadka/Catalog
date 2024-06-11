// Mobile

const hamburgericon = document.querySelector(".mbl-menu-icon");
const line = document.querySelectorAll(".line");
const mblmenuitems = document.querySelector(".menu-bar");
const overlay = document.querySelector(".overlay");


// Hamburger Click Event
hamburgericon.addEventListener("click", () => {
  if (screen.width < 768) {
    line.forEach(line=>line.classList.toggle("rotate"))
    mblmenuitems.classList.toggle("mblopen");
    overlay.classList.toggle("active");
  }
});


// News
const newscardswrapper = document.querySelector(".news-cards-wrapper");

let newsdata = [];
let API_URL =
  "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json";

const fetchnews = async () => {
  try {
    let res = await fetch(API_URL);
    let data = await res.json();
    newsdata = data.news;
    renderNews();
  } catch (e) {
    console.log(e);
  }
};

const renderNews = () => {
  newsdata.forEach((news) => {
    const newselement = document.createElement("div");
    newselement.className = "news-card";

    newselement.innerHTML = `
      <div class="news-card-img">
        <img src="${news.image}" alt="">
      </div>
      <h3 class="news-card-title">${news.title.slice(0, 40)+"..."}</h3>
      <p class="news-card-desc">${news.content.slice(0, 120)+"..."}</p>
      <a href="" class="action-btn">Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
    `;
    newscardswrapper.appendChild(newselement);
  });
};

fetchnews();
