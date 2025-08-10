import { User2 } from "lucide-react";
import React from "react";

type TTestimonialCardProps = {
  profile_link: string;
  photo?: string | null;
  name: string;
  job_title: string;
  content: string;
};

const TestimonialCard = (props: TTestimonialCardProps) => {
  return (
    <div className="text-sm leading-6">
      <div className="relative group">
        <a href={props.profile_link} className="cursor-pointer">
          <div className="relative p-6 space-y-6 leading-none bg-accent">
            <div className="flex items-center space-x-4">
              <img
                src={props.photo ?? "/user-icon.png"}
                className="w-12 h-12 bg-center bg-cover border rounded-full"
                alt={props.name}
              />

              <div>
                <h3 className="text-lg font-semibold leading-9">
                  {props.name}
                </h3>
                <p className="text-gray-500 text-md">{props.job_title}</p>
              </div>
            </div>
            <p className="leading-normal  text-md">{props.content}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCard;
