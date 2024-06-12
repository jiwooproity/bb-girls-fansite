'use client';

import { type RefObject } from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

interface ParticleColorType {
  r: number;
  g: number;
  b: number;
}

type AuroraCanvasHooksType = () => [RefObject<HTMLCanvasElement>];

const COLORS: ParticleColorType[] = [
  { r: 0, g: 0, b: 0 },
  { r: 97, g: 30, b: 19 },
  { r: 80, g: 30, b: 26 },
  { r: 97, g: 30, b: 19 },
  { r: 0, g: 0, b: 0 },
];

const MAX_RADIUS = 1000;
const MIN_RADIUS = 600;

class Particle {
  x: number;
  y: number;
  radius: number;
  rgb: ParticleColorType;
  vx: number;
  vy: number;
  sinValue: number;

  constructor(x: number, y: number, radius: number, rgb: ParticleColorType) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;
    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;
    this.sinValue = Math.random();
  }

  createGradient(ctx: CanvasRenderingContext2D) {
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.1,
      this.x,
      this.y,
      this.radius,
    );

    gradient.addColorStop(
      0,
      `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`,
    );

    gradient.addColorStop(
      1,
      `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`,
    );

    return gradient;
  }

  animate(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number,
  ) {
    this.sinValue += 0.01;
    this.radius += Math.sin(this.sinValue);

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 10;
    }

    ctx.beginPath();
    ctx.fillStyle = this.createGradient(ctx);
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}

const useAuroraCavnas: AuroraCanvasHooksType = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
  const [pixelRatio, setPixelRatio] = useState<number>(1);

  const getParentStage = () => {
    const wrapper = document.querySelector('.canvas-wrapper') as HTMLDivElement;
    return [wrapper.clientWidth, wrapper.clientHeight] as [number, number];
  };

  const canvasInit = useCallback(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const getCtx = canvas?.getContext('2d') as CanvasRenderingContext2D;

    const [width, height] = getParentStage();
    canvas.width = width;
    canvas.height = height;

    setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 픽셀의 수
    setCtx(getCtx);
  }, []);

  const canvasResize = useCallback(() => {
    const [width, height] = getParentStage();

    const canvas = canvasRef.current as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;

    ctx?.scale(pixelRatio, pixelRatio);
  }, [ctx, pixelRatio]);

  const createParticles = (x: number, y: number, sin: number) => {
    const radius = sin * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
    return COLORS.map(color => new Particle(x, y, radius, color));
  };

  useEffect(() => {
    canvasInit();
  }, [canvasInit]);

  useEffect(() => {
    window.addEventListener('resize', canvasResize);
    return () => {
      window.removeEventListener('resize', canvasResize);
    };
  }, [canvasResize]);

  useEffect(() => {
    if (ctx) {
      const canvas = canvasRef.current as HTMLCanvasElement;

      const x = Math.random() * canvas.clientWidth;
      const y = Math.random() * canvas.clientHeight;
      const sin = Math.random();

      const particles = createParticles(x, y, sin);

      const [width, height] = getParentStage();

      const runAnimate = (particle: Particle) => {
        particle.animate(ctx, width, height);
      };

      const draw = () => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
        particles.forEach(runAnimate);
        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    }
  }, [ctx]);

  return [canvasRef];
};

export default useAuroraCavnas;
