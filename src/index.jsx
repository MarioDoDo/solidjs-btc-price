import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

const Price = () => {
let z;

function Get() {
    fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
        .then(res => res.json())
        .then(data => z = Number(data.ticker.price).toFixed(2));
        }
        Get();

  const [price, setPrice] = createSignal(0),
    fn = setInterval(() => {
    Get();
    setPrice(z)}, 30000);
    setPrice();
  return <div><p>{price()}$</p></div>;
};

render(() => <Price />, document.getElementById("app"));
