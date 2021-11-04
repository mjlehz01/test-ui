import PropTypes from "prop-types";
import { useState } from "react";
import { useRecoilState } from "recoil";

import Input from "@/Ui/Input";
import Button from "@/Ui/Button";

//hooks & validation
import useValidation from "/hooks/useValidation";
import validCreateItem from "validations/validCreateItem";
//recoil
import { listOrdersAtom } from "/recoil/orders";

const STATE_INIT = {
	sku: "",
	name: "",
	quantity: "",
	price: "",
};

const OrderForm = ({ itemSelect, orderIndex, onClose }) => {
	const [listOrders, setListOrders] = useRecoilState(listOrdersAtom);

	const { values, errors, handleChange, handleSubmit, handleBlur } =
		useValidation(STATE_INIT, validCreateItem, sendForm);

	const { sku, name, quantity, price } = values;
	async function sendForm() {
		const copyOrder = JSON.parse(JSON.stringify(listOrders));
		const newItems = [...itemSelect, values];
		copyOrder[orderIndex].items = newItems;
		copyOrder[orderIndex].payment = { method: null, status: "pending" };
		const totalItem = Number(price) * Number(quantity);
		const newTotal = Number(copyOrder[orderIndex].totals.total) + totalItem;
		if (Number.isInteger(totalItem)) {
			copyOrder[orderIndex].totals.total = `${newTotal}.00`;
		} else {
			copyOrder[orderIndex].totals.total = `${newTotal}`;
		}
		setListOrders(copyOrder);
		onClose();
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					name="sku"
					onChange={handleChange}
					onBlur={handleBlur}
					value={sku}
					error={errors.sku}
					placeholder="Sku *"
				/>
				<Input
					name="name"
					onChange={handleChange}
					onBlur={handleBlur}
					value={name}
					error={errors.name}
					placeholder="Nombre *"
				/>
				<Input
					name="quantity"
					onChange={handleChange}
					onBlur={handleBlur}
					value={quantity}
					error={errors.quantity}
					placeholder="Cantidad *"
				/>
				<Input
					name="price"
					onChange={handleChange}
					onBlur={handleBlur}
					value={price}
					error={errors.price}
					placeholder="Precio *"
				/>
				<ul className="text-red-600 text-sm mb-2">
					{Object.entries(errors).map((err, i) => (
						<li key={`er${i}`} className="animate-fade-in">
							{err[0]} : {err[1]}
						</li>
					))}
				</ul>
				<Button
					label="Agregar"
					type="submit"
					styleBtn="btn_blue"
					className="mx-auto text-lg px-4"
				/>
			</form>
		</div>
	);
};

OrderForm.propTypes = {
	itemSelect: PropTypes.array,
	orderIndex: PropTypes.number,
	onClose: PropTypes.func,
};

export default OrderForm;
