import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import Copyright from "../../constants/copyright"

const Footer = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://formsubmit.co/mwendermwalali@gmail.com", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  // You can add more validations based on your requirements

  return (
    <div className="bg-gray-700">
      <footer
        style={{ maxWidth: 1200 }}
        className="mx-auto flex justify-between gap-20 max-lg:flex-col py-20 px-8 max-sm:px-5  "
      >
        <div className="flex flex-col items-start h-auto justify-between gap-16 w-2/4 max-lg:w-full pr-10 max-sm:pr-0">
          <div className="flex flex-col text-lg items-start  justify-between gap-10 ">
            <a href="/">
              <img src="/patnan logo.png" className="w-36" alt="Patnan-logo" />
            </a>
            <p style={{ color: "white" }}>
            Connect with Us: Have questions or ready to explore real estate opportunities? Reach out to our friendly team at Patnan Investments. We’re here to assist you every step of the way. Fill out the form, and let’s start your property journey together!
            </p>
            <div className="flex text-xl justify-start items-center gap-10 text-red-500">
              <Link target="_blank" to={"https://www.facebook.com/profile.php?id=61556576006921&sfnsn=wa&mibextid=RUbZ1f"}>
                <FaFacebookF />
              </Link>
              <Link target="_blank" to={"https://www.instagram.com/patnan_investment?igsh=MTFlZjlvd3Y1OHV1MQ=="}>
                <FaInstagram />
              </Link>
            </div>
            <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/services"
              >
                Services
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/about"
              >
                About Us
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/contact"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>

        <div
          id="contact"
          className="w-2/4 max-lg:w-full flex flex-col h-auto justify-between items-start gap-10 "
        >
          <h1 className="text-3xl text-white">Get in Touch</h1>
          {/* <div className="name w-full gap-8 text-white max-sm:flex-col max-sm:gap-10 mt-3 flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="First Name"
              name="firstName"
              maxLength={20}
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Last Name"
              name="lastName"
              maxLength={20}
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="contact w-full text-white gap-8 max-sm:flex-col max-sm:gap-10  flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Email Address"
              name="email"
              maxLength={40}
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              type="number"
              placeholder="Phone No"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              autoComplete="off"
              max={15}
              maxLength={15}
            />
          </div>
          <Textarea
            pl={3}
            fontSize={19}
            variant={"flushed"}
            borderColor={"#696969"}
            focusBorderColor="white"
            _placeholder={{ color: "#696969" }}
            placeholder="Message"
            maxLength={200}
            className="w-full text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#E3AD49" }}
            backgroundColor={"#E3AD49"}
            color={"white"}
            borderColor={"#E3AD49"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={handleSubmit}
            className="mt-4  max-lg:w-72 max-sm:w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Submit
          </Button> */}
          <iframe
              title="Patnan Investments Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8567866081426!2d36.918819500000005!3d-1.2579171999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f14f17154a83d%3A0x24d2e9e157c3e236!2sPatnan%20Investment!5e0!3m2!1sen!2sde!4v1711214395755!5m2!1sen!2sde"
              style={{ border: 0, width: "100%", height: "300px" }}
              allowFullScreen=""
              loading="lazy"
          ></iframe>
          <div><Copyright/></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
