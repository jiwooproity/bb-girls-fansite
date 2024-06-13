'use client';

import './aurora.css';

import useAuroraCavnas from '../../hooks/use-aurora-canvas';

const Aurora = () => {
  const [canvasRef] = useAuroraCavnas();

  return (
    <div className="canvas-wrapper">
      <canvas id="aurora-canvas" ref={canvasRef} />
    </div>
  );
};

export default Aurora;
