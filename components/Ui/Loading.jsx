import PropTypes from "prop-types";

import styles from "/styles/Loading.module.css";

const Loading = ({ label }) => {
	return (
		<div className="animate-fade-in fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-black z-full">
			<div className={`${styles.loading_container} relative w-20 h-20`}>
				<div className="one w-full h-full border-blue-700"></div>
				<div className="two inset-0 m-auto w-2/3 h-2/3 border-blue-700 border-4" />
				<div className="three inset-0 m-auto w-1/3 h-1/3 border-blue-700 border-2" />
			</div>
			<p className="text-white text-xl m-2">{label}...</p>
		</div>
	);
};

Loading.defaultProps = {
	label: "Cargando",
};

Loading.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Loading;
