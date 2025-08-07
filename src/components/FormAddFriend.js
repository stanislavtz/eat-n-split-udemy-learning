import { useState } from "react";
import Button from "../elements/Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [imgURL, setImageURL] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if(!name || !imgURL) return;

    const newFriend = {
      id: Number(new Date().getTime()),
      name: name,
      image: imgURL,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImageURL("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={imgURL}
        onChange={(e) => setImageURL(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
