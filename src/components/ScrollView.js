import infinityScroll from "../util/infinityScroll.js";

export default class ScrollView {
  constructor({ $target, fetchData }) {
    this.section = document.createElement("section");
    this.section.classList.add("container");
    this.data = [];
    fetchData();
    this.intersection = infinityScroll(fetchData);
    $target.appendChild(this.section);
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  setIntersection() {
    const blocks = document.querySelectorAll(".block");
    this.intersection.observe(blocks[blocks.length - 1]);
  }

  render() {
    this.section.innerHTML = "";
    this.data.forEach((val, idx) => {
      const block = document.createElement("div");
      block.classList.add("block");

      const title = document.createElement("h1");
      title.innerText = val.title;
      
      const image = document.createElement("img");
      image.src = val.medium_cover_image;
      block.appendChild(title);
      block.appendChild(image);      
      this.section.appendChild(block);
    });
    this.setIntersection();
  }
}