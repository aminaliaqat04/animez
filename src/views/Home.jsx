import { Player, Controls } from '@lottiefiles/react-lottie-player';
import BannerImage from '../assets/images/banner-bg.png'

const Home = () => {
    return (
        <div className="px-10 p-10 lg:p-28 bg-no-repeat bg-cover bg-[10%_0%]" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className='flex flex-col justify-between container mx-auto'>
                <div className='space-y-4 lg:space-y-6 flex flex-col justify-center text-center text-2xl lg:text-5xl'>
                    <h1 className="text-[#5B9ED9]">Where the <span className='font-fantasy font-bold'>Adventure</span></h1>
                    <h1 className="text-[#5B9ED9]">Never Ends and the Fun is</h1>
                    <h1 className="text-4xl lg:text-7xl font-bold font-fantasy text-[#233C96] animate-pulse">Non-Stop!</h1>
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
    )

}

export default Home