import SplitChoice from '../components/SplitChoice';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
      }}
    >
      <header
        style={{
          borderBottom: '1px solid #ddd',
          padding: '24px',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h1 style={{ margin: 0, fontSize: '3rem' }}>Choose a side</h1>
          <p style={{ margin: '8px 0 0 0', fontSize: '2rem'
           }}>
            Explore engineering or photography
          </p>
        </div>
      </header>

      <div
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        <SplitChoice />
      </div>
    </main>
  );
}