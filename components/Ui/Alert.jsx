import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@/Ui/Button";
const iconClass = {
	success: "pi-check-circle text-green-600",
	error: "pi-times-circle text-red-600",
	info: "pi-info-circle text-yellow-600",
};

const Alert = ({ type, message, onClose }) => {
	const [classAnimation, setClassAnimation] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setClassAnimation("animate-swirl-in-fwd");
		}, 750);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="fixed flex top-0 left-0 items-center justify-center z-full w-screen h-screen bg-gray-700">
			<div
				className={`bg-black w-fit h-fit animate-puff-in-center rounded-3xl p-6 flex flex-col items-center`}
			>
				<i
					className={`pi ${classAnimation} opacity-0 text-5xl ${iconClass[type]}`}
				></i>
				<p className="text-lg text-white my-4 text-center">{message}</p>
				<Button styleBtn="btn_blue" label="Cerrar" onClick={onClose} />
			</div>
		</div>
	);
};

Alert.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onClose: PropTypes.func,
};

export default Alert;
