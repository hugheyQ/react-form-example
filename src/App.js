import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, NotFound } from './pages';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
