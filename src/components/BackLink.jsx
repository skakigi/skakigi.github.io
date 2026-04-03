import { Link } from 'react-router';

export default function BackLink({ color = '#333' }) {
  return (
    <Link
      to="/"
      style={{
        display: 'inline-block',
        marginBottom: '24px',
        textDecoration: 'none',
        color,
      }}
    >
      ← Back
    </Link>
  );
}