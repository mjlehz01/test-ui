import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
//components
import Orders from "@/components/Orders/Orders";
import Loading from "@/Ui/Loading";
import Alert from "@/Ui/Alert";
//api
import { getOrdersApi } from "/api/orders";

//recoil
import { listOrdersAtom } from "/recoil/orders";

export default function Home() {
  const [listOrders, setListOrders] = useRecoilState(listOrdersAtom);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(undefined);
  const [countErrorsGet, setCountErrorsGet] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (countErrorsGet >= 2) {
      setLoading(false);
      return setAlert({
        type: "error",
        message: "Contacta con el equipo de soporte",
        onClose: () => router.push("/contacto"),
      });
    }

    (async () => {
      const response = await getOrdersApi();

      if (response?.success) {
        setListOrders(response.orders);
        setCountErrorsGet(0);
      } else {
        setAlert({
          type: "info",
          message:
            "Ops al parecer tenemos un inconveniente, volvamos a intentar",
          onClose: () => {
            setAlert(undefined), setCountErrorsGet(countErrorsGet + 1);
          },
        });
      }
      setLoading(false);
    })();
    return () => setLoading(true);
  }, [countErrorsGet]);

  if (loading) return <Loading />;
  if (alert) return <Alert {...alert} />;

  return <div>{!countErrorsGet && <Orders listOrders={listOrders} />}</div>;
}
