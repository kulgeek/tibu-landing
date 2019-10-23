import React from "react";
import logo from "./logo.svg";
import logoName from "./logo-name.svg";
import { ReactComponent as ImageTop } from "./img/imgTop.svg";
import desktop from "./img/desktop.svg";
import depotuur from "./img/depotuur.svg";
import detam from "./img/detam.svg";
import sabby from "./img/sabby.png";
import kulgeek from "./img/kulgeek.png";
import walter from "./img/walter.png";
import miguel from "./img/miguel.png";
import { Button, Row, Col, Menu, Typography } from "antd";
import "./App.scss";

const { Title, Text } = Typography;
function App() {
  return (
    <div className="App">
      <div class="page-wrapper">
        <header className="header">
          <Row>
            <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
              <a className="logo" href="/">
                <img alt="Tibu logo" src={logo} />
                <img alt="Tibu" className="name" src={logoName} />
              </a>
            </Col>
            <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
              <Button size="small" className="header-lang-button">
                EN
              </Button>
              <Menu mode="horizontal" className="menu-site">
                <Menu.Item key="design">Design guidelines</Menu.Item>
                <Menu.Item key="about">About Tibu</Menu.Item>
                <Menu.Item key="login">Login</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </header>
        <div className="home-page-wrapper banner-wrapper">
          <div className="banner-bg-wrapper">
            <div class="banner-bg"></div>
          </div>
          <div className="banner page">
            <div className="text-wrapper">
              <Title>Welkom bij Tibu</Title>
              <p>
                Tibu brengt vraag en aanbod in de zorg bij elkaar. Via ons krijg
                je toegang tot verschillende collectieven van hulpverleners.
                Zorgstudenten, ervaringsdeskundige, professionele hulpverleners
                of gewoon iemand uit de buurt? Maak een hulpvraag aan en zoek
                een passende hulpverlener!
              </p>
              <div className="banner-btns">
                <a href="/">
                  <Button className="banner-btn" type="primary" size="large">
                    Getting started
                  </Button>
                </a>
                <a href="/" style={{ marginLeft: "16px" }}>
                  <Button
                    className="banner-btn"
                    size="large"
                    style={{ color: "#8F67FC" }}
                  >
                    Contact us
                  </Button>
                </a>
              </div>
            </div>
            <div className="img-wrapper">
              <ImageTop />
            </div>
          </div>
        </div>
        <div className="home-page-wrapper page1">
          <div className="page">
            <Title level={2}>Wat doen we?</Title>
            <div>
              <Row>
                <Col xs={24} md={6}>
                  <div className="page1-block">
                    <div className="page1-image"></div>
                    <Title level={3}>Zorgmarkt</Title>
                    <p>
                      Maak een hulpvraag aan en zoek een passende hulpverlener
                    </p>
                  </div>
                </Col>
                <Col xs={24} md={6}>
                  <div className="page1-block">
                    <div className="page1-image"></div>
                    <Title level={3}>Goede zorg</Title>
                    <p>
                      Alle aangesloten hulpverleners moeten aan onze voorwaarden
                      voldoen
                    </p>
                  </div>
                </Col>
                <Col xs={24} md={6}>
                  <div className="page1-block">
                    <div className="page1-image"></div>
                    <Title level={3}>Altijd passende zorg</Title>
                    <p>
                      Wij werken nauw samen met verschillende zorginstellingen
                      bij u in de buurt zodat er altijd aanvullende zorg kan
                      worden georganiseerd
                    </p>
                  </div>
                </Col>
                <Col xs={24} md={6}>
                  <div className="page1-block">
                    <div className="page1-image"></div>
                    <Title level={3}>Tijdregistratie</Title>
                    <p>Altijd inzicht in de geleverde uren zorg</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="home-page-wrapper page2" id="page2">
          <div class="page">
            <Title level={2}>In een notendop</Title>
            <Row className="page2-content">
              <Col className="page2-components" xs={24} md={12}>
                <Title level={3}>Over ons</Title>
                <p>
                  Tibu brengt vraag en aanbod in de zorg bij elkaar. Via ons
                  platform krijg je toegang tot verschillende collectieven van
                  hulpverleners. Zorgstudenten, ervaringsdeskundige,
                  professionele hulpverleners of gewoon iemand uit de buurt?
                  Maak een hulpvraag aan en zoek een passende hulpverlener! Wij
                  werken samen met verschillende collectieven van zorgverleners
                  en -instellingen om altijd de juiste kennis en expertise te
                  kunnen leveren.
                </p>
                <Title level={3}>Kosten?</Title>
                <p>U betaalt alleen voor de geleverde zorg.</p>
              </Col>
              <Col className="page2-product" xs={24} md={12}>
                <div className="product-block">
                  <Row>
                    <Col className="block-image-wrapper right" xs={8} md={8}>
                      <img alt="desktop" src={detam} />
                    </Col>
                    <Col className="block-text-wrapper" xs={16} md={16}>
                      <Title level={4}>De Tamarinde</Title>
                      <p>
                        De Tamarinde is een collectief van HBO en WO
                        zorgstudenten. Alle studenten van De Tamarinde zijn in
                        het bezit van een propedeuse en volgen het interne
                        scholingsprogramma. Daarnaast heeft De Tamarinde en
                        netwerk aan ervaren zorgverleners om zich heen om altijd
                        passende zorg te kunnen organiseren.{" "}
                      </p>
                      <span className="more">stdl.nl</span>
                    </Col>
                  </Row>
                </div>
                <div className="product-block">
                  <Row>
                    <Col className="block-image-wrapper" xs={8} md={8}>
                      <img alt="desktop" src={depotuur} />
                    </Col>
                    <Col className="block-text-wrapper" xs={16} md={16}>
                      <Title level={4}>De Potuur</Title>
                      <p>
                        Ervaringsdeskundigheid in de GGZ is goud waard. Wie kan
                        je beter helpen dan iemand die hetzelfde heeft
                        meegemaakt en zich na zijn of haar herstel heeft
                        gespecialiseerd. De Portuur biedt mensen met
                        ervaringsdeskundigheid een podium om hun ervaring en
                        kennis in de zorg in te zetten.{" "}
                      </p>
                      <span className="more">stdl.nl</span>
                    </Col>
                  </Row>
                </div>
                <div className="product-block">
                  <Row>
                    <Col className="block-image-wrapper right" xs={8} md={8}>
                      <img alt="desktop" src={desktop} />
                    </Col>
                    <Col className="block-text-wrapper" xs={16} md={16}>
                      <Title level={4}>De Linde</Title>
                      <p>
                        De Linde helpt mensen met een verstandelijke beperking
                        bij het zelfstandig wonen. Dat doen zij door de relatie
                        met de cliënt centraal te stellen en dat te combineren
                        medisch wetenschappelijk onderbouwde zorg.
                      </p>
                      <span className="more">stdl.nl</span>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="home-page-wrapper page3" id="page3">
          <div className="page">
            <Title level={2}>Our Team</Title>
            <div>
              <Row>
                <Col className="page3-block" xs={24} md={12}>
                  <span>
                    <div className="page3-img-wrapper">
                      <img alt="desktop" src={walter} />
                    </div>
                    <div className="page3-text-wrapper">
                      <Title level={3}>Walter</Title>
                      <p>Leader of the business brotherhood.</p>
                    </div>
                  </span>
                </Col>
                <Col className="page3-block" xs={24} md={12}>
                  <span>
                    <div className="page3-img-wrapper">
                      <img alt="desktop" src={sabby} />
                    </div>
                    <div className="page3-text-wrapper">
                      <Title level={3}>The Sabby</Title>
                      <p>Leader of the business brotherhood.</p>
                    </div>
                  </span>
                </Col>
                <Col className="page3-block" xs={24} md={12}>
                  <span>
                    <div className="page3-img-wrapper">
                      <img alt="desktop" src={miguel} />
                    </div>
                    <div className="page3-text-wrapper">
                      <Title level={3}>Miguel</Title>
                      <p>Leader of the business brotherhood.</p>
                    </div>
                  </span>
                </Col>
                <Col className="page3-block" xs={24} md={12}>
                  <span>
                    <div className="page3-img-wrapper">
                      <img alt="desktop" src={kulgeek} />
                    </div>
                    <div className="page3-text-wrapper">
                      <Title level={3}>Kulgeek</Title>
                      <p>Leader of the business brotherhood.</p>
                    </div>
                  </span>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
