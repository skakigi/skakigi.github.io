import { Link } from 'react-router';

export default function SplitChoice() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        flex: 1,
        width: '100%',
      }}
    >
      <Link
        to="/photography"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid #ddd',
          background: '#dacfba',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{fontSize:'3rem'}}>Sun</h2>
          <p style={{fontSize: '2rem'}}> Photography</p>
        </div>
      </Link>

      <Link
        to="/engineering"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e1f29',
          color: 'white',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{fontSize:'3rem'}}> Moon</h2>
          <p style={{fontSize: '2rem'}}>Engineering</p>
        </div>
      </Link>
    </section>
  );
}