import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item)
    return acc
  }, {})

export const heroTextureImports = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
)

const BannerCarousel = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <ChevronLeftIcon
            onClick={onClickHandler}
            className="h-20 w-16 absolute top-1/2 left-0 z-2 text-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer hover:transition-transform hover:duration-200 hover:delay-200 hover:ease-in hover:animate-pulse"
          />
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <ChevronRightIcon
            onClick={onClickHandler}
            className="h-20 w-16 absolute top-1/2 right-0 z-2 text-white shadow-xl opacity-50 hover:opacity-100 cursor-pointer hover:transition-transform hover:duration-200 hover:delay-200 hover:ease-in hover:animate-pulse"
          />
        )}
      >
        {Object.values(heroTextureImports).map((texture, index) => (
          <img
            src={texture}
            className="h-[600px] w-full"
            key={`carousel-image-${index}`}
            alt="legend"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default BannerCarousel
