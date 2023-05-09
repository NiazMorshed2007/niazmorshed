"use client"
import React from 'react'
import experiences from '@/data/experience.json'

const Experience = () => {
    const [activeExperience, setActiveExperience] = React.useState(0)
    return (
        <section className='md:py-20 py-6 md:pt-28 pt-20 px-[5%]'>
            <h1 className='md:text-4xl text-2xl font-semibold capitalize mb-3'>A few places I've worked</h1>
            <p className='font-light text-slate-400 text-sm md:text-base'>Here are a few organizations I've worked with as a  open-source <br /> contributor volunteer, contract & Full Time developer. </p>

            <div className="flex flex-wrap items-center py-2 md:py-16 mt-12 md:mt-28 justify-center gap-8 md:gap-32">
                <div className='overflow-x-auto'>
                    <div className="left pb-3 orgs border-b-2 md:border-b-0 md:border-l-2 border-primary/20 flex flex-row md:flex-col gap-9 md:gap-3">
                        {experiences.map((experience, index) => (
                            <div key={index} onClick={() => {
                                setActiveExperience(index)
                            }} className={`org ${experiences[activeExperience].id === experience.id ? "opacity-100" : "opacity-60"} min-w-max relative cursor-pointer hover:text-slate-400 transition-all flex items-center gap-3`}>
                                <div className={`line hidden md:block transition-all ${experiences[activeExperience].id === experience.id ? "w-[30px]" : "w-[0px]"} h-[2px] bg-primary/20`}></div>
                                <div className={`${experience.id === "maks" && "w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center"}`}>
                                    <img className='w-[30px] rounded-full' src={experience.imageUrl} alt="" />
                                </div>
                                <h1>{experience.org_name}</h1>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="right w-full md:w-1/2">
                    <h1 className='text-2xl font-semibold'>{experiences[activeExperience].role}</h1>
                    <p className='font-semibold text-slate-400'>{experiences[activeExperience].type}</p>
                    <p className='text-slate-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita velit molestias explicabo ipsam autem et esse accusamus voluptate dolorum perferendis maxime, quidem eligendi quasi alias consequatur eius omnis labore.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience