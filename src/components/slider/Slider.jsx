import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../redux/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { sliderData } from "../../utils/data/dummyData";
import {ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div className="relative pb-4">
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.id === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {item.id === slideIndex && (
                  <img
                    className="h-[850px] w-full"
                    src={item.img}
                    alt="shoes"
                  ></img>
                )}
              </div>
              <div className="absolute top-44 mx-auto inset-x-1/4">
                <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                  {item.id === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12  left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={dot.id}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-2 cursor-pointer"
                    : "bg-white rounded-full p-2 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
