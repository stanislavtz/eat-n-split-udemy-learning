import { useState } from "react";

import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

import Button from "./elements/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendAddFormVisible, setFriendAddFormVisible] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setFriendAddFormVisible((visible) => !visible);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((fr) => [...fr, friend]);
    setFriendAddFormVisible(false);
  }

  function handleSelectFriend(id) {
    const chosenFriend = friends.find((fr) => fr.id === id);
    setSelectedFriend(chosenFriend);
    setFriendAddFormVisible(false);
  }

  function handleCloseSelection() {
    setSelectedFriend(null);
  }

  function handleSplitBill(bill, myExpense, whoWillPay) {
    const currentFriend = {...selectedFriend};

    if (whoWillPay === "user") {
      currentFriend.balance += bill - myExpense;
    } else {
      currentFriend.balance -= myExpense;
    }

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === currentFriend.id ? currentFriend : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          onCloseSelection={handleCloseSelection}
          selectedFriendId={selectedFriend?.id}
        />

        {friendAddFormVisible && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}

        <Button onClick={handleShowAddFriend}>
          {!friendAddFormVisible ? "Add Friend" : "Close"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill friend={selectedFriend} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}
