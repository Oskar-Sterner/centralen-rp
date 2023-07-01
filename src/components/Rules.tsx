import React, { useState } from 'react';
import '../scss/main.scss';

interface RuleCategory {
  category: string;
  subCategories: string[];
  rules: {
    [subCategory: string]: JSX.Element[];
  };
}

function Rules() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Ingame-regler');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('Gyllende Regler');

  const ruleCategories: RuleCategory[] = [
    {
      category: 'Ingame-regler',
      subCategories: [
        'Gyllende Regler',
        'Rån Regler',
        'Gäng Regler',
        'Övriga Regler',
        'Regelbrott',
        'Grafik mod',
      ],
      rules: {
        'Gyllende Regler': [
          <React.Fragment>
          <strong><span>Sunt förnuft</span></strong>
          <p>
            Du ska tänka en extra gång innan du gör något och försök att tänka realistiskt.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>RDM</span></strong>
          <p>
            Du får inte på något sätt döda någon utan en anledning eller ett scenario.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>VDM</span></strong>
          <p>
            Du använder ett fordon för att döda någon utan en anledning eller ett scenario.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Poor RP</span></strong>
          <p>Du på något sätt gör ett dåligt scenario.</p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Fear RP</span></strong>
          <p>
            Du ska värna om ditt liv. Har någon ett vapen riktat mot dig så ska du inte ta fram ett vapen eller
            försöka springa iväg.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Powergaming</span></strong>
          <p>Du gör något som är orealistiskt. T.ex. kör in i en vägg i 200 km/h och sen springer iväg.</p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Metagaming</span></strong>
          <p>Du använder dig av information OOC och tar det ingame.</p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Streamsniping</span></strong>
          <p>
            Du kollar på en stream och tar informationen ingame, t.ex. letar upp var personen befinner sig genom
            streamen.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Copbaiting</span></strong>
          <p>Du försöker bli jagad av polisen med avsikt.</p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Multikaraktärssystemet</span></strong>
          <p>
            Om du dör på en av dina karaktärer i ett scenario får du EJ spela på den karaktären på 6 timmar. Om du får
            hjälp av sjukvården innan du blöder ut så får du fortsätta spela på karaktären, men inte om du tex blivit
            skjuten i huvudet. Om du dör av tex matbrist, vattenbrist, trillat ut ur ett fordon och får hjälp så får du
            spela vidare.
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Tjänstefordon</span></strong>
          <p>
            Polis fordon får tas i <strong>stora</strong> scenarion. Ambulansbilar eller brandbilar får inte tas. (Stora
            scenarion = bank/juvelrån t.ex.)
          </p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Tjänstevapen</span></strong>
          <p>Tjänstevapen får <strong>enbart</strong> poliser i tjänst använda.</p>
        </React.Fragment>,
        <React.Fragment>
          <strong><span>Sexuellt ofredande</span></strong>
          <p>
            Det är okej att använda sig av sexuella skämt men <strong>överdrivet</strong> påhopp accepteras inte.
          </p>
        </React.Fragment>,
        ],
        'Rån Regler': [
          <React.Fragment>
            <strong><span>Generella regler kring rån och kidnapning</span></strong>
            <p>
              För att få kidnappa en polis måste det vara 14 poliser i tjänst och ha ett väldigt bra skäl bakom det!<br />
              Alla måste ha automatvapen på större rån (bank och juvelrån)
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Butiksrån</span></strong>
            <p>
              På ett butiksrån så måste det vara 5 poliser i tjänst<br />
              På ett butiksrån får man vara max 7 rånare i butiken<br />
              Minst 1 person måste ha pistol på butiksrån.
            </p>
          </React.Fragment>,
          <React.Fragment>
          <strong><span>Bankrån</span></strong>
          <p>
            På ett bankrån så måste det vara 10 poliser i tjänst<br />
            På ett bankrån får man vara max 13 rånare i banken
          </p>
        </React.Fragment>,
        <React.Fragment>
        <strong><span>Juvelrån</span></strong>
        <p>
          På ett juvel rån får man vara max 10 rånare i butiken
        </p>
      </React.Fragment>,
        ],
        'Gäng Regler': [
          <React.Fragment>
            <strong><span>Generella regler kring gäng</span></strong>
            <p>
              Man får vara max 10 medlemmar i ett gäng. <br /><br />
              Det är inte tillåtet att ta in flera gäng i ett krig. (10 medlemmar max för en anledning) <br /><br />
              I ett officiellt gängkrig så skall båda gängen veta om att det är krig. <br /><br />
              Allianser får ske, men det skall inte bli en neutral zon emellan dom två gängen.
              (Ni är fortfarande två rivaliserande gäng) <br /><br />
              Det är bossarnas ansvar att välja färg så det andra gänget vet vilka färger/utseende man har i ett krig. <br /><br />
              När båda gängen har gått med på krig så får en medlem hoppa in innan 1 timma efter kriget har startats. Men inte efter det.<br /><br />
              Man får inte ta hjälp av andra personer i ett krig som inte är med i gänget. <br /><br />
              Dör man i krig så gäller 6 timmars regeln. <br /><br />
              Även i ''inofficiella'' krig så ska båda gängen ha på sig sina gängkläder och färger och båda gängen ska vara medvetna om att det är krig.
              När personer i gänget har dött så får man ej ha på sig sina gängkläder tills kriget är slut. <br /><br />
              Det är okej att hyra ut drog plock men inte att dela på det.
              Bara ett gäng kan äga det. <br /><br />
              Går man i krig över ett plock så är det bara gänget som äger det som kan kriga tillbaks. <br /><br />
            </p>
          </React.Fragment>,
        ],
        'Övriga Regler': [
          <React.Fragment>
            <strong><span>Generella övriga regler</span></strong>
            <p>
              Användande av militärfordon eller fordon med vapen är strängt förbjudet!
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Flygburna fordon</span></strong>
            <p>
              Användning av flygburna fordon får endast ske med sunt förnuft.<br />
              Man får inte använda helikopter i krig och absolut inte skjuta från dom.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Instagram</span></strong>
            <p>
              Man får inte vara anonym på instagram.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>PED</span></strong>
            <p>
              Att använda sig av PED utan godkännande kommer resultera i ban och nollställd karaktär.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Jobb byte</span></strong>
            <p>
              Att byta jobb flertal gånger under en kort tid kan leda till att man blir blacklistad från att få ett whitelistjobb.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Förmedla sjukvårdare</span></strong>
            <p>
              Du som blivit dödad i ett scenario ska förmedla till sjukvårdaren genom /me var du blivit skjuten eller liknande.<br />
              Om du har blivit skadad i huvudet när du blivit skjuten så ska du inte återupplivas.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Mail utan för spel</span></strong>
            <p>
              IC mail i DM/PM går under meta.<br />
              (OBS endast tillåtna fall där det får användas är när en spelare ska få sparken ingame men aldrig är inne)
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Chef positioner</span></strong>
            <p>
              Chefer får inte vara kriminella.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Karaktärsrelationer</span></strong>
            <p>
              Om du har två karaktärer så får dom inte ha nån relation emellan sig.<br />
              (Överföring utav pengar, bilar, items osv mellan dina karaktärer kommer leda till permanent ban)
            </p>
        </React.Fragment>,
        ],
        'Regelbrott': [
          <React.Fragment>
            <strong><span>Regelbrott ingame</span></strong>
            <p>
              Om du ser en annan spelare begå ett regelbrott ingame så ska du helst spela in det med något inspelningsprogram för att göra det lättare för support/staffs att hjälpa dig, efter det sätta dig i support väntrum för snabbast hjälp.<br />
              Om ingen finns tillgänglig för att hjälpa dig så öppna en ticket och förklara vad personen gjorde för fel samt bifoga ett klipp på när personen utför regelbrottet.<br />
              <strong>Spela alltid klart scenariot innan ni sätter er i support väntrum.</strong>
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Gisslan</span></strong>
            <p>
              Man får inte använda sig av fake gisslan
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Bränder</span></strong>
            <p>
              Du får inte framkalla bränder utan anledning.<br />
              Det ska ligga ett scenario bakom det.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Scam</span></strong>
            <p>
              Du får inte scama folk i lagliga sammanhang, enbart i kriminella.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Sälja på hoj</span></strong>
            <p>
              Du får inte sälja medans du sitter på en hoj eller ett annat fordon.<br />
              Du måste gå av fordonet när du ska sälja.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Förmedla sjukvårdare</span></strong>
            <p>
              Du som blivit dödad i ett scenario ska förmedla till sjukvårdaren genom /me var du blivit skjuten eller liknande.<br />
              Om du har blivit skadad i huvudet när du blivit skjuten så ska du inte återupplivas.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Rån</span></strong>
            <p>
              Du får aldrig tvinga en spelare ta ut pengar på banken.<br />
              Du får dock bötfälla en annan spelare om det är ett scenario bakom det.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Loota döda kroppar</span></strong>
            <p>
              Du får aldrig loota andra spelare som har blivit medvetslösa eller dött och ta deras items, bara poliser får göra detta.<br />
              Detta leder till ban.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Combatlog</span></strong>
            <p>
              Du får aldrig springa in i din lägenhet under ett pågående scenario, tex polisjag, för att undvika scenariot.<br />
              Du får aldrig quita under ett pågående scenario.
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Anticheat</span></strong>
            <p>
              Ni ansvarar själva för vad ni har installerat för mods till FiveM och/eller GTA. Om man blir bannad utav vårt anticheat och har modifierde spelfiler utöver ”mods” mappen är denna bannen permanent och kan ej lyftas.
            </p>
          </React.Fragment>,
        ],
        'Grafik mod': [
          <React.Fragment>
            <strong><span>Generella regler kring grafik-mods</span></strong>
            <p>
              Att använda sig av grafikmod eller liknande som ger fördelar ingame som inte är verkligt kommer leda till ban.<br /><br />
              Exempel på icke tillåtna mods:<br />
               * Rutor på fordon försvinner<br />
               * Buskar försvinner<br />
               * Olika modifikationer på himlen, tex grön himmel, lila himmel mm.<br />
               * Att man alltid har dagtid ingame<br />
               * Crosshair<br />
               * Tracers<br />
            </p>
          </React.Fragment>,
          <React.Fragment>
            <strong><span>Banlängd</span></strong>
            <p>
              Bans kan oftast betraktas ganska hårda här på bryggeriet i jämfört med andra servrar.<br />
              De flesta spelare här chockas över att de får en längre ban i jämfört va de fått tidigare på andra servrar och detta är för att vi vill ha en högre RP-nivå.<br />
            </p>
          </React.Fragment>,
        ],
      },
    },
    {
      category: 'Discord-regler',
      subCategories: [
        'Discord Regler',
      ],
      rules: {
        'Discord Regler': [
          <React.Fragment>
            <strong><span>Generella discord-regler</span></strong>
            <p>
              - Spamma inte staffs eller chefer för att få din ansökan eller hjälp i support snabbare.<br /><br />
              - Behandla andra som du själv vill bli behandlad.<br /><br />
              - Det är absolut förbjudet med personliga påhopp och trakasserier mellan medlemmar i discord och PM/DM.<br /><br />
              - Att trigga/göra personer arga är inte tillåtet.<br /><br />
              - Ovårdat språk och påhopp är inte tillåtet.<br /><br />
              - Ha inga olämpliga namn eller bilder på discord.<br /><br />
              - Har du blivit bannad ingame så öppnar du en ticket om du vill ha en bättre förklaring.<br /><br />
              - Allt som sägs i våra röstkanaler på discord är OOC och får inte tas ingame.<br /><br />
              - Stör inte folk i andra kanaler.<br /><br />
              - Ge inte ut eller kräv privat information.<br /><br />
              - Skicka inte olämpliga bilder.<br /><br />
              - Ingen reklam av andra servrar är tillåtet, varken i din bio eller i DM till våra medlemmar.<br /><br />
              - Tagga inte staffs eller skicka PM's till staffs om det inte är nödvändigt.<br /><br />
              - Ha respekt för våra staffs som har ett liv utanför servern och att dom svarar när dom har tid.<br /><br />
              - Uppkäftigt/dåligt beteende mot staffs för deras beslut är inte tillåtet. Om du inte är nöjd så ta det med högre uppsatt i en ticket.<br /><br />
              - Diskussioner mellan två parter tas i PM/DM och inte i någon kanal! <br />Om inte kan reda ut det så kontaktar ni staffs eller öppnar en ticket.<br /><br />
              - Vid regelbrott så kan du som straff få:<br />
              &nbsp;&nbsp;&nbsp;* Mutedrollen i discord<br />
              &nbsp;&nbsp;&nbsp;* Varningsrollen<br />
              &nbsp;&nbsp;&nbsp;* Dragen Whitelist<br />
              &nbsp;&nbsp;&nbsp;* Kickad eller bannad från discord<br /><br />
              - Om du lämnar discorden, blivit kickad eller varit bannad så får du söka ny Whitelist.<br /><br />
              - Staffs har alltid sista ordet. Staffs behöver inte bevisa för er varför ni blivit bannade/varnade.<br /><br />
              - <strong>Läs alla regler innan ni spelar. Det finns inga ursäkter till att man inte visste. Du som spelare på Bryggeriet RP har ett ansvar att se till att du har koll på reglerna och om de uppdateras!</strong><br /><br />
            </p>
          </React.Fragment>,
        ],
      },
    },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubCategory('');
  };

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategory(subCategory);
  };

  const renderSubCategories = () => {
    const selectedCategoryObj = ruleCategories.find(
      (category) => category.category === selectedCategory
    );

    if (selectedCategoryObj) {
      return selectedCategoryObj.subCategories.map((subCategory, index) => (
        <a key={index} onClick={() => handleSubCategoryChange(subCategory)}>
          {subCategory}
        </a>
      ));
    }

    return null;
  };

  const renderRules = () => {
    const selectedCategoryObj = ruleCategories.find(
      (category) => category.category === selectedCategory
    );

    if (selectedCategoryObj && selectedSubCategory) {
      const selectedRules = selectedCategoryObj.rules[selectedSubCategory];

      return selectedRules.map((rule, index) => (
        <div key={index}>
          {rule}
        </div>
      ));
    }

    return null;
  };

  return (
    <div id="Rules">
      <h1>REGLER</h1>
      <hr />

      <div id="top-line-rules-container" />
      <div id="rules-container">
        <div id="select-rule-buttons">
          <a onClick={() => handleCategoryChange('Ingame-regler')}>
            Ingame-regler
          </a>
          <a onClick={() => handleCategoryChange('Discord-regler')}>
            Discord-regler
          </a>
          <a onClick={() => handleCategoryChange('Support-regler')}>
            Support-regler
          </a>
        </div>

        <hr id='category-divider'/>


        <div id="sub-categories-container">
          {renderSubCategories()}
        </div>

        <div id="dynamic-rules-container">{renderRules()}</div>
      </div>
    </div>
  );
}

export default Rules;
