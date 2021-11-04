import PropTypes from "prop-types";
import Button from "@/Ui/Button";

const Modal = ({
	children,
	classBody,
	show,
	onClose,
	title,
	containterClass,
}) => {
	return (
		<>
			<div
				onClick={onClose}
				className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-95 transform transition-transform duration-300 z-100 ${
					show ? "scale-100" : "scale-0"
				}`}
			>
				<div
					className={`bg-black transition-size rounded-3xl pb-3 duration-300 ${containterClass}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex items-center bg-blue-700 rounded-t-2xl p-3 pb-2">
						<p className="text-lg text-white text-center font-bold">{title}</p>
						<Button
							className="mr-0 ml-auto"
							icon="pi-minus text-white"
							onClick={onClose}
						/>
					</div>
					<div
						className={`${classBody} rounded-b-3xl p-6 border-b border-l border-r`}
					>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};

Modal.propTypes = {
	classBody: PropTypes.string,
	show: PropTypes.string,
	onClose: PropTypes.func,
	title: PropTypes.string,
};

export default Modal;
