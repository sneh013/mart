import { useGetTopProductsQuery } from "../../redux/api/productApiSlice";
import Message from "../../components/Message";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
} from "react-icons/fa";

const ProductCarousel = () => {
    const { data: products, isLoading, error } = useGetTopProductsQuery();
   
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mb-4 lg:block xl:block md:block">
       {isLoading ? null : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Slider
          {...settings}
          className="xl:w-[30rem] lg:w-[60rem] md:w-[56rem] sm:w-[40rem] sm:block"
        >
              {products.map(({image,_id,name, price,description,brand,createdAt,numReviews,rating,quantity,countInStock,
            }) => (
              <div key={_id}>
                <img
                  src={image}
                  alt={name}
                  className="w-full rounded-lg object-cover h-[20rem] md:h-[25rem] lg:h-[30rem]"
                />
                <div className="mt-2 mb-4">
                  <h1 className="flex items-center">
                    <FaStore className="mr-2 text-white" /> Brand: {brand}
                  </h1>
                </div>

                <div className="flex justify-between w-[20rem]">
                  <div className="flex justify-between items-center w-full">
                    <h2>{name}</h2>
                    <p>$ {price}</p>
                  </div>
                  {/* Removed the two <br /> tags */}
                  {/* <br /> <br /> */}
                  {/* The description moved outside the flex container */}
                </div>

                <div className="mt-4">
                  <div className="flex justify-between w-[20rem] mb-2">
                    <h1 className="flex items-center">
                      <FaClock className="mr-2 text-white" /> Added:{" "}
                      {moment(createdAt).fromNow()}
                    </h1>
                    <h1 className="flex items-center">
                      <FaStar className="mr-2 text-white" /> Reviews: {numReviews}
                    </h1>
                  </div>
                  <div className="flex justify-between w-[20rem]">
                    <h1 className="flex items-center">
                      <FaStar className="mr-2 text-white" /> Ratings:{" "}
                      {Math.round(rating)}
                    </h1>
                    <h1 className="flex items-center">
                      <FaShoppingCart className="mr-2 text-white" /> Quantity:{" "}
                      {quantity}
                    </h1>
                    <h1 className="flex items-center">
                      <FaBox className="mr-2 text-white" /> In Stock: {countInStock}
                    </h1>
                  </div>
                </div>

                <p className="w-[25rem] mt-4">
                  {description.substring(0, 170)} ...
                </p>
              </div>
            )
              )}
        </Slider>
        )}
    </div>
  )
}

export default ProductCarousel
