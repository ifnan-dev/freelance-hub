import { register } from "module";

const Register = () => {

    
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6">Create Account</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 rounded w-full mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded w-full mb-4"
        />
        <a href="/">

        <button className="bg-green-500 text-white px-4 py-3 rounded w-full" >
          Register
        </button>
        </a>
      </div>
    </main>
  );
};

export default Register;
