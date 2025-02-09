import bookPhoto from "../assets/book.png";
import starSVG from "../assets/star.svg";
export default function BookGrid({ books, onHandleFavourite, getYear }) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <div className="space-y-3" key={book.id}>
          {/* thumbnail */}
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img
              className="max-w-[144px] sm:h-[200px]"
              src={book.image ? book.image : bookPhoto}
              alt="book name"
            />
          </div>
          {/* info */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">
              {book.name}
              <span className="text-[8px]"> ({getYear(book?.Published)})</span>
              {/* {getYear(book?.published)} */}
              {/* ({getYear(book?.published)}) */}
              {/* JavaScript and Jquery */}
            </h4>
            <p className="text-xs lg:text-sm">
              {/* By : <span>Jon Duckett</span> */}
              {book.writer}
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
              {/* stars */}
              <div className="flex items-center space-x-1">
                {Array(Number(book.star))
                  .fill(book.star)
                  .map((value, index) => (
                    <img src={starSVG} key={index} />
                  ))}

                <span className="text-xs lg:text-sm">({book.star} Star)</span>
              </div>
              {/* stars ends */}
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Add to Cart
              </button>
              <button
                className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md  py-1.5  transition-all  lg:py-1.5 ${
                  book.isFavourite
                    ? "bg-[#e8c8c2] text-[#dc2954] hover:bg-[#e8bdb5]"
                    : "bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]"
                }`}
                onClick={() => {
                  onHandleFavourite(book.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className={`h-5 w-5  ${
                    book.isFavourite
                      ? "fill-[#dc2954]"
                      : "text-gray-800 stroke-[#486658] "
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                Favourite
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
