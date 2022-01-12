// Fetch
$(document).ready(function () {
  fetch("menu.json")
    .then((res) => res.json())
    .then(loadItems)
    .catch((err) => console.error(err));
});

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items
// window.addEventListener("DOMContentLoaded", function () {
//   displayMenuItems(menu);
//   displayMenuButtons();
// });

function loadItems(menu) {
  displayMenuItems(menu);
  displayMenuButtons(menu);
  weatherWidget();
}

// display items
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// display menu buttons
function displayMenuButtons(menu) {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
    ${category}
  </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

// Weather widget
function weatherWidget() {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else {
      alert("Geolocation not supported by this browser");
    }
  }

  function getWeather(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let API_KEY = "7721b9b838093e0c5729d14048ac8975";
    let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

    $.get(baseURL, function (res) {
      let data = res.current;
      let temp = Math.floor(data.temp - 273);
      let condition = data.weather[0].description;

      $("#temp-main").html(`${temp}°`);
      $("#condition").html(condition);
    });
  }

  getLocation();
}
