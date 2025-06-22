import { Button } from './components/button';
import { Input } from './components/input';
import Chevron from './components/icons/Chevron';
import Image from 'next/image'
import { SellingPoint } from './components/selling-point';

import Camera from './components/icons/Camera'
import Eye from './components/icons/Eye';
import Package from './components/icons/Package';
import Syringe from './components/icons/Syringe';

export default function Home(){
    return (
        <section className="grid justify-items-center p-8 pt-24 text-center">
                {/* Intro */}
                <h1 className="text-3xl font-rubik font-semibold text-shadow-lg text-shadow-black">Matte hjelp</h1>
                <p className="pt-2 text-lg font-inter font-light text-text">Det ultimate AI verktøyet for matteksamen</p>
                <Button className="mt-24 bg-purple-600 hover:bg-purple-400 transition">Last ned på pc</Button>
                
                <a className='pl-6 inline-flex items-center gap-2 mt-8 text-md font-inter font-light text-text cursor-pointer'>Finn ut hvordan det fungerer<Chevron className='h-6 w-6'/></a>
                
                <p className='mt-34 mb-6 text-md font-inter font-light text-text'>screenshot av mattehjelp</p>
                <Image
                    src="/mattehjelp.png"
                    alt="Bilde av Mattehjelp"
                    width={500}
                    height={500}
                    className='aspect-1/1 rounded-2xl '
                />
                <p className='mt-12 px-4 text-md font-inter font-light text-text'>Mattehjelp hjelper deg med å skrive utregning og er <b className='font-semibold text-purple-600'>umulig å oppdage</b> av it-systemer og sensor</p>
                
                {/* Selling points */}
                <div className='pt-34'>
                    <h2 className="text-2xl font-rubik font-medium text-shadow-lg text-shadow-black">Umulig å oppdage</h2>
                    <p className='pt-4 text-md font-inter font-light text-text'>Mattehjelp har flere funksjoner for å gå under radar for både alle typer stikkprøver og sensor</p>
                    <div>
                        <SellingPoint
                            icon={<Camera className='p-1 bg-purple-700 h-13 w-13 text-purple-300 rounded-lg'/>}
                            title={"Bruker kamera"}>
                            Dersom du har kamera på pcen din vil mattehjelp si om noen står bak eller ser på skjermen din
                        </SellingPoint>
                        <SellingPoint
                            icon={<Eye className='p-1 bg-purple-700 h-13 w-13 text-purple-300 rounded-lg'/>}
                            title={"Dimming og skjuling"}>
                            Du kan dimme, skjule eller skru av Mattehjelp når som helst
                        </SellingPoint>
                        <SellingPoint
                            icon={<Package className='p-1 bg-purple-700 h-13 w-13 text-purple-300 rounded-lg'/>}
                            title={"Skjuling av AI-program"}>
                            Mattehjelper bruker avanserte containeriseringsteknikker for AI-programer egentlig ikke kjører på pcen din selv om de gjør. Dette gjør det fysisk umulig for en prøve å oppdage de
                        </SellingPoint>
                        <SellingPoint
                            icon={<Syringe className='p-1 bg-purple-700 h-13 w-13 text-purple-300 rounded-lg'/>}
                            title={"Sjekker seg selv"}>
                            Mattehjelper har innebygd stikkprøve så den kan tester pc’en din før eksamen
                        </SellingPoint>
                    </div>
                </div>

                {/* Newsletter */}
                <h1 className='pt-34 text-2xl font-rubik font-medium text-shadow-lg text-shadow-black'>Ønsker du Mattehjelp <span className='text-purple-600'>gratis?</span></h1>
                <p className='pt-4 text-md font-inter font-light text-text'>Vi deler ut gratis pro versjon av Mattehjelp til alle som melder seg nyhetbrevet våres, slapp av vi spammer ikke. Du får bare en mail når mattehjelp er klar til bruk.</p>
                <Input className='mt-6 border-border border-1 w-full' placeholder='Din e-mail'/>
                <Button className='mt-6 bg-purple-500 hover:bg-purple-600 transition w-full'> Bli med</Button>
        </section>
    );
}