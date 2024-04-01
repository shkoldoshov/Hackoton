const dataAlt = [
  {
    name: "Joshua Kimmich",
    img: "./images/josh.png",
    club: "Bayern",
    category: "brain",
  },
  {
    name: "Cristiano Ronaldo",
    img: "./images/ron.png",
    club: "Madrid",
    category: "besten",
  },
  {
    name: "Lionel Messi",
    img: "./images/leo.png",
    club: "Barcelona",
    category: "besten",
  },
  {
    name: "Neymar JR",
    img: "./images/ney.png",
    club: "Barcelona",
    category: "skills",
  },
  {
    name: "Son Min Heung",
    img: "./images/sonny.png",
    club: "Tottenhem",
    category: "skills",
  },
  {
    name: "Toni Kroos",
    img: "./images/toni.png",
    club: "Madrid",
    category: "brain",
  },
  {
    name: "Kevin de Bruyne",
    img: "./images/kevin.png",
    club: "Manchester City",
    category: "brain",
  },
  {
    name: "Sadio Mane",
    img: "./images/mane s.png",
    club: "Liverpool",
    category: "speed",
  },
  {
    name: "Kylian Mbappe",
    img: "./images/kylian.png",
    club: "PSG",
    category: "speed",
  },
  {
    name: "Paolo Dybala",
    img: "./images/paolo.png",
    club: "Juventus",
    category: "skills",
  },
];

const output = document.querySelector(".output");
let uniqueCategory = "all footballers";

const renderCategories = (data) => {
  output.innerHTML = "";
  data.forEach((el) => {
    const box = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("p");
    const club = document.createElement("p")

    img.src = el.img;
    title.textContent = el.name;
    club.textContent = el.club;

    box.append(img, title, club);
    output.append(box);
  });
};
renderCategories(dataAlt);

const renderButtons = () => {
  const btnwrap = document.querySelector(".btnwrap");
  const btnsData = dataAlt.reduce(
    (acc, rec) => {
      const category = rec.category;
      if (acc.indexOf(category) === -1) {
        return [...acc, category];
      }
      return acc;
    },
    ["all footballers"]
  );

  btnsData.forEach((el, index) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = el;

    if (index === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      uniqueCategory = el;
      const filteredData = dataAlt.filter((item) => item.category === el);
      const checkData = filteredData.length > 0 ? filteredData : dataAlt;
      renderCategories(checkData);
      const allBtns = document.querySelectorAll(".btn");
      allBtns.forEach((el, indexChild) => {
        if (index === indexChild) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
    btnwrap.append(btn);
  });
};
renderButtons();
// search
const dynamicSearch = () => {
  const searchInput = document.querySelector(".search_input"); // Update selector to match your HTML
  searchInput.addEventListener("input", () => {
    const filteredData = dataAlt.filter((item) =>
      item.name.toLowerCase().includes(searchInput.value.toLowerCase(),
      item.club.toLowerCase().includes(searchInput.value.toLowerCase()))
    );
    if (filteredData.length === 0) {
      output.innerHTML = "There is no such a player";
    } else {
      renderCategories(filteredData);
    }
  });
};
dynamicSearch();
// search
