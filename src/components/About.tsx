import '../scss/main.scss';
import performanceIcon from '../assets/icons/performance.svg';
import roleplayIcon from '../assets/icons/roleplay.svg';
import communityIcon from '../assets/icons/community.svg';

function About() {

  return (
    <>
        <div id='About'>
            <div id='Performance'>
                <img src={performanceIcon} alt="performance"/>
                <h2>KRAFTIG PRESTANDA</h2>
                <hr />
                <p>
                    Upplev spelvärlden som aldrig förr med vårt åtagande att prioritera din
                    tillfredsställelse. Genom att investera i toppmodern serverhårdvara garanterar
                    vi exceptionell prestanda och säger farväl till lagg och begränsningar.
                    Fördjupa dig i en noggrant optimerad spelvärld där enastående njutning väntar vid varje steg.
                </p>
            </div>

            <div id='Roleplay'>
                <img src={roleplayIcon} alt="roleplay"/>
                <h2>MYSIG ROLEPLAY</h2>
                <hr />
                <p>
                    På vår server prioriterar vi rollspelsupplevelsen och säkerställer en perfekt
                    blandning av fördjupning och njutning. Kliv in i en värld där rollspel frodas och omfamna
                    gemenskapens värme som är dedikerad till att göra din tid hos oss oförglömlig.
                    Anslut dig till oss idag och upplev den ultimata balansen mellan rollspel och ren njutning.
                </p>
            </div>

            <div id='Community'>
                <img src={communityIcon} alt="community" />
                <h2>AKTIV GEMENSKAP</h2>
                <hr />
                <p>
                    Våra personal brinner för att interagera med spelare för att förbättra
                    din spelupplevelse. Vi tror på kraften i en gemenskapsdriven miljö där dina idéer
                    och förslag spelar en avgörande roll i att forma servern. Fördjupa dig i en gemenskap
                    som verkligen bryr sig om din njutning och anslut dig till oss på en otrolig resa av kontinuerlig förbättring.
                </p>
            </div>
        </div>
    </>
  );
}

export default About;
