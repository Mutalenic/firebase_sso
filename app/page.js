'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/firebase_config';
import { signOut } from 'firebase/auth';

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If not loading and user is not signed in, redirect to signup page
    if (!loading && !user) {
      router.push('/signup');
    }
    // Set isLoaded to true when loading is completed
    setIsLoaded(true);
  }, [user, loading, router]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push('/signup');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  // If loading, display 'Loading'
  if (!isLoaded || loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  // If user is signed in, display the home page
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to my page</h1>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Logout</button>
    </div>
  );
};

export default Home;
