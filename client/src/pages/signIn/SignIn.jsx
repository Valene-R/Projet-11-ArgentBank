import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import Form from '../../components/form/Form';

const SignIn = () => {
	return (
		<>
			<NavBar />
			<main>
				<Form />
			</main>
			<Footer />
		</>
	);
};

export default SignIn;