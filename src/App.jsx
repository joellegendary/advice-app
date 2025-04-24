import { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (err) {
      console.error('Failed to fetch advice:', err);
      setAdvice('Oops! Could not fetch advice. Try again.');
    }
  }

  useEffect(() => {
    getAdvice(); // Fetch once when the app loads
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>😊 Good Advice for the Day.👍</h1>
      <p style={{ fontSize: '1.5rem' }}>{advice}</p>
      <button onClick={getAdvice} style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>
        Get New Advice
      </button>
      <p>You've received advice {count} {count === 1 ? 'time' : 'times'}.</p>
    </div>
  );
}
