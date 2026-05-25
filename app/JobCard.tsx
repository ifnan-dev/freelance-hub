type JobCardProps = {
  title: string
  budjet: string
  company: string
};

const JobCard = (props: JobCardProps) => {
  return (
    <div className="text-black bg-blue-400 h-50 p-5 rounded-2xl">
      <h2 className="text-lg font-bold">{props.title}</h2>
      <p>{props.budjet}</p>
      <p>{props.company}</p>
    </div>
  );
};

export default JobCard
