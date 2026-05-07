import '../styles/index.css';

export default function Index() {
  return (
    <>
      <div className="title">MATCHA</div>
      <div style={{ margin: '20px', display: 'flex', justifyContent: 'center'}}>
        <button className="btn">SIGN UP</button>
        <button className="btn">LOGIN</button>
      </div>
    </>
  );
}
