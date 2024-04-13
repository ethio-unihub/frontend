export const FileLoading = () => {
  return (
    <div class="w-[100vh] px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div class="flex justify-between items-center animate-pulse">
        <span class="font-light text-gray-600"> </span>
        <a
          class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
          href="#"
        >
          &nbsp;
        </a>
      </div>
      <div class="mt-2">
        <div class="bg-gray-300 h-3 w-2/3 mb-2 animate-pulse"></div>
        <div class="bg-gray-300 h-3 w-5/6 animate-pulse"></div>
      </div>
      <div class="flex justify-between items-center mt-4">
        <a class="text-blue-600 hover:underline animate-pulse" href="#">
          &nbsp;
        </a>
        <div>
          <div class="flex items-center">
            <div class="bg-gray-300 h-8 w-8 rounded-full mr-4 animate-pulse"></div>
            <div class="bg-gray-300 h-3 w-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
