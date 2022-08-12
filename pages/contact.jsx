import React from "react";
import AnimatedLetters from "../components/AnimationLetters";
import Layout from "../layout/Layout";
import {BsTelephone, BsLinkedin, BsSkype, BsTwitter} from "react-icons/bs";
import {VscMail} from "react-icons/vsc";

const Contact = () => {
    return (
        <Layout>
            <div className="py-40 px-[7%]">
                <h1 className="text-2xl md:text-4xl">
                    <AnimatedLetters title={"Got project? Let's build!!"}/>
                </h1>
                <h2 className={"mt-4 font-base leading-5 text-[11.5px] md:text-sm w-full md:w-1/2"}>I'm actively looking for new role as a
                    Front End Developer or contract projects. Build your next product with me!! 🚀‍🏍 Contact with me on,,👇</h2>
                <div className="mt-16 text-sm font-medium">
                    <p className="flex items-center gap-1">
                        <BsTelephone/>
                        +880 1828172830
                    </p>
                    <p className="flex items-center gap-1">
                        <VscMail />
                        niazmorshed2007@gmail.com
                    </p>
                    <p className="flex items-center gap-1">
                        <BsLinkedin />
                        <a href="https://www.linkedin.com/in/niaz-morshed-567012223/" target={"_blank"} rel={"noreferrer"}>Niaz Morshed</a>
                    </p>
                    <p className="flex items-center gap-1">
                        <BsSkype />
                        <a href="https://join.skype.com/invite/y8NW5GgpFhWA" target={"_blank"} rel={"noreferrer"}>Chat on Skype</a>
                    </p>
                    <p className="flex items-center gap-1">
                        <BsTwitter />
                        <a href="https://twitter.com/niazmorshed_" target={"_blank"} rel={"noreferrer"}>DM on Twitter</a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
