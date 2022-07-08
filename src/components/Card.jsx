export const Card = ({ name, imageUrl }) => {
  return (
    <div className="w-9/12 rounded overflow-hidden shadow-lg mb-8 mt-8 mr-auto ml-auto">
      <img className="w-full h-80 object-center" src={imageUrl} />
      <div className="px-6 py-4">
        <div className="font-regular text-xl mb-2 text-center">{name}</div>
      </div>
    </div>
  );
};
