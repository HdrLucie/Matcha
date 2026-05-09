import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

export default function Index() {
	const navigate = useNavigate();
	return (
		<>
		<div className="title">MATCHA</div>
		<div style={{ margin: '20px', display: 'flex', justifyContent: 'center'}}>
		<button className="btn-index" onClick={() => navigate('/register')}>SIGN UP</button>
		<button className="btn-index">LOGIN</button>
		</div>
		</>
	);
}
