import type { NextPage } from 'next'
import {User} from '../interfaces/user';
import {useState, useEffect} from 'react';

const Home: NextPage = () => {
  const [username, setName] = useState<User>({name: ''});

  async function loadData() {
    const response = await fetch(("api/hello"));
    const responseData = await response.json();
    setName(responseData);
  }

  useEffect( () => {
    loadData();
  }, []);
  return (
    <div className='flex justify-center items-center h-screen p-6'>
      <h1 className="text-xl lg:text-3xl font-bold hover:underline">
        Hello {username.name}
      </h1>
    </div>
  )
}

export default Home
