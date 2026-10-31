"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { projects } from "@/data/content";

const pad = (n: number) => String(n).padStart(2, "0");

/** How long navigation is locked while a transition plays, and how long the old slide lingers. */
const LOCK_MS = 720;
const LEAVE_MS = 840;

type Direction = -1 | 0 | 1;

export default function Work() {
  const count = projects.length;

  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [dir, setDir] = useState<Direction>(0);
  const [ready, setReady] = useState(false);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(0);
  const timerRef = useRef<number | undefined>(undefined);
  const startRef = useRef<{ x: number; y: number; locked: boolean } | null>(null);

  /* Start the entrance animation only once the showcase scrolls into view */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setReady(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const goTo = useCallback(
    (to: number, direction: 1 | -1) => {
      const now = performance.now();
      if (count < 2 || to === active || now < lockRef.current) return;
      lockRef.current = now + LOCK_MS;
      setDir(direction);
      setLeaving(active);
      setActive(to);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setLeaving(null), LEAVE_MS);
    },
    [active, count],
  );

  const next = useCallback(() => goTo((active + 1) % count, 1), [goTo, active, count]);
  const prev = useCallback(() => goTo((active - 1 + count) % count, -1), [goTo, active, count]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") prev();
  }

  /* Touch / pen swipe with live drag feedback (mouse users get the arrow buttons) */
  function onDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" || count < 2) return;
    startRef.current = { x: event.clientX, y: event.clientY, locked: false };
  }

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (!start.locked) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        start.locked = true;
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
      } else {
        return;
      }
    }
    setDrag(dx * 0.55);
  }

  function onUp(event: PointerEvent<HTMLDivElement>) {
    const start = startRef.current;
    startRef.current = null;
    if (!start || !start.locked) return;
    const dx = event.clientX - start.x;
    setDragging(false);
    setDrag(0);
    if (Math.abs(dx) > 70) {
      if (dx < 0) next();
      else prev();
    }
  }

  function onCancel() {
    startRef.current = null;
    setDragging(false);
    setDrag(0);
  }

  /* Mouse tilt + light glare on the preview frame (no re-render) */
  function onTilt(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    el.style.setProperty("--ry", `${((px - 0.5) * 10).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${((0.5 - py) * 8).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  }

  function onTiltEnd(event: PointerEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  }

  const progress = ((active + 1) / count) * 100;

  return (
    <section className="selected-work" id="work" aria-labelledby="work-title">
      <div className="work-heading">
        <h2 id="work-title" className="work-title">
          My <em>projects</em>
        </h2>
      </div>

      <div
        ref={rootRef}
        className={`showcase${ready ? " is-ready" : ""}`}
        role="group"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <div
          className="showcase-stage"
          data-dragging={dragging}
          style={{ "--drag": `${drag}px` } as CSSProperties}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onCancel}
        >
          {projects.map((project, index) => {
            const state = index === active ? "active" : index === leaving ? "leaving" : "idle";
            return (
              <article
                className="slide"
                key={project.name}
                data-state={state}
                data-dir={dir}
                style={{ "--pc": project.accent } as CSSProperties}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}: ${project.name}`}
                inert={state !== "active"}
              >
                <div className="slide-copy">
                  <p className="slide-eyebrow reveal" style={{ "--i": 0 } as CSSProperties}>
                    <span>{pad(index + 1)}</span>
                    <i aria-hidden="true" />
                    {project.category}
                  </p>
                  <h3 className="slide-title reveal" style={{ "--i": 1 } as CSSProperties}>
                    {project.name}
                  </h3>
                  <p className="slide-desc reveal" style={{ "--i": 2 } as CSSProperties}>
                    {project.description}
                  </p>
                  <dl className="slide-meta reveal" style={{ "--i": 3 } as CSSProperties}>
                    {project.status && (
                      <div className="is-live">
                        <dt>Status</dt>
                        <dd>{project.status}</dd>
                      </div>
                    )}
                    <div>
                      <dt>Year</dt>
                      <dd>{project.year}</dd>
                    </div>
                  </dl>
                  {project.link && (
                    <a
                      className="slide-link reveal"
                      style={{ "--i": 4 } as CSSProperties}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                <div className="slide-visual" onPointerMove={onTilt} onPointerLeave={onTiltEnd}>
                  <div className="frame-float">
                    <div className="frame">
                      <div className="frame-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span>{project.frameLabel}</span>
                      </div>
                      <div className="frame-shot">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          width={1600}
                          height={1000}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                        />
                        <span className="frame-glare" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  {project.status && <span className="slide-badge">{project.status}</span>}
                </div>
              </article>
            );
          })}
        </div>

        <div className="showcase-controls">
          <button className="showcase-arrow" type="button" onClick={prev} aria-label="Previous project">
            <span aria-hidden="true">←</span>
          </button>
          <button className="showcase-arrow" type="button" onClick={next} aria-label="Next project">
            <span aria-hidden="true">→</span>
          </button>
          <div className="showcase-progress" aria-live="polite">
            <strong>{pad(active + 1)}</strong>
            <span className="showcase-track" aria-hidden="true">
              <span className="showcase-fill" style={{ width: `${progress}%` }} />
            </span>
            <span>{pad(count)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
