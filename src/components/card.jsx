import qrCode from "../assets/img/image-qr-code.png"

function Card() {
  return (
    <>
      <div className="relative flex lg:w-80 md:w-72  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-auto overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={qrCode} />
        </div>
        <div className="p-6 [&>p]:lg:text-xl [&>p]md:text-lg">
          <div className="mb-2 flex flex-col items-center justify-between [&>p]:lg:text-xl [&>p]md:text-lg">
            <p className="block font-sans font-medium leading-relaxed text-blue-gray-900 antialiased">
              Improve your front-end
            </p>
            <p className="block font-sans font-medium leading-relaxed text-blue-gray-900 antialiased">
              Skills by building projects
            </p>
          </div>
          <p className="block font-sans text-base font-normal leading-normal text-gray-700 antialiased opacity-75">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </>
  )
}
export default Card