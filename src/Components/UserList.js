import "./UserList.css";

const UserList = (props) => {
    console.log(props.userlist.name)
  return (
    <div className="userList">
      <div className="userItem">
        {props.userlist.length > 0 ? (
          <ul>
            {props.userlist.map((u) => (
              <li key={u.id}>
                {u.name} ({u.age} years old)
              </li>
            ))}
          </ul>
        ) : (
          <p>no data found</p>
        )}
      </div>
    </div>
  );
};
export default UserList;
