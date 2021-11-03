import { useState, useEffect } from "react";

import { getOrdersApi } from "/api/orders";

export default function Home() {
  const [listOrders, setListOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getOrdersApi();
      console.log("test", response);
    })();
  }, []);

  return <div>Soy el Home</div>;
}
