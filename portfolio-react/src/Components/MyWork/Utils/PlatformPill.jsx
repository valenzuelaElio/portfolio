
import './PlatformPill.css';

const platformIcons = {
    Steam: 'src/assets/icons/Platforms/Icon_Steam.svg',
    GOG: 'src/assets/icons/Platforms/icon_gog.svg',
    'itch.io': 'src/assets/icons/Platforms/icon_itchio.svg',
    Windows : 'src/assets/icons/Platforms/icon_windows.svg',
    WebGL : 'src/assets/icons/Platforms/icon_webgl.svg'
};

const PlatformPill = ({ platform, href }) => {
  const icon = platformIcons[platform];

  const content = (
    <>
      {icon ? (
        <img
          className="platform-pill-icon"
          src={icon}
          alt=""
          aria-hidden="true"
        />
      ) : (
        <Gamepad2
          className="platform-pill-icon"
          size={16}
          aria-hidden="true"
        />
      )}

      <span>{platform}</span>
    </>
  );

  if (href) {
    return (
      <a
        className="platform-pill"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <span className="platform-pill">{content}</span>;
};

export default PlatformPill;
