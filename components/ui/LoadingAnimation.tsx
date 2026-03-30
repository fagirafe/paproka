"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Анимация загрузки страницы:
 * 1. Красный экран с логотипом "паприка" (тон-в-тон, едва видим)
 * 2. Логотип "заполняется" белым снизу вверх через clip-path
 * 3. Логотип уменьшается и перемещается в левый верхний угол
 * 4. Красный фон сжимается в hero-секцию
 * 5. Основной контент появляется
 */

/* SVG-путь логотипа "паприка" — воссоздан по изображениям */
function PaprikaLogo({ className, fillColor }: { className?: string; fillColor: string }) {
  return (
    <svg
      viewBox="0 0 780 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* п */}
      <path
        d="M0 118V2h20v96h52V2h20v116H0z"
        fill={fillColor}
      />
      {/* а */}
      <path
        d="M126 118c-8 0-15.5-1.7-22.5-5-7-3.4-13-8-18-14-5-6-9-13-11.5-21C71.5 70 70 61.3 70 52c0-14 3-26 9-36s14-17.3 24-22S124 0 136 0s22 2.5 32 7.5 17.7 12 23.5 21S200 47 200 60v58h-20V96h-2c-3 5-7.2 9.5-12.5 13.5S154 118 143 118h-17zm19-18c8 0 15-2 21-6s10.8-9 14.5-15 5.5-12.7 5.5-20-1.8-14-5.5-20-8.5-10.8-14.5-14.5-12.7-5.5-20.5-5.5-15 1.8-21 5.5S113.7 33 110 39s-5.5 12.7-5.5 20 1.8 14 5.5 20 8.2 10.8 14 14.5 12.3 5.5 20 5.5z"
        fill={fillColor}
      />
      {/* н (second п) */}
      <path
        d="M218 118V2h20v96h52V2h20v116h-92z"
        fill={fillColor}
      />
      {/* р */}
      <path
        d="M334 118V2h20v16h2c3-5 7.5-9.5 13.5-13.5S381 0 392 0c11 0 20.7 2.7 29 8s14.7 12.3 19 21 6.5 18.2 6.5 28.5-2.2 19.5-6.5 28.5-10.7 16.2-19 21.5-18 8-29 8c-11 0-19.7-1.5-26-4.5s-11-6.7-14-11.5h-2v18H334zm56-18c8 0 15-2 21-6s10.8-9 14.5-15 5.5-12.7 5.5-20-1.8-14-5.5-20-8.5-10.8-14.5-14.5-13-5.5-21-5.5-15 1.8-21 5.5-10.8 8.5-14.5 14.5-5.5 12.7-5.5 20 1.8 14 5.5 20 8.5 11 14.5 15 13 6 21 6z"
        fill={fillColor}
      />
      {/* и */}
      <path
        d="M470 118V2h20v68L544 2h24l-54 68 54 48h-24l-54-48v48h-20z"
        fill={fillColor}
      />
      {/* к */}
      <path
        d="M576 118V2h20v68L650 2h24l-54 68 54 48h-24l-54-48v48h-20z"
        fill={fillColor}
      />
      {/* а (final) */}
      <path
        d="M698 118c-8 0-15.5-1.7-22.5-5-7-3.4-13-8-18-14-5-6-9-13-11.5-21-2.5-8-3.5-16.7-3.5-26 0-14 3-26 9-36s14-17.3 24-22 21.5-7 33.5-7 22 2.5 32 7.5 17.7 12 23.5 21S774 47 774 60v58h-20V96h-2c-3 5-7.2 9.5-12.5 13.5S726 118 715 118h-17zm19-18c8 0 15-2 21-6s10.8-9 14.5-15 5.5-12.7 5.5-20-1.8-14-5.5-20-8.5-10.8-14.5-14.5-12.7-5.5-20.5-5.5-15 1.8-21 5.5-10.8 8.5-14.5 14.5-5.5 12.7-5.5 20 1.8 14 5.5 20 8.2 10.8 14 14.5 12.3 5.5 20 5.5z"
        fill={fillColor}
      />
    </svg>
  );
}

