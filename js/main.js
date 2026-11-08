// 행성 자료: NASA Solar System Exploration 기준 (거리는 태양까지의 평균 거리)
const PLANETS = [
  {
    id: "mercury", name: "수성", en: "Mercury", type: "rocky", c1: "#c9c3bb", c2: "#6e6862",
    diameter: 4879, distance: "약 5,790만 km", year: "88일", day: "약 59일 (자전)", moons: "0개", temp: "-173 ~ 427°C",
    desc: "태양에 가장 가깝고 가장 작은 행성입니다. 공기(대기)가 거의 없어 낮과 밤의 온도 차이가 매우 큽니다.",
    fact: "수성의 1년(88일)은 하루의 길이(해가 떴다가 다시 뜨기까지 약 176일)보다 짧습니다."
  },
  {
    id: "venus", name: "금성", en: "Venus", type: "rocky", c1: "#f3d9a4", c2: "#b8873e",
    diameter: 12104, distance: "약 1억 820만 km", year: "225일", day: "약 243일 (자전, 반대 방향)", moons: "0개", temp: "평균 약 464°C",
    desc: "크기가 지구와 비슷하지만, 두꺼운 이산화탄소 대기가 열을 가둬 태양계에서 가장 뜨거운 행성입니다.",
    fact: "금성은 다른 행성들과 반대 방향으로 자전해서, 금성에서는 해가 서쪽에서 뜹니다."
  },
  {
    id: "earth", name: "지구", en: "Earth", type: "rocky", c1: "#7cc4ff", c2: "#1f5fa8",
    diameter: 12756, distance: "약 1억 4,960만 km", year: "365.25일", day: "약 24시간", moons: "1개", temp: "평균 약 15°C",
    desc: "우리가 사는 행성입니다. 표면에 액체 상태의 물이 있고, 생명체가 확인된 유일한 곳입니다.",
    fact: "태양에서 지구까지의 거리(약 1억 5천만 km)를 1 AU(천문단위)라고 부르며, 우주 거리의 기준으로 씁니다."
  },
  {
    id: "mars", name: "화성", en: "Mars", type: "rocky", c1: "#f08a5d", c2: "#8c2f12",
    diameter: 6792, distance: "약 2억 2,790만 km", year: "687일", day: "약 24시간 37분", moons: "2개", temp: "평균 약 -65°C",
    desc: "표면의 산화철(녹) 때문에 붉게 보이는 행성입니다. 과거에 물이 흘렀던 흔적이 남아 있습니다.",
    fact: "화성에는 태양계에서 가장 큰 화산인 올림푸스 산이 있습니다. 높이가 에베레스트의 약 2.5배입니다."
  },
  {
    id: "jupiter", name: "목성", en: "Jupiter", type: "gas", c1: "#f1d3a8", c2: "#a0643a",
    diameter: 142984, distance: "약 7억 7,850만 km", year: "약 11.9년", day: "약 10시간", moons: "95개 이상", temp: "평균 약 -110°C",
    desc: "태양계에서 가장 큰 행성으로, 주로 수소와 헬륨으로 이루어진 가스 행성입니다.",
    fact: "목성의 대적점(큰 붉은 점)은 지구보다 큰 거대한 폭풍으로, 수백 년 동안 관측되고 있습니다."
  },
  {
    id: "saturn", name: "토성", en: "Saturn", type: "gas", c1: "#f5e3b5", c2: "#b08d4f", ring: true,
    diameter: 120536, distance: "약 14억 3,000만 km", year: "약 29.4년", day: "약 10시간 40분", moons: "270개 이상", temp: "평균 약 -140°C",
    desc: "얼음과 암석 조각으로 된 아름다운 고리를 가진 가스 행성입니다. 알려진 위성이 가장 많습니다.",
    fact: "토성은 밀도가 물보다 낮습니다. 아주 큰 욕조가 있다면 물에 뜰 정도입니다."
  },
  {
    id: "uranus", name: "천왕성", en: "Uranus", type: "ice", c1: "#c8f1f2", c2: "#4fa3b0",
    diameter: 51118, distance: "약 28억 7,000만 km", year: "약 84년", day: "약 17시간 (반대 방향)", moons: "28개 이상", temp: "평균 약 -195°C",
    desc: "물·암모니아·메탄 얼음이 많은 얼음 행성입니다. 대기의 메탄 때문에 청록색으로 보입니다.",
    fact: "천왕성은 자전축이 약 98° 기울어져 있어, 옆으로 누운 채 굴러가듯 태양 주위를 돕니다."
  },
  {
    id: "neptune", name: "해왕성", en: "Neptune", type: "ice", c1: "#7fa8ff", c2: "#22389e",
    diameter: 49528, distance: "약 45억 km", year: "약 165년", day: "약 16시간", moons: "16개", temp: "평균 약 -200°C",
    desc: "태양에서 가장 먼 행성입니다. 짙은 파란색을 띠며, 태양계에서 가장 강한 바람이 붑니다.",
    fact: "해왕성은 망원경으로 찾기 전에 수학 계산으로 위치가 먼저 예측된 행성입니다 (1846년 발견)."
  }
];

