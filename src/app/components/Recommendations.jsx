
import React from 'react'
import recommendations from "@/data/recommendations.json"

const RecommendationsSection = () => {
    return (
        <section className='py-20 px-[5%]'>
            <h1 className='text-4xl font-semibold capitalize mb-3 text-center'>Recommendations</h1>
            <p className='text-center text-base font-light text-slate-400'>Some Senior developers and engineers whom I worked with <br /> recommended me for my passion of programming 💖</p>
            <div className="recommendations flex flex-wrap justify-center gap-6 py-28">
                {recommendations.map((recommendation, index) => (
                    <RecommendationCard key={index} {...recommendation} />
                ))}
            </div>
        </section>
    )
}

const RecommendationCard = ({ name, description, recommendation }) => {
    return <div className='cursor-pointer hover:border-slate-900 border border-transparent w-[30%] h-max p-4 rounded-xl pb-7 flex flex-col gap-6 bg-primary/5'>
        <div className="flex items-center gap-4">
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
        <p>{recommendation}</p>
    </div>
}

export default RecommendationsSection