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
      console.log(val);
      const block = document.createElement("div");

      const title = document.createElement("h1");
      const detail = document.createElement("div");
      detail.classList.add('movieDetail');
      title.innerText = val.title;
      detail.innerText = val.summary;
      block.appendChild(title);
      title.appendChild(detail);
      this.section.appendChild(block);
    });
  }
}