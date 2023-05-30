import React from "react";
import * as Icons from "../../assets/icons";
import { Link } from "react-router-dom";
import moment from "moment/moment";

export const BlogsCard = (props) => {
  const { src, title, path, createdAt } = props;

  const createdDate = () => {
    const date = new Date(createdAt * 1000);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
  
  };

  return (
    <>
      <div className="p-12">
        <img src={src} alt="" className="mb-8" />
        <div className="text-center mb-5">
          <p className="">
            {title}
          </p>
          <Link
            to={path}
            className=" font-semibold border-b-2 border-black"
          >
            Read More
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 ">
            <Icons.ClockIcon  className=""/>
            <Icons.ClockIcon1 className="absolute ml-2 mt-1"/>
            {moment(1685363418*1000).startOf('hour').fromNow()}
          </div>
          <div className="flex">
            <Icons.CalenderIcon />
            {createdDate()}
          </div>
        </div>
        
      </div>
    </>
  );
};