/* Текстовый логотип, используем шрифт */
function PaprikaTextLogo({
  className,
  fillPercent,
  style,
}: {
  className?: string;
  fillPercent: number;
  style?: React.CSSProperties;
}) {
  return (
    <div className={className} style={{ position: "relative", ...style }}>
      {/* Слой 1: Полупрозрачный (тон-в-тон с фоном) */}
      <span
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 800,
          fontSize: "inherit",
          lineHeight: 1,
          color: "rgba(255,255,255,0.15)",
          userSelect: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
        }}
      >
        паприка
      </span>
      {/* Слой 2: Белый с clip-path (заполнение снизу вверх) */}
      <span
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontWeight: 800,
          fontSize: "inherit",
          lineHeight: 1,
          color: "#ffffff",
          position: "absolute",
          inset: 0,
          userSelect: "none",
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
          clipPath: `inset(${100 - fillPercent}% 0 0 0)`,
          transition: "clip-path 0.05s linear",
        }}
      >
        паприка
      </span>
    </div>
  );
}

const PHASE_DURATIONS = {
  INITIAL_DELAY: 300,
  FILL_DURATION: 1200,
  HOLD_AFTER_FILL: 400,
  SHRINK_DURATION: 800,
  REVEAL_DURATION: 600,
} as const;

type LoadingPhase = "filling" | "filled" | "shrinking" | "revealing" | "done";

export function LoadingAnimation({ children }: { children: React.ReactNode }) {
  const [phase, set_phase] = useState<LoadingPhase>("filling");
  const [fill_percent, set_fill_percent] = useState(0);

  const advance_to_filled = useCallback(() => {
    set_phase("filled");
    setTimeout(() => {
      set_phase("shrinking");
      setTimeout(() => {
        set_phase("revealing");
        setTimeout(() => {
          set_phase("done");
        }, PHASE_DURATIONS.REVEAL_DURATION);
      }, PHASE_DURATIONS.SHRINK_DURATION);
    }, PHASE_DURATIONS.HOLD_AFTER_FILL);
  }, []);

  // Фаза заполнения
  useEffect(() => {
    if (phase !== "filling") return;

    const start = Date.now();
    const delay = PHASE_DURATIONS.INITIAL_DELAY;
    const duration = PHASE_DURATIONS.FILL_DURATION;

    let raf_id: number;

    function tick() {
      const elapsed = Date.now() - start - delay;
      if (elapsed < 0) {
        raf_id = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      set_fill_percent(eased * 100);

      if (progress >= 1) {
        advance_to_filled();
        return;
      }
      raf_id = requestAnimationFrame(tick);
    }

    raf_id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf_id);
  }, [phase, advance_to_filled]);

  // Блокируем скролл во время анимации
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const is_animating = phase !== "done";

  return (
    <>
      <AnimatePresence>
        {is_animating && (
          <motion.div
            key="loading-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: phase === "shrinking" || phase === "revealing" ? "flex-start" : "center",
              justifyContent: "center",
              backgroundColor: "#ee2733",
              pointerEvents: is_animating ? "all" : "none",
            }}
          >
            {/* Фаза заполнения и задержки */}
            {(phase === "filling" || phase === "filled") && (
              <PaprikaTextLogo
                fillPercent={fill_percent}
                className="loading-logo-text"
                style={{
                  fontSize: "clamp(48px, 10vw, 120px)",
                }}
              />
            )}

            {/* Фаза сжатия: логотип уменьшается и уезжает в угол */}
            {phase === "shrinking" && (
              <motion.div
                initial={{
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  scale: 0.35,
                  x: "-38vw",
                  y: "-42vh",
                }}
                transition={{
                  duration: PHASE_DURATIONS.SHRINK_DURATION / 1000,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "clamp(48px, 10vw, 120px)",
                }}
              >
                <PaprikaTextLogo fillPercent={100} className="loading-logo-text" />
              </motion.div>
            )}

            {/* Фаза раскрытия: красный фон уезжает/растворяется */}
            {phase === "revealing" && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: PHASE_DURATIONS.REVEAL_DURATION / 1000,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "#ee2733",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Основной контент */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
