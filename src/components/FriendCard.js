import Button from "../elements/Button";

function FriendCard({
  id,
  name,
  image,
  balance,
  onSelectFriend,
  onCloseSelection,
  selectedFriendId,
}) {
  const isSelected = id === selectedFriendId;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name}></img>
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className="red">
          You own {name} {Math.abs(balance)} €
        </p>
      ) : balance === 0 ? (
        <p>You and {name} are even</p>
      ) : (
        <p className="green">
          {name} owns you {balance} €
        </p>
      )}
      {isSelected ? (
        <Button onClick={onCloseSelection}>Close</Button>
      ) : (
        <Button onClick={() => onSelectFriend(id)}>Select</Button>
      )}
    </li>
  );
}

export default FriendCard;
