
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        <h2 className="mt-4 text-lg font-semibold text-gray-700">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
