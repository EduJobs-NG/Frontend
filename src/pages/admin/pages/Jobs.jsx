import { useState } from "react";
import { WrapperHeader } from "../components/WrapperHeader";

import add from "../assets/add.svg";
import hide from "../assets/hide.svg";
import show from "../assets/show.svg";

export const Jobs = () => {
  const [jobInView, setJobInView] = useState(null);
  const [jobState, setJobState] = useState([
    {
      state: "Approved",
      icon: hide,
      jobs: [
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Approved",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Pending",
      icon: hide,
      jobs: [
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Pending",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Declined",
      icon: hide,
      jobs: [
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Declined",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
    {
      state: "Reported",
      icon: hide,
      jobs: [
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
        {
          status: "Reported",
          title: "Physics Teacher",
          company: "Seatos College",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna. Aliquam fringilla donec aliquam ac non.",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi phasellus leo augue. Vitae arcu eu, facilisi arcu habitant sit malesuada. Orci, nunc vehicula semper quam. Turpis sit egestas sem a felis. Ultrices fusce tincidunt suspendisse eu, at mollis est. At nisi in consectetur volutpat risus, elit posuere vitae. Sagittis tellus nisl malesuada turpis enim facilisi. Egestas egestas eget aliquam ante sit ridiculus a. Neque purus erat egestas aliquet. Nulla elementum sed fusce at et sagittis, odio id sed. Ut in mattis velit fermentum tortor.",
          qualifications: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet, amet, elit vitae vestibulum tellus ligula sed magna.",
          ],
        },
      ],
    },
  ]);

  const handleClick = (state) => {
    const newJobState = jobState.map((jobState) => {
      if (jobState.state !== state) {
        jobState.icon = hide;
        return jobState;
      }

      if (jobState.icon === hide) {
        jobState.icon = show;
        return jobState;
      }

      jobState.icon = hide;
      return jobState;
    });

    setJobState(newJobState);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "30px",
        paddingBottom: "41px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <WrapperHeader title="Jobs Posted" />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            background: "#02378B",
            borderRadius: "19px",
            fontSize: "10px",
            fontWeight: "700",
            lineHeight: "24px",
            color: "#fff",
            padding: "1px 20px",
            marginRight: "20px",
          }}
        >
          <img src={add} alt="add icon" />
          <span> ADD JOB</span>
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            paddingInline: "28px 20px",
          }}
        >
          {jobState.map((jobState) => (
            <div key={jobState.state}>
              <button
                onClick={() => handleClick(jobState.state)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginLeft: "23px",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "700",
                    lineHeight: "13px",
                    width: "70px",
                    color: "#000",
                    textAlign: "start",
                  }}
                >
                  {jobState.state}
                </span>
                <img src={jobState.icon} alt="icon" />
              </button>

              {jobState.icon === show && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(10em, 1fr))",
                    gap: " 13px",
                    marginTop: "13px",
                  }}
                >
                  {jobState.jobs.map((job, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        padding: "11px 11px 17px",
                        border: "1px solid #CCCCCC",
                        borderRadius: "20px",
                      }}
                    >
                      <div
                        style={{
                          color: `${
                            job.status === "Approved" ? "#00944D" : "#FFB800"
                          }`,

                          backgroundColor: `${
                            job.status === "Approved" ? "#B5FFDB" : "#FFE298"
                          }`,
                          padding: "5px 10px",
                          fontSize: "8px",
                          fontWeight: "700",
                          lineHeight: "10px",
                          borderRadius: "4px",
                          marginBottom: "4px",
                        }}
                      >
                        {job.status}
                      </div>
                      <div
                        style={{
                          color: "#02378B",
                          fontSize: "14px",
                          fontWeight: "700",
                          lineHeight: "18px",
                        }}
                      >
                        {job.title}
                      </div>
                      <div
                        style={{
                          color: "#606060",
                          fontSize: "10px",
                          fontWeight: "700",
                          lineHeight: "13px",
                          marginBottom: "6px",
                        }}
                      >
                        {job.company}
                      </div>
                      <div
                        style={{
                          color: "#606060",
                          fontSize: "8px",
                          fontWeight: "400",
                          lineHeight: "10px",
                          marginBottom: "12px",
                        }}
                      >
                        {job.text}
                      </div>
                      <button
                        onClick={() => setJobInView(job)}
                        style={{
                          alignSelf: "center",
                          padding: "4px 32px",
                          color: "#f0f0f0",
                          fontSize: "8px",
                          fontWeight: "700",
                          lineHeight: "10px",
                          backgroundColor: "#02378B",
                          borderRadius: "4px",
                        }}
                      >
                        View Job
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {jobInView && (
          <div
            style={{
              maxWidth: "250px",
              borderRadius: "21px",
              border: "1px solid #D9D9D9",
              padding: "20px 14px",
              marginRight: "20px",
            }}
          >
            <div
              style={{
                color: "#02378B",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "18px",
              }}
            >
              {jobInView.title}
            </div>
            <div
              style={{
                color: "#606060",
                fontSize: "10px",
                fontWeight: "700",
                lineHeight: "13px",
                marginBottom: "10.5px",
              }}
            >
              {jobInView.company}
            </div>

            <div
              style={{
                marginBottom: "3.5px",
                backgroundColor: "#606060",
                height: "0.5px",
              }}
            ></div>

            <div style={{ marginBottom: "4px" }}>
              <div
                style={{
                  color: "#000",
                  fontSize: "10px",
                  fontWeight: "700",
                  lineHeight: "13px",
                  marginBottom: "3px",
                }}
              >
                About
              </div>
              <p
                style={{
                  color: "#606060",
                  fontSize: "8px",
                  fontWeight: "400",
                  lineHeight: "10px",
                }}
              >
                {jobInView.about}
              </p>
            </div>

            <div
              style={{
                marginBottom: "6px",
                backgroundColor: "#606060",
                height: "0.5px",
              }}
            ></div>

            <div>
              <div
                style={{
                  color: "#000",
                  fontSize: "10px",
                  fontWeight: "700",
                  lineHeight: "13px",
                  marginBottom: "3px",
                }}
              >
                Qualifications
              </div>

              <ol type="1">
                {jobInView.qualifications.map((qualification, index) => (
                  <li
                    key={index}
                    style={{
                      color: "#606060",
                      fontSize: "8px",
                      fontWeight: "400",
                      lineHeight: "10px",
                    }}
                  >
                    {qualification}
                  </li>
                ))}
              </ol>
            </div>
            {jobInView.status === "Pending" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  color: "#fff",
                  fontSize: "8px",
                  fontWeight: "700",
                  lineHeight: "10px",
                  marginTop: "25px",
                }}
              >
                <button
                  style={{
                    background: "#00944D",
                    border: "1.5px solid #00944D",
                    borderRadius: "4px",
                    padding: "6px",
                  }}
                >
                  Approve
                </button>
                <button
                  style={{
                    border: "1.5px solid #C90415",
                    color: "#C90415",
                    borderRadius: "4px",
                    padding: "6px",
                  }}
                >
                  Decline
                </button>
              </div>
            )}

            {jobInView.status === "Reported" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  color: "#fff",
                  fontSize: "8px",
                  fontWeight: "700",
                  lineHeight: "10px",
                  marginTop: "25px",
                }}
              >
                <button
                  style={{
                    background: "#C90415",
                    borderRadius: "4px",
                    padding: "7px",
                  }}
                >
                  Delete
                </button>
                <button
                  style={{
                    color: "#303030",
                    background: "#e6e6e6",
                    borderRadius: "4px",
                    padding: "7px",
                  }}
                >
                  Ignore
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
