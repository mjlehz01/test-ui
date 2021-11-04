import { useState } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

//components
import DropDown from "@/Ui/DropDown";
import Button from "@/Ui/Button";
import Modal from "@/Ui/Modal";
import OrderForm from "@/components/Orders/OrderForm";

//stytes
import styles from "/styles/Orders.module.css";

const Orders = ({ listOrders }) => {
	const [showForm, setShowForm] = useState(false);
	const [showDrop, setShowDrop] = useState(-1);
	const [itemsEdit, setItemsEdit] = useState([]);

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
							<th className="w-1/6 bg-blue-300">Precio</th>
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
									{order.billingAddress.firstName}{" "}
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
													className="text-gray-900 text-sm flex"
												>
													<span className="w-2/4 block truncate">
														{item.name}
													</span>
													<span className="w-1/4 block">{item.quantity}</span>
													<span className="w-1/4 block">{item.price}</span>
												</li>
											))}
										</ul>
										<Button
											label="Edita tu orden"
											styleBtn="btn_blue"
											onClick={() => {
												setItemsEdit(order.items),
													setShowForm(order.name),
													setShowDrop(-1);
											}}
											className="text-sm px-2 my-2 mr-0 ml-auto"
										/>
									</DropDown>
								</td>

								<td>
									$ {order.totals.total} {order.currency}
								</td>
								<td>{order.payment.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<Modal
				show={showForm}
				title={`Edita tu order ${showForm}`}
				onClose={() => setShowForm(false)}
			>
				<OrderForm listItems={itemsEdit} />
			</Modal>
		</>
	);
};
Orders.propTypes = {
	listOrders: PropTypes.array,
};
export default Orders;
