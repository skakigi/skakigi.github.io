import BackLink from './BackLink';

export default function PageShell({
  children,
  background = '#ffffff',
  color = '#111111',
  showBackLink = false,
  backLinkColor,
  maxWidth = '1100px',
}) {
  return (
    <main
      style={{
        minHeight: '100dvh',
        background,
        color,
        padding: '24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth,
          margin: '0 auto',
        }}
      >
        {showBackLink && <BackLink color={backLinkColor || color} />}
        {children}
      </div>
    </main>
  );
}