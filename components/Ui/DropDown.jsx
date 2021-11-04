import { useState } from "react";
import PropTypes from "prop-types";
//components
import Button from "@/Ui/Button";

const DropDown = ({ label, children, show, onClick }) => {
	return (
		<div className="w-full relative">
			<Button
				label={label}
				styleBtn="btn_dropdown"
				onClick={onClick}
				icon="text-white pi-chevron-down ml-4"
			/>
			{show && (
				<div className="animate-fade-in w-150 left-1/4 z-50 absolute bg-white p-2 rounded-lg">
					{children}
				</div>
			)}
		</div>
	);
};

DropDown.propTypes = {
	label: PropTypes.string,
};

export default DropDown;
