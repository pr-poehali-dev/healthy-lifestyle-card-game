import { useState } from "react";

const CARD_BACK = "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/d56939de-fe98-493c-b274-a01f0929d358.jpg";

const CARDS = [
  {
    id: 1,
    title: "Горная вершина",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/e92c39d7-9867-47d3-8648-e0478b5e01e1.jpg",
    text: "Здоровый образ жизни — это путь к вершине, цель которого — крепкое здоровье. Каждый шаг (утренняя зарядка, стакан воды, прогулка) приближает вас к цели, а срывы лишь возвращают на пару шагов назад.",
    color: "#4a7c59",
    accent: "#8fbc5a",
  },
  {
    id: 2,
    title: "Сад с плодами",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/25b9805c-1c6c-4b22-b0e0-001fe1c185cf.jpg",
    text: "Тело — это сад, а питание — уход за ним. Чем качественнее «удобрения» (продукты), тем вкуснее и полезнее плоды (энергия, настроение, иммунитет).",
    color: "#7a6c2e",
    accent: "#d4a017",
  },
  {
    id: 3,
    title: "Река",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/5e73563a-4862-458b-9a60-34112819d695.jpg",
    text: "Вода — источник жизни, а питьевой режим — это течение реки в нашем организме. Пересыхание приводит к застою, а регулярное питье — к ясности ума и бодрости.",
    color: "#2e6b7a",
    accent: "#5bc4d4",
  },
  {
    id: 4,
    title: "Башня из кирпичей",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/3039739e-2adc-4a8f-872b-0081b17a86cc.jpg",
    text: "Здоровье строится по кирпичику: сон, питание, спорт, гигиена, эмоции. Уберите один элемент — и конструкция начнет шататься.",
    color: "#7a3e2e",
    accent: "#d47a5b",
  },
  {
    id: 5,
    title: "Дерево",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/9f3fb869-b017-453e-8d6b-729ffcf7824a.jpg",
    text: "Корни — это базовые привычки (режим сна, вода, овощи), ствол — физическая активность, крона — энергия и настроение. Без корней крона не вырастет.",
    color: "#3d5a1e",
    accent: "#7ab54a",
  },
  {
    id: 6,
    title: "Лабиринт",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/7378364c-d1f5-456a-a368-7813f4c96fc5.jpg",
    text: "Путь к здоровому образу жизни часто тернист. Важно не бояться тупиков (срывов на сладкое), а учиться делать правильный выбор на распутье (йогурт вместо торта).",
    color: "#5a3d7a",
    accent: "#a07ac4",
  },
  {
    id: 7,
    title: "Корабль в море",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/8d4ead57-b7e1-49d1-9041-55ec3b0a6cc8.jpg",
    text: "Мы — капитаны своего здоровья. Ветер — это мотивация, штурвал — наши решения, а шторм — временные трудности (усталость, лень). Главное — держать курс.",
    color: "#1e4d6b",
    accent: "#4a9bc4",
  },
  {
    id: 8,
    title: "Пазл",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/2968f277-f6c8-45f8-9f51-c53366f9a6aa.jpg",
    text: "ЗОЖ — это пазл, в котором не хватает деталей. Найти свою деталь (например, 10 000 шагов в день) — значит собрать целостную картину здоровья.",
    color: "#6b4a1e",
    accent: "#c4954a",
  },
  {
    id: 9,
    title: "Лампа",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/0e30e273-a206-4197-a9c8-97b8bb93c57d.jpg",
    text: "Сон — это «зарядка» для нашей лампы. Если свет тускнеет (из-за недосыпа), мы не видим пути и теряем энергию. Полноценный сон — залог яркого света.",
    color: "#7a6b1e",
    accent: "#d4c44a",
  },
  {
    id: 10,
    title: "Мост через пропасть",
    image: "https://cdn.poehali.dev/projects/ade8ee66-2862-4423-855f-c733c837cee6/files/8d4955aa-b854-4678-8c2b-29e3ccbaa575.jpg",
    text: "Привычки — это мост между «хочу» (желанием быть здоровым) и «делаю» (реальными действиями). Пока мост не построен, мы остаёмся на берегу намерений.",
    color: "#2e5e4a",
    accent: "#5ab894",
  },
];

function getRandomCard() {
  return CARDS[Math.floor(Math.random() * CARDS.length)];
}

export default function Index() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentCard, setCurrentCard] = useState(getRandomCard());
  const [showParticles, setShowParticles] = useState(false);

  const handleReveal = () => {
    if (isFlipping) return;
    if (isFlipped) {
      setIsFlipping(true);
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentCard(getRandomCard());
        setIsFlipping(false);
      }, 500);
    } else {
      setIsFlipping(true);
      setShowParticles(true);
      setTimeout(() => {
        setIsFlipped(true);
        setIsFlipping(false);
        setTimeout(() => setShowParticles(false), 1200);
      }, 500);
    }
  };

  return (
    <div className="app-root">
      <div className="bg-texture" />
      <div className="bg-radial" />

      <div className="leaves-container" aria-hidden>
        {["🌿","🍃","🌱","🌿","🍃","🌱","🌿","🍃"].map((leaf, i) => (
          <span key={i} className={`leaf leaf-${i + 1}`}>{leaf}</span>
        ))}
      </div>

      <main className="main-content">
        <header className="header">
          <h1 className="app-title">
            Вектор
            <span className="title-accent"> ЗОЖ</span>
          </h1>
          <p className="app-subtitle">Загляни внутрь себя — позволь карте открыть послание дня</p>
        </header>

        <div className="card-scene">
          <div
            className="card-glow"
            style={{
              background: isFlipped
                ? `radial-gradient(ellipse at center, ${currentCard.accent}66 0%, transparent 65%)`
                : "radial-gradient(ellipse at center, #8fbc5a55 0%, transparent 65%)"
            }}
          />

          {showParticles && (
            <div className="particles" aria-hidden>
              {["🌱","✨","🌿","💧","🌸","⭐","🍃","🌼"].map((p, i) => (
                <span key={i} className={`particle particle-${i + 1}`}>{p}</span>
              ))}
            </div>
          )}

          <div
            className={`card-wrapper${isFlipped ? " flipped" : ""}`}
            onClick={handleReveal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleReveal()}
          >
            <div className="card-inner">
              <div className="card-face card-back-face">
                <img src={CARD_BACK} alt="Рубашка карты" className="card-img" />
                <div className="card-shimmer" />
              </div>

              <div className="card-face card-front-face">
                <div
                  className="card-front-inner"
                  style={{
                    "--card-color": currentCard.color,
                    "--card-accent": currentCard.accent,
                  } as React.CSSProperties}
                >
                  <div className="card-num">#{currentCard.id.toString().padStart(2, "0")}</div>
                  <div className="card-img-wrap">
                    <img src={currentCard.image} alt={currentCard.title} className="card-img" />
                    <div className="card-img-fade" />
                  </div>
                  <div className="card-body">
                    <h2 className="card-name">{currentCard.title}</h2>
                    <p className="card-desc">{currentCard.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="actions">
          <button
            className={`reveal-btn${isFlipped ? " reveal-btn--next" : ""}`}
            onClick={handleReveal}
            disabled={isFlipping}
          >
            {isFlipped ? "Другая карта" : "Открыть карту дня"}
          </button>
          {isFlipped && (
            <p className="hint">Нажми на карту или кнопку, чтобы получить новое послание</p>
          )}
        </div>
      </main>

      <footer className="app-footer">
        Слушай своё тело · Доверяй интуиции · Живи в гармонии
      </footer>
    </div>
  );
}