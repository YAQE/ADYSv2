import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
}

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getReducedMotionSnapshot() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  title,
  showUserInfo = true,
  enableTilt = false,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const [transform, setTransform] = useState('');
  const [imgTransform, setImgTransform] = useState('');
  const [active, setActive] = useState(false);

  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, () => false);
  const tiltOn = enableTilt && !reducedMotion;

  useEffect(
    () => () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    },
    []
  );

  const applyTilt = useCallback((clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = ((clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((clientY - r.top) / r.height - 0.5) * 2;
    const ry = nx * 22;
    const rx = ny * -20;
    setTransform(`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(28px) scale3d(1.07, 1.07, 1)`);
    /* İçte hafif ters kaydırma → derinlik */
    const mx = nx * -6;
    const my = ny * -6;
    setImgTransform(`translate3d(${mx}px, ${my}px, 0) scale3d(1.06, 1.06, 1)`);
  }, []);

  const onMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!tiltOn) return;
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        applyTilt(e.clientX, e.clientY);
        frameRef.current = 0;
      });
    },
    [applyTilt, tiltOn]
  );

  const onLeave = useCallback(() => {
    setActive(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setTransform('');
    setImgTransform('');
  }, []);

  const onEnter = useCallback(() => {
    if (tiltOn) setActive(true);
  }, [tiltOn]);

  const wrapClass = ['profile-card__avatar-wrap', tiltOn && 'profile-card__avatar-wrap--motion', active && tiltOn && 'profile-card__avatar-wrap--lit']
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`profile-card ${tiltOn ? 'profile-card--stage' : ''}`}>
      <div
        ref={wrapRef}
        className={wrapClass}
        style={transform ? { transform } : undefined}
        onPointerMove={tiltOn ? onMove : undefined}
        onPointerEnter={enableTilt ? onEnter : undefined}
        onPointerLeave={enableTilt ? onLeave : undefined}
      >
        <img
          src={avatarUrl}
          alt={`${name} — profil`}
          className="profile-card__avatar"
          width={168}
          height={168}
          decoding="async"
          style={imgTransform ? { transform: imgTransform } : undefined}
          draggable={false}
        />
      </div>
      <h3 className={`profile-card__name ${active && tiltOn ? 'profile-card__name--lit' : ''}`}>{name}</h3>
      {showUserInfo ? <p className={`profile-card__title ${active && tiltOn ? 'profile-card__title--lit' : ''}`}>{title}</p> : null}
    </div>
  );
};

export default ProfileCard;
