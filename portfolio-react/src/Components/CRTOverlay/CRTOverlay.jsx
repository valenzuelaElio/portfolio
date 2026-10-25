
import './CRTOverlay.css';

const CRTOverlay = () => {
  return (
    <div className="crt-overlay" aria-hidden="true">
      <div className="crt-scanlines" />
      <div className="crt-vignette" />
      <div className="crt-flicker" />
    </div>
  );
};

export default CRTOverlay;
