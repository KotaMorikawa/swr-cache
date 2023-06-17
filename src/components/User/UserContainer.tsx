const UserContainer = ({ user }: { user: User }) => {
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.memo}</p>
    </div>
  );
};

export default UserContainer;
