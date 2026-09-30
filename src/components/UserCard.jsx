// UserCard receives everything it renders as props from its parent (App).
// It holds no state of its own -- it's a "dumb" presentational component.
function UserCard(props) {
  const { avatar, name, email } = props

  return (
    <div className="user-card">
      <img className="user-card__avatar" src={avatar} alt={name} />
      <div className="user-card__info">
        <p className="user-card__name">{name}</p>
        <p className="user-card__email">{email}</p>
      </div>
    </div>
  )
}

export default UserCard
