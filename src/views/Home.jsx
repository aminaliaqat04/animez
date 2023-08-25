import { Player, Controls } from '@lottiefiles/react-lottie-player';
import BannerImage from '../assets/images/banner-bg.png'
import MoviesSlider from '../components/MoviesSlider';

const Home = () => {
    return (
        <>
            <div className="px-10 p-10 lg:p-28 bg-no-repeat bg-cover bg-[10%_0%]" style={{backgroundImage: `url(${BannerImage})`}}>
                <div className='flex flex-col justify-between container mx-auto'>
                    <div className='space-y-4 lg:space-y-6 flex flex-col justify-center text-center text-2xl lg:text-5xl'>
                        <h1 className="text-[#5B9ED9]">Where the <span className='font-fantasy font-bold'>Adventure</span></h1>
                        <h1 className="text-[#5B9ED9]">Never Ends and the Fun is</h1>
                        <h1 className="text-4xl lg:text-7xl font-bold font-fantasy text-[#233C96] animate__animated animate__rubberBand animate__infinite">Non-Stop!</h1>
                    </div>
                    <div>
                        {<Player
                            autoplay
                            loop
                            src="https://lottie.host/a098b56e-a519-48e6-a8b5-4f68223169cd/QA4P95bhhS.json"
                            className={"h-[20rem] lg:h-[30rem] w-[20rem] lg:w-[30rem]"}
                            >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>}
                    </div>
                </div>
            </div>

            <div className='text-[#233C96] text-center text-base lg:text-2xl leading-8 lg:leading-10 px-10 pb-16 lg:px-44 lg:pb-44 font-fantasy relative'>
                <div className=''>
                    {<Player
                        autoplay
                        loop
                        src="https://lottie.host/fd19b422-3a67-4800-9c78-e4a19aeefa4f/U7pSTs0YKC.json"
                        className={"h-[10rem] lg:h-[20rem] w-[10rem] lg:w-[20rem]"}
                        >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>}
                </div>
                <strong className='text-xl lg:text-4xl animate-bounce'>Hey there, </strong>young explorers and future animation aficionados! Get ready to step into the captivating world of Animez, where every click is a ticket to a land of animated wonders. Are you ready to dive into stories that'll make you laugh, cheer, and maybe even learn a thing or two? Well then, buckle up, because Animez is your gateway to a world where imagination knows no bounds!
            </div>

            <div className='pb-10 lg:pb-32'>
                <MoviesSlider />
            </div>
        </>
    )

}

export default Home