const TYPE_LABEL = { rocky: "암석 행성", gas: "가스 행성", ice: "얼음 행성" };
const EARTH = PLANETS.find(p => p.id === "earth").diameter;
const MAX = Math.max(...PLANETS.map(p => p.diameter));

const list = document.getElementById("planet-list");
const bars = document.getElementById("size-bars");
const dialog = document.getElementById("detail");

function planetStyle(p, size) {
  return `--c1:${p.c1};--c2:${p.c2};--size:${size}px`;
}

function planetClass(p) {
  return p.ring ? "planet has-ring" : "planet";
}

// 카드 목록
list.innerHTML = PLANETS.map((p, i) => `
  <li data-type="${p.type}">
    <button type="button" class="card" data-id="${p.id}">
      <div class="${planetClass(p)}" style="${planetStyle(p, 80)}" aria-hidden="true"></div>
      <span class="order">태양에서 ${i + 1}번째 · ${TYPE_LABEL[p.type]}</span>
      <h3>${p.name}<span>${p.en}</span></h3>
      <p>${p.desc}</p>
    </button>
  </li>`).join("");

// 크기 비교 막대
bars.innerHTML = PLANETS.map(p => `
  <li>
    <span>${p.name}</span>
    <div class="bar" style="--c1:${p.c1};--c2:${p.c2}"><span style="width:${(p.diameter / MAX * 100).toFixed(1)}%"></span></div>
    <span class="num">${(p.diameter / EARTH).toFixed(2)}</span>
  </li>`).join("");

// 종류 필터
document.querySelector(".filters").addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  const type = btn.dataset.type;
  document.querySelectorAll(".filter").forEach(b => {
    const on = b === btn;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", String(on));
  });
  list.querySelectorAll("li").forEach(li => {
    li.hidden = type !== "all" && li.dataset.type !== type;
  });
});

// 상세 창
function openDetail(p) {
  const planet = document.getElementById("detail-planet");
  planet.className = planetClass(p);
  planet.setAttribute("style", planetStyle(p, 88));
  document.getElementById("detail-type").textContent = `${TYPE_LABEL[p.type]} · ${p.en}`;
  document.getElementById("detail-name").textContent = p.name;
  document.getElementById("detail-desc").textContent = p.desc;
  document.getElementById("detail-fact").textContent = "💡 " + p.fact;
  const stats = [
    ["지름", `${p.diameter.toLocaleString("ko-KR")} km`],
    ["지구 대비 크기", `${(p.diameter / EARTH).toFixed(2)}배`],
    ["태양까지 거리", p.distance],
    ["공전 주기 (1년)", p.year],
    ["자전 주기", p.day],
    ["위성 수", p.moons],
    ["표면 온도", p.temp]
  ];
  document.getElementById("detail-stats").innerHTML =
    stats.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  dialog.showModal();
}

list.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  openDetail(PLANETS.find(p => p.id === card.dataset.id));
});

dialog.addEventListener("click", e => {
  // 닫기 버튼 또는 바깥(배경) 클릭 시 닫기
  if (e.target.closest("[data-close]")) return dialog.close();
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  if (outside) dialog.close();
});
