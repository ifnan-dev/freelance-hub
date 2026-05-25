type ProfileCardProps = {
  name: string;
  role: string;
  location: string;
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <div className=" text-black">
      <h1>{props.name}</h1>
      <p>{props.role}</p>
      {props.location}
    </div>
  );
};
