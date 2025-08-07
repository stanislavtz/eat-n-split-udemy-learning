import { useState } from "react";
import Button from "../elements/Button";

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userExpanse, setUserExpanse] = useState("");
  const [whoWillPay, setWhoWillPay] = useState("user");

  const friendExpanse = bill && +bill ? bill - userExpanse : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userExpanse) return;

    onSplitBill(bill, userExpanse, whoWillPay);
    setBill("");
    setUserExpanse("");
    setWhoWillPay("user");
  }

  function handleSetBill(e) {
    const currBill = +e.target.value;
    setBill(currBill ? currBill : e.target.value);
  }

  function handleSetUserExpense(e) {
    const currValue = +e.target.value;
    setUserExpanse(currValue > bill ? "" : currValue);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT BILL WITH {friend.name}</h2>

      <label>Bill value</label>
      <input type="text" value={bill} onChange={handleSetBill} />

      <label>Your expense</label>
      <input type="text" value={userExpanse} onChange={handleSetUserExpense} />

      <label>{friend.name} expanse</label>
      <input type="text" value={friendExpanse} disabled />

      <label>Who is paying the bill?</label>
      <select
        value={whoWillPay}
        onChange={(e) => setWhoWillPay(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
