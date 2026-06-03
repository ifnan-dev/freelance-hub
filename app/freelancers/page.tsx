async function getFreelancers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function FreelancersPage() {
  const freelancers = await getFreelancers();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Freelancers
      </h1>

      <div className="space-y-4">
        {freelancers.map((freelancer: any) => (
          <a href={`/freelancers/${freelancer.username}`}>
            <div
            key={freelancer.id}
            className="border rounded-lg p-5"
          >
            <h2 className="text-2xl font-semibold">
              {freelancer.name}
            </h2>

            <p className="text-gray-500 mt-2">
              @{freelancer.username}
            </p>

            <p className="mt-2">
              {freelancer.email}
            </p>
          </div>
          </a>
          
        ))}
      </div>
    </div>
  );
}