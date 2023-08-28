import AboutBg from '../assets/images/about-bg.png'

const About = () => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center font-fantasy'>
                <div className='p-10 lg:p-20 text-[#5B9ED9] space-y-5'>
                    <p className='lg:leading-10 leading-8 text-base lg:text-2xl'>At Animez, we're not just about movies; we're about crafting unforgettable experiences for kids and families.</p>
                </div>
                <img src={AboutBg} alt='watching movies with family'/>
            </div>

            <div className='bg-[#233C96] text-white font-fantasy'>
                <div className='container mx-auto py-24'>
                    <h2 className='text-xl'>Here's why we're the ultimate solution for your animated entertainment needs:</h2>
                </div>
            </div>
        </>
    )

}

export default About