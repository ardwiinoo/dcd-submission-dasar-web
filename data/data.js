const stacks = [
  { src: "static/img/html.png", alt: "HTML" },
  { src: "static/img/css.png", alt: "CSS" },
  { src: "static/img/javascript.png", alt: "JavaScript" },
];

const projects = [
  {
    title: "tools_chatdosen",
    description:
      "Generate pesan formal untuk membantu mahasiswa menghubungi dosen.",
    link: "https://github.com/ardwiinoo/tools_chatdosen",
    image: "./static/img/p1.png",
  },
  {
    title: "laravel_blog",
    description: "Website blog yang dibuat menggunakan laravel 9x.",
    link: "https://github.com/ardwiinoo/laravel_blog",
    image: "./static/img/p2.png",
  },
  {
    title: "portfolio_v1",
    description: "Web portfolio pertama yang saya buat.",
    link: "https://github.com/ardwiinoo/ardwiinoo.github.io",
    image: "./static/img/p3.png",
  },
  {
    title: "sigatren",
    description:
      "Sistem Informasi Geografis untuk pemetaan pondok pesantren, Bantul, DIY",
    link: "https://github.com/ardwiinoo/ta_webgis",
    image: "./static/img/p4.png",
  },
  {
    title: "portfolio_v2",
    description: "Web portfolio kedua yang saya buat.",
    link: "https://ardwiinoo.my.id/",
    image: "./static/img/p5.png",
  },
];

// render stacks data
const listElement = document.querySelector(".list");

stacks.forEach((image) => {
  const listItem = document.createElement("div");
  listItem.classList.add("list_item");

  const imgElement = document.createElement("img");
  imgElement.src = image.src;
  imgElement.alt = image.alt;

  listItem.appendChild(imgElement);
  listElement.appendChild(listItem);
});

// render projects data
const projectListElement = document.getElementById("projectList");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const imageElement = document.createElement("img");
  imageElement.src = project.image;
  projectCard.appendChild(imageElement);

  const projectCardInfo = document.createElement("div");
  projectCardInfo.classList.add("project-card-info");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;
  projectCardInfo.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  projectCardInfo.appendChild(projectDescription);

  const projectLinkList = document.createElement("div");
  projectLinkList.classList.add("project-link-list");

  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.classList.add("project-link");

  const githubIcon = document.createElement("img");
  githubIcon.src = "./static/img/github.svg";
  projectLink.appendChild(githubIcon);

  projectLinkList.appendChild(projectLink);
  projectCardInfo.appendChild(projectLinkList);

  projectCard.appendChild(projectCardInfo);
  projectListElement.appendChild(projectCard);
});

// more button
const moreButton = document.createElement("a");
moreButton.href = "https://github.com/ardwiinoo";
moreButton.classList.add("more-button");
moreButton.textContent = "More";

projectListElement.appendChild(moreButton);
