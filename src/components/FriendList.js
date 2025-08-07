import FriendCard from "./FriendCard";

function FriendList({
  friends,
  onSelectFriend,
  onCloseSelection,
  selectedFriendId,
}) {
  return (
    <ul>
      {friends.map((fr) => (
        <FriendCard
          key={fr.id}
          id={fr.id}
          name={fr.name}
          image={fr.image}
          balance={fr.balance}
          onSelectFriend={onSelectFriend}
          onCloseSelection={onCloseSelection}
          selectedFriendId={selectedFriendId}
        />
      ))}
    </ul>
  );
}

export default FriendList;
