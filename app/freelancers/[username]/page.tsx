interface Props {
  params: {
    username: string;
  };
}

async function getFreelancer() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  return response.json();
}



export default async function FreelancerPage({
  params,
}: Props) {
  const freelancers = await getFreelancer();
  const freelancer = freelancers.find(
    (f: any) => f.username === params.username
  );

  return (
    <div className="max-w-4xl mx-auto py-10 bg-gray-100 rounded-lg p-5 w1/2">
      <h1 className="text-4xl font-bold">
        {freelancer.name}
      </h1>

      <p className="mt-4 text-xl">
        Username: {params.username}
      </p>

      <p className="mt-2">
        {freelancer.email}
      </p>

      <p className="mt-2">
        {freelancer.phone}
      </p>
    </div>
  );
}