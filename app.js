const prayers = [
  { key: "subuh", name: "Sholat Subuh", rakaat: 2 },
  { key: "dzuhur", name: "Sholat Dzuhur", rakaat: 4 },
  { key: "ashar", name: "Sholat Ashar", rakaat: 4 },
  { key: "maghrib", name: "Sholat Maghrib", rakaat: 3 },
  { key: "isya", name: "Sholat Isya", rakaat: 4 },
];

const list = document.getElementById("prayer-list");

prayers.forEach(p => {
  const li = document.createElement("li");
  li.textContent = `${p.name} (${p.rakaat} rakaat)`;
  li.addEventListener("click", () => {
    window.location.href = `detail.html?p=${p.key}`;
  });
  list.appendChild(li);
});
