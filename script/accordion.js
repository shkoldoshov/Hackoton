const accordionData = [
  {
    title: "KEVIN DE BRUYNE",
    info: " Full Name: Kevin De Bruyne, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Midfielder",
  },
  {
    title: "MBAPPE",
    info: " Full Name: Kylian Mbappé Lottin, Date of Birth:	December 20, 1998, Nationality: 	French, Position:		Forward",
  },
  {
    title: "RONALDO",
    info: " Full Name: Kristiano Ronaldo, Date of Birth:	February 5, 1985, Nationality: Portugal, Position:	Forward",
  },
  {
    title: "SON",
    info: " Full Name: Heung Min Son, Date of Birth:	June 28, 1991, Nationality: Korean, Position:	Left-Winger",
  },
  {
    title: "MESSI",
    info: " Full Name: Leo Messi, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Right-Winger",
  },
  {
    title: "MANE",
    info: " Full Name: Sadio Mane, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Left-Winger",
  },
  {
    title: "NEYMAR",
    info: " Full Name: Neymar JR, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Left-Winger",
  },
  {
    title: "DYBALA",
    info: " Full Name: Paolo Dybala, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Attacker-Midfielder",
  },
  {
    title: "KIMMICH",
    info: " Full Name: Joshua Kimmich, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Right-Back",
  },
  {
    title: "KROOS",
    info: " Full Name: Toni Kroos, Date of Birth:	June 28, 1991, Nationality: Belgian, Position:	Midfielder",
  },
];
const accordion = document.querySelector(".accordion");

const renderAccordion = () => {
  let activeAccordion = null;
  accordionData.forEach((el, indexP) => {
    const accordionWrap = document.createElement("div");
    const accordionName = document.createElement("div");
    const title = document.createElement("p");
    const plus = document.createElement("img");
    const accordionContent = document.createElement("div");
    const info = document.createElement("p");
    const photo = document.querySelector("img");

    info.textContent = el.info;
    title.textContent = el.title;
    plus.src = "./images/plus.png";

    accordionWrap.className = "accodion__wrap";
    accordionName.className = "accordion__name";
    accordionContent.className = "accordion__content";
    plus.className = "plus";
    photo.className = "photo";

    accordionName.addEventListener("click", () => {
      if (activeAccordion === accordionWrap) {
        accordionWrap.classList.remove("accordion__active");
        activeAccordion = null;
      } else {
        if (activeAccordion) {
          activeAccordion.classList.remove("accordion__active");
        }
        accordionWrap.classList.add("accordion__active");
        activeAccordion = accordionWrap;
      }
    });
    accordionName.append(title, plus);
    accordionContent.append(info);
    accordionContent.app;
    accordionWrap.append(accordionName, accordionContent);
    accordion.append(accordionWrap);
  });
};
renderAccordion();


// second accordion 

const Data = [
  {
    title: "KEVIN DE BRUYNE",
    info: " Full Name: Kevin De Bruyne, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Midfielder",
    img: "./images/kevin.png",
  },
  {
    title: "MBAPPE",
    info: " Full Name: Kylian Mbappé Lottin, Date of Birth: December 20, 1998, Nationality: French, Position: Forward",
    img: "./images/kylian.png",
  },
  {
    title: "RONALDO",
    info: " Full Name: Kristiano Ronaldo, Date of Birth: February 5, 1985, Nationality: Portugal, Position: Forward",
    img: "./images/rony.png",
  },
  {
    title: "SON",
    info: " Full Name: Heung Min Son, Date of Birth: June 28, 1991, Nationality: Korean, Position: Left-Winger",
    img: "./images/sonny.png",
  },
  {
    title: "MESSI",
    info: " Full Name: Leo Messi, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Right-Winger",
    img: "./images/lmessi.png",
  },
  {
    title: "MANE",
    info: " Full Name: Sadio Mane, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Left-Winger",
    img: "./images/mane s.png",
  },
  {
    title: "NEYMAR",
    info: " Full Name: Neymar JR, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Left-Winger",
    img: "./images/ney.png",
  },
  {
    title: "DYBALA",
    info: " Full Name: Paolo Dybala, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Attacker-Midfielder",
    img: "./images/paolo.png",
  },
  {
    title: "KIMMICH",
    info: " Full Name: Joshua Kimmich, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Right-Back",
    img: "./images/josh.png",
  },
  {
    title: "KROOS",
    info: " Full Name: Toni Kroos, Date of Birth: June 28, 1991, Nationality: Belgian, Position: Midfielder",
    img: "./images/toni.png",
  },
];

const accordionList = document.getElementById('accordion-list');
const selectedItemInfo = document.getElementById('selected-item');

Data.forEach(item => {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-items');
  accordionItem.textContent = item.title;
  accordionItem.addEventListener('click', () => {
    renderSelectedItem(item);
  });
  accordionList.appendChild(accordionItem);
});

function renderSelectedItem(item) {
  selectedItemInfo.innerHTML = `<h3>${item.title}</h3><p>${item.info}</p>`;
  if (item.img) {
    selectedItemInfo.innerHTML += `<div class="image-container"><img src="${item.img}" alt="${item.title}"></div>`;
  }
}