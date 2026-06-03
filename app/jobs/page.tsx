import JobSearch from "./job-search";

type JobProps = {
    title: string
    budjet: string
    company: string
}

async function getJobs() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store",
    }
  );

  return response.json();
}


const JobsPage = async () => {

    const jobs = await getJobs();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Jobs
      </h1>

      <JobSearch/>

      <div className="space-y-4">
        {jobs.slice(0, 10).map((job: any) => (
          <div
            key={job.id}
            className="border rounded-lg p-5"
          >
            <h2 className="text-2xl font-semibold">
              {job.title}
            </h2>

            <p className="mt-3">
              {job.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}



export default JobsPage

