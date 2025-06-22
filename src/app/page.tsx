import { Button } from './components/button';
import Chevron from './components/icons/Chevron';
import Image from 'next/image'

export default function Home(){
    return (
        <section className="grid justify-items-center p-8 pt-24 text-center">
                <div>
                    <h1 className="text-2xl font-rubik font-semibold text-shadow-lg text-shadow-black">Matte hjelp</h1>
                    <p className="pt-2 text-lg font-inter font-light text-text">Det ultimate AI verktøyet for matteksamen</p>
                    <Button className="mt-24">Last ned på pc</Button>
                    <a className='pl-10 flex items-center gap-2 mt-8 text-md font-inter font-light text-text cursor-pointer'>Finn ut hvordan det fungerer <Chevron className='h-24 w-24'/></a>
                    
                    <p className='mt-34 mb-6 text-md font-inter font-light text-text'>screenshot av mattehjelp</p>
                    <Image
                        src="/mattehjelp.png"
                        alt="Bilde av Mattehjelp"
                        width={500}
                        height={500}
                        className='aspect-1/1 rounded-xl '
                    />
                    <p className='mt-12 px-4 text-md font-inter font-light text-text'>Mattehjelp hjelper deg med å skrive utregning og er <b className='font-semibold text-purple-600'>umulig å oppdage</b> av it-systemer og sensor</p>
                </div>
                <div>
                    <h2 className="text-xl"></h2>
                </div>
        </section>
    );
}