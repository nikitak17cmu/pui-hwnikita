const toggles = {
  "Digital Artist": "Procreate, Adobe Illustrator, Photoshop",
  Painter: "Oil, Acrylic, Pencil, Pastel",
  "Generative Creator": "Processing, Java, Supercollider, Max8, P5",
  Designer: "Figma",
};
document.querySelectorAll(".mediums li").forEach((li) => {
  const firstLabel = li.textContent;
  let status = true;

  li.addEventListener("click", () => {
    if (status) {
      li.textContent = toggles[firstLabel];
    } else {
      li.textContent = firstLabel;
    }
    status = !status;
  });
});
