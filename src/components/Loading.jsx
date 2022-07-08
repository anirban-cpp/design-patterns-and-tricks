export const LoadingCard = () => {
  return (
    <div className="w-9/12 rounded overflow-hidden shadow-lg mb-8 mt-8 mr-auto ml-auto">
      <div className="w-full h-80 bg-gray-300 animate-pulse"></div>
      <div className="px-6 py-4 items-center">
        <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse ml-auto mr-auto"></div>
      </div>
    </div>
  );
};

export const LoadingPosts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {loadPages.map((_num, i) => {
        return <LoadingCard key={i} />;
      })}
    </div>
  );
};
