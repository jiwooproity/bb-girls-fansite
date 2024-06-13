interface ParticleColorType {
  r: number;
  g: number;
  b: number;
}

export const COLORS: ParticleColorType[] = [
  { r: 255, g: 30, b: 19 },
  { r: 255, g: 30, b: 19 },
  { r: 97, g: 30, b: 19 },
  { r: 97, g: 30, b: 19 },
  { r: 80, g: 30, b: 26 },
  { r: 80, g: 0, b: 26 },
  { r: 80, g: 0, b: 26 },
  { r: 0, g: 0, b: 0 },
  { r: 0, g: 0, b: 0 },
];

export const MAX_RADIUS = 900;
export const MIN_RADIUS = 500;

export class Particle {
  private x: number;
  private y: number;
  private radius: number;
  private rgb: ParticleColorType;
  private vx: number;
  private vy: number;
  private sinValue: number;

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
