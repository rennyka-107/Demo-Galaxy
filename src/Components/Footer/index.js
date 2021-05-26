import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import ButtonPixel from "./../ButtonPixel";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values, "values");
    reset({ name: "", email: "", content: "" });
  };

  return (
    <div className="footer-container">
      <div className="top-content">
        <div className="footer-content">
          <div className="item">
            <div className="title-description">
              <p>Contact Us</p>
              <p>Send us a message</p>
            </div>
            <div className="item-content">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                  <div className="form-item-label">
                    <label>Name</label>
                  </div>
                  <div className="form-item-input">
                    <input
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </div>
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-item">
                  <div className="form-item-label">
                    <label>Email</label>
                  </div>
                  <div className="form-item-input">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-item">
                  <div className="form-item-label">
                    <label>Content</label>
                  </div>
                  <div className="form-item-textfield">
                    <textarea {...register("content", { required: true })} />
                  </div>
                  {errors.content && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-item">
                  <ButtonPixel
                    type="submit"
                    title="Submit"
                    className="footer-submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="item">
            <div className="title-description">
              <p>Sitemap</p>
              <p>Our page</p>
            </div>
            <div className="item-content">
              <ul>
                <li>
                  <Link className="footer-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/about-me">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="/">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="title-description">
              <Logo logoStyle={{ width: "110px" }} />
            </div>
            <div className="item-content">
              <div className="phone">
                <div className="img-phone">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    className="svg-inline--fa fa-phone fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                </div>
                <div className="footer-info">0123456789</div>
              </div>
              <div className="email">
                <div className="img-email">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="envelope"
                    className="svg-inline--fa fa-envelope fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                    ></path>
                  </svg>
                </div>
                <div className="footer-info">galaxy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-content">
        <p>Copyright 2021 All rights Reversed Company Name</p>
      </div>
    </div>
  );
};

export default Footer;
