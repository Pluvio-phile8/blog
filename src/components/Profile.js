function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      <span>Full Name:</span>
      <p>{props.name}</p>
      <span>Major:</span>
      <p>{props.major}</p>
      <span>DOB:</span>
      <p>{props.dob}</p>
      <span>Gender:</span>
      <p>{props.gender}</p>
      <span>Phone:</span>
      <p>{props.phone}</p>
      <span>Email:</span>
      <p>{props.email}</p>
      <span>Address:</span>
      <p>{props.address}</p>
    </div>
  );
}
export default Profile;