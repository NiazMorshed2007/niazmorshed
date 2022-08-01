import React from "react";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="pt-40 px-20">
        <h1 className=" text-4xl">Got project ? Give a wave 👋</h1>
        <form className="md:w-1/2 w-full mt-16">
          <div className="label-inp">
            <input name="email" required id="name" type="text" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="label-inp">
            <input name="email" required id="email" type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="label-inp">
            <textarea name="message" required type="message" />
            <label htmlFor="message">Type your message..</label>
          </div>
          <button htmlType="submit" className="mt-0 primary-btn" size="large">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
