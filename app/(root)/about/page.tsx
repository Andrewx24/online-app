import AddLists from '@/components/AddLists';


const names = ['John', 'Paul', 'George', 'Ringo'];
const lists = [
  { id: 1, name: 'john' },
  { id: 2, name: 'Paul' },
  { id: 3, name: 'George' },
  { id: 4, name: 'Andrew' }
];

interface StarWarsCharacter { 
  name: string;
  height: string; // Changed from number to string
}

async function fetchStarWarsCharacter() {
  try {
    const response = await fetch('https://swapi.dev/api/people/1/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: StarWarsCharacter = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch Star Wars character:', error);
    return null; // Fallback to null if fetch fails
  }
}

export default async function About() {
  const starWarsCharacter = await fetchStarWarsCharacter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Page Online Coffee Shop</h1>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Names List</h2>
        <ul className="list-disc list-inside mb-8">
          {names.map((name) => (
            <li key={name} className="text-lg text-gray-600">{name}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Lists</h2>
        <ul className="list-disc list-inside mb-8">
          {lists.map((list) => (
            <li key={list.id} className="text-lg text-gray-600">{list.name}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Star Wars Character</h2>
        <ul className="list-disc list-inside">
          {starWarsCharacter ? (
            <li key={starWarsCharacter.name} className="text-lg text-gray-600">{starWarsCharacter.name}</li>
          ) : (
            <li className="text-lg text-gray-600">Loading...</li>
          )}
        </ul>
     </div>
     <AddLists/>
    </main>
  );
}
