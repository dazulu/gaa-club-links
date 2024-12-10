import React, { useCallback, useEffect, useRef } from "react";

import styles from "../styles/Snow.module.css";

const CANVAS_HEIGHT = 0.3;
const SNOWFLAKE_AMOUNT = 50;
const SNOWFLAKE_SIZE = {
  min: 1,
  max: 4,
};
const SNOWFLAKE_SPEED = {
  min: 0.2,
  max: 1.2,
};

type Snowflake = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number | null;
};

export const Snow = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const setupCanvas = useCallback(() => {
    if (!ref.current) return null;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * CANVAS_HEIGHT;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return { canvas, ctx };
  }, []);

  const createSnowflake = useCallback(
    (canvas: HTMLCanvasElement, isAnimated = true, index = 0): Snowflake => ({
      x: Math.random() * canvas.width,
      y: isAnimated
        ? -20 - (index * canvas.height) / SNOWFLAKE_AMOUNT
        : Math.random() * canvas.height,
      size:
        Math.random() * (SNOWFLAKE_SIZE.max - SNOWFLAKE_SIZE.min) +
        SNOWFLAKE_SIZE.min,
      speed:
        Math.random() * (SNOWFLAKE_SPEED.max - SNOWFLAKE_SPEED.min) +
        SNOWFLAKE_SPEED.min,
      opacity: isAnimated ? null : Math.random() * 0.5 + 0.2,
    }),
    []
  );

  const drawSnowflake = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      flake: Snowflake,
      canvas: HTMLCanvasElement
    ) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${
        flake.opacity ?? 1 - flake.y / canvas.height
      })`;
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fill();
    },
    []
  );

  const renderStaticSnow = useCallback(() => {
    const setup = setupCanvas();
    if (!setup) return;
    const { canvas, ctx } = setup;

    Array(SNOWFLAKE_AMOUNT)
      .fill(undefined)
      .map(() => createSnowflake(canvas, false))
      .forEach((flake) => drawSnowflake(ctx, flake, canvas));
  }, [setupCanvas, createSnowflake, drawSnowflake]);

  const startSnowAnimation = useCallback(() => {
    const setup = setupCanvas();
    if (!setup) return;

    const { canvas, ctx } = setup;
    let animationFrame: number;

    const snowflakes = Array(SNOWFLAKE_AMOUNT)
      .fill(undefined)
      .map((_event, index) => createSnowflake(canvas, true, index));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y / 30) * 0.5;

        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }

        drawSnowflake(ctx, flake, canvas);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [setupCanvas, createSnowflake, drawSnowflake]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        renderStaticSnow();
      } else {
        startSnowAnimation();
      }
    };

    mediaQuery.addEventListener("change", handleMotionPreference);
    handleMotionPreference({
      matches: mediaQuery.matches,
    } as MediaQueryListEvent);

    return () =>
      mediaQuery.removeEventListener("change", handleMotionPreference);
  }, [renderStaticSnow, startSnowAnimation]);

  return <canvas ref={ref} className={styles.snowverlay} />;
};
