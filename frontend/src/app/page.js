import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white p-8" style={{ backgroundImage: 'url(\'/disaster-bg.jpg\')' }}>
              <h1 className="text-5xl font-bold mb-4">Welcome to Disaster Management</h1>
        <p className="text-xl mb-8 text-center">Your comprehensive solution for disaster preparedness and response.</p>
        <div className="flex space-x-4">
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">Student Login</a>
          <a href="/login" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg">Teacher Login</a>
        </div>
    </div>
  );
}
