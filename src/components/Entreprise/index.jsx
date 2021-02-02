import {
  Container,
  Colonne1,
  AgriTitle,
  Trait,
  Span,
  Paragraph1,
  Colonne2,
  TravauxAgricoles,
  Image1,
  TravauxTitle,
  Paragraph2,
  Transports,
  Image2,
  TransportTitle,
  Paragraph3,
} from "./style";

const Agribray = () => {
  return (
    <Container>
      <Colonne1>
        <AgriTitle>
          Bienvenue chez <Span>Agribray</Span>
        </AgriTitle>
        <Trait></Trait>
        <Paragraph1>
          La qualité des travaux est primordial pour vos cultures. C'est
          pourquoi depuis plus de 34 ans nous mettons nos machines,
          savoirs-faire et expertises à votre service. <br />
          Nos prestations sont adaptées à vos problématiques saisonnières :
          semis, épandage, lutte contre le gel, maladies, moissons ... <br />
          Nos services : rapidité d'intervention, conseils, parc matériel,
          personnel qualifié, experience ...
        </Paragraph1>
        <button>Test</button>
      </Colonne1>
      <Colonne2>
        <TravauxAgricoles>
          <Image1 src="./photos/Tracteur.jpg" alt="tracteur" />
          <TravauxTitle>Travaux agricoles</TravauxTitle>
          <Paragraph2>
            Travaux du sol, semences, semis, épandage, application de produit
            phytosanitaire, récolte de céréales, fourrages, betteraves,
            évacuation des récoltes, gestion agricole (cartographie du sol),
            ensilage, battage, déchaumage, moisson ...
          </Paragraph2>
        </TravauxAgricoles>
        <Transports>
          <Image2 src="./photos/Camion.jpg" width="150px" alt="camion" />
          <TransportTitle>Transports</TransportTitle>
          <Paragraph3>
            Transports de marchandise en vrac : céréales, pommes de terre,
            légumes, engrais, matériaux ... préciser les matériels (tapis,
            benne, fond mouvant, ampliroll, tracto benne), agrément, zone de
            travail, ports, qualification, chauffeur ...
          </Paragraph3>
        </Transports>
      </Colonne2>
    </Container>
  );
};

export default Agribray;
