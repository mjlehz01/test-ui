import { useState } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

//components
import DropDown from "@/Ui/DropDown";
import Button from "@/Ui/Button";
import Modal from "@/Ui/Modal";
import OrderForm from "@/components/Orders/OrderForm";
import Alert from "@/Ui/Alert";
import Loading from "@/Ui/Loading";

//stytes
import styles from "/styles/Orders.module.css";

const Orders = ({ listOrders }) => {
	const [showForm, setShowForm] = useState("");
	const [showDrop, setShowDrop] = useState(-1);
	const [selectIndex, setSelectIndex] = useState(undefined);
	const [itemSelect, setItemSelect] = useState([]);
	const [alert, setAlert] = useState(undefined);
	const [loading, setLoading] = useState(false);

	if (alert)
		return (
			<Alert
				{...alert}
				onClose={() => {
					setAlert(undefined), setShowForm("");
				}}
			/>
		);

	const payOrder = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 100);
	};

	if (loading) return <Loading />;

	return (
		<>
			<div className="animate-fade-in min-h-screen p-4 bg-black">
				<table className="w-full">
					<thead>
						<tr
							className={`${styles.table_header} rounded-l-2xl h-12 text-xl text-gray-900`}
						>
							<th className="w-1/6 bg-blue-300 rounded-tl-xl">Sku</th>
							<th className="w-2/6 bg-blue-300">Nombre</th>
							<th className="w-1/6 bg-blue-300">Nº articulos</th>
							<th className="w-1/6 bg-blue-300">Total</th>
							<th className="w-1/6 bg-blue-300 rounded-tr-xl">Status</th>
						</tr>
					</thead>
					<tbody>
						{listOrders.map((order, index) => (
							<tr
								key={`${order.id}`}
								className={`${styles.table_rows} text-white h-10 text-center text-lg border-b border-white`}
							>
								<td className="border-l">{order.name}</td>
								<td>
									{order.billingAddress.firstName}
									{order.billingAddress.lastName}
								</td>
								<td>
									<DropDown
										label={`${order.items.length}`}
										show={showDrop === index ? true : false}
										onClick={() => {
											showDrop === index ? setShowDrop(-1) : setShowDrop(index);
										}}
									>
										<ul>
											{order.items.map((item) => (
												<li
													key={`${item.id}`}
													className="text-gray-900 text-sm flex text-left border-b"
												>
													<span className="w-3/12 block truncate">
														{item.sku}
													</span>
													<span className="w-6/12 block truncate">
														{item.name}
													</span>
													<span className="w-1/12 block text-center">
														{item.quantity}
													</span>
													<span className="w-2/12 block text-center">
														{item.price}
													</span>
												</li>
											))}
										</ul>
										<Button
											label="Agrega a tu orden"
											styleBtn="btn_blue"
											onClick={() => {
												setItemSelect(order.items),
													setSelectIndex(index),
													setShowForm(order.name),
													setShowDrop(-1);
											}}
											className="text-sm px-2 mt-3 mr-0 ml-auto"
										/>
									</DropDown>
								</td>

								<td>
									$ {order.totals.total} {order.currency}
								</td>
								<td>
									{order.payment.status === "pending" ? (
										<Button
											label="Pay"
											styleBtn="btn_pay"
											icon="ml-2 pi-credit-card"
											onClick={payOrder}
										/>
									) : (
										order.payment.status
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal
				show={showForm}
				title={`Edita tu order ${showForm}`}
				onClose={() => setShowForm("")}
				containterClass="w-2/6"
			>
				{showForm && (
					<OrderForm
						orderIndex={selectIndex}
						itemSelect={itemSelect}
						onClose={() =>
							setAlert({
								type: "success",
								message: "Se agrego un nuevo item, podrias pasar a pagarlo",
							})
						}
					/>
				)}
			</Modal>
		</>
	);
};
Orders.propTypes = {
	listOrders: PropTypes.array,
};
export default Orders;
