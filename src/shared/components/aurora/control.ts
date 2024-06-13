import { COLORS, Particle } from './particle';

export class Control {
  private ctx: CanvasRenderingContext2D;
  private maxRadius: number;
  private minRadius: number;
  public bgColor: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    maxRadius: number,
    minRadius: number,
  ) {
    this.ctx = ctx;
    this.maxRadius = maxRadius;
    this.minRadius = minRadius;
    this.bgColor = '#000000';
  }

  clear(width: number, height: number) {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, width, height);
  }

  createParticles(x: number, y: number, sin: number) {
    const radius = sin * (this.maxRadius - this.minRadius) + this.minRadius;
    return COLORS.map(color => new Particle(x, y, radius, color));
  }
}
