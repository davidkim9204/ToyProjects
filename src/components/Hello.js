export default class Hello {
  constructor({ $target, fetchData }) {
    this.section = document.createElement("section");
    this.section.classList.add("container");
    this.data = [];
    $target.appendChild(this.section);
    fetchData();
  }

  setData(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.section.innerHTML = "";
    this.data.forEach((val, idx) => {
      const block = document.createElement("div");

      const title = document.createElement("h1");
      title.innerText = val.title;
      block.appendChild(title);
      this.section.appendChild(block);
    });
  }
}