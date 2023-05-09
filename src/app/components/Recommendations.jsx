
import React from 'react'
import recommendations from "@/data/recommendations.json"

const RecommendationsSection = () => {
    return (
        <section className='py-8 px-[5%]'>
            <h1 className='text-4xl font-semibold capitalize mb-3 text-center'>Recommendations</h1>
            <p className='text-center text-base font-light text-slate-400'>Some Senior developers and engineers whom I worked with <br /> recommended me for my passion of programming 💖</p>
            <div className="recommendations flex items-center flex-wrap justify-center gap-6 py-28">
                {recommendations.map((recommendation, index) => (
                    <RecommendationCard key={index} {...recommendation} />
                ))}
            </div>
        </section>
    )
}

const RecommendationCard = ({ name, description, recommendation, avatar }) => {
    return <div className='cursor-pointer pt-12 items-center hover:border-slate-900 border border-transparent w-[40%] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5'>
        <div className="flex flex-col items-center gap-4">
            <img className='w-[80px] h-[80px] rounded-full' src={avatar} alt="" />
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-sm text-slate-400'>{description}</p>
            </div>
        </div>
        <p className='text-center text-sm text-slate-300'>{recommendation}</p>
    </div>
}

export default RecommendationsSection