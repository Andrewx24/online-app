

const Searchbar: React.FC = () => {
 
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
       
        className="p-2 border border-gray-300 rounded-lg flex-grow"
      />
      <button
       
        className="bg-blue-500 text-white p-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Searchbar;


