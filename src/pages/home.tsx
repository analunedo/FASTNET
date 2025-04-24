import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/buttons.tsx"
import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import wifi from "../assets/wifi.svg";
import Card from "../components/card.tsx";
import "../styles/solution.css";
import atendimento from "../assets/atendimento.svg";
import nuvem from "../assets/nuvem.svg";

export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={300} height={100} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" handleFunction={() => console.log("teste")} />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>



                </nav>

            </header>
            <section id="hero">
                <span className="desktop-only">
                     <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" /> 
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" /> 
                <div className="container content">
                    <p className="desktop-only">
                        
                    </p>
                    <h1>O MELHOR DA FASTNET PRA VOCÊ!</h1>
                    <p>Conecte-se com a melhor internet do mercado! Alta velocidade, estabilidade e planos sob medida para você navegar sem limites.
                    </p>
                    <div className="flex gap-1">
                        {/* <span><Button text="Cadastre-se" /></span> */}
                        <span className="desktop-only">
                            {/* <Button text="Veja mais" secondary /> */}
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
            <header>
    <span>
        <h2>Internet do seu jeito</h2>
        <span className="desktop-only">
            <h2>
                Sob medida para você
            </h2>
        </span>
    </span>
    <p>
    Aqui na <strong>FastNet</strong>, internet de verdade é prioridade. 
    Alta velocidade, suporte 24h e planos sob medida pra você navegar sem limites.
    </p>
</header>
<section className="even-columns">
    <div className="card">
    <Card 
    icon={atendimento}
    title="Atendimento 24h"
    description="Conte com a gente a qualquer hora, todos os dias."/>
    </div>

    <div className="card">
    <Card 
    icon={wifi}
    title="Qualidade de Rede"
    description="Conexão estável, rápida e sem interrupções."/>
    </div>

    <div className="card">
    <Card 
    icon={nuvem}
    title="Planos Falexíveis"
    description="Escolha o plano ideal pro seu estilo de vida — sem surpresas na fatura."/>
    </div>

</section>
</section>

        </>
    )
}
