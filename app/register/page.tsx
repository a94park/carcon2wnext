import { signup } from "../api/route";
import Form from "next/form";

export default function Register() {
  return (
    <Form
      action={signup}
      
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4 mt-8">
      <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700">
          Username:
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="full_name"
          className="block text-sm font-medium text-gray-700">
          Full Name:
        </label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          required
          className="mt-1 block w-full px-4 py-2 border rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <fieldset className="flex justify-center">
        <div className="flex items-center space-x-4">
          <label className="block text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="user_type"
              value="jobseeker"
              className="mr-2"
              required
            />
            Job Seeker
          </label>
          <label className="block text-sm font-medium text-gray-700">
            <input
              type="radio"
              name="user_type"
              value="employer"
              className="mr-2"
              required
            />
            Employer
          </label>
        </div>
      </fieldset>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
        Sign up
      </button>
    </Form>
  );
}
