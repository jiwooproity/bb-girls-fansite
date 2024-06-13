'use client';

import { type RefObject } from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

import {
  Particle,
  MAX_RADIUS,
  MIN_RADIUS,
} from '../components/aurora/particle';

import { Control } from '../components/aurora/control';

type AuroraCanvasHooksType = () => [RefObject<HTMLCanvasElement>];

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
      const [width, height] = getParentStage();

      const x = Math.random() * canvas.clientWidth;
      const y = Math.random() * canvas.clientHeight;
      const sin = Math.random();

      const control = new Control(ctx, MAX_RADIUS, MIN_RADIUS);
      const particles = control.createParticles(x, y, sin);

      const runAnimate = (particle: Particle) => {
        particle.animate(ctx, width, height);
      };

      const draw = () => {
        control.clear(width, height);
        particles.forEach(runAnimate);
        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    }
  }, [ctx]);

  return [canvasRef];
};

export default useAuroraCavnas;
