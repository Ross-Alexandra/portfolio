import styled from "@emotion/styled";
import { HeroContent } from "./hero-content";
import { layerColor, maxPhoneBreakpoint, maxSmallPhoneBreakpoint, portfolioBackground } from "../../theme";
import { primaryButtonCSS } from "../../elements";
import { ConnectedCupBanner, ExternalLink, NHL22Banner, PickBanBanner, ZotacCupBanner, ePLBanner } from "../../assets";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    .portfolio-page {
        display: grid;
        place-items: center;
        position: relative;

        min-height: 100svh;

        padding: 15px 30px;

        overflow: hidden;

        ::before {
            content: "";
            
            position: absolute;
            inset: 0px;
    
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: fixed;
    
            opacity: 0.35;
            filter: blur(10px);
            z-index: -1;
        }

        @media (max-width: ${maxPhoneBreakpoint}px) {
            padding: 5px;
        }

        h2 {
            font-size: 35px;
        }

        & > div {
            position: relative;

            display: flex;
            flex-direction: column;
            gap: 10px;
            
            width: min-content;
            padding: 15px;
            border-radius: 10px;

            background-image:
                linear-gradient(90deg, ${layerColor}, ${layerColor}),
                linear-gradient(90deg, ${portfolioBackground}, ${portfolioBackground});

            @media (max-width: ${maxPhoneBreakpoint}px) {
                position: relative;
                top: unset;
                left: unset;
                transform: unset;

                max-height: unset;
            }

            h2, h3, p {
                align-self: flex-start;
            }
        }

        .primary-tiles {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            gap: 30px;

            @media (max-width: ${maxPhoneBreakpoint}px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: ${maxSmallPhoneBreakpoint}px) {
                grid-template-columns: 1fr;
            }

            img {
                width: 150px;
                aspect-ratio: 1;
                border-radius: 10px;
            }

            .primary-tile {
                display: flex;
                flex-direction: column;
                align-items: center;

                gap: 5px;
            }

            .tile-info {
                display: flex;
                flex-direction: row;
                width: 100%;

                align-items: center;
                justify-content: space-between;
            }
        }

        a {
            text-decoration: none;
            ${primaryButtonCSS}

            padding: 10px 20px;

            align-self: end;
        }

        .featured-tile {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            gap: 5px;
            
            align-items: center;
        }

        .featured-image {
            img {
                width: 250px;
                aspect-ratio: 1;
                border-radius: 10px;

                display: none;
            }

            .persistent {
                display: unset;
            }

            .hover {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                height: 95%;
                width: unset;
                aspect-ratio: 1;

                z-index: 1;

                @media (max-width: ${maxPhoneBreakpoint}px) {
                    height: unset;
                    width: 95%;
                }
            }

            :hover {
                @media (min-width: ${maxPhoneBreakpoint + 1}px) {
                    img {
                        display: unset;
                    }
                }
            }
        }
    }

    #battlefy::before {
        background-image: url("https://source.unsplash.com/I45hdPF5Na0");
    }
`;

export function Home() {
    return (
        <>
            <HeroContent />

            <Wrapper>
                <div id="battlefy" className='portfolio-page'>
                    <div>
                        <h2>Battlefy</h2>

                        <p>
                            During my time at Battlefy, I had the opportunity to work on several
                            exciting projects which helped enhance the overall experience for
                            our users. Four of my proudest projects include NHL 2022, Zotac Cup,
                            Connected Club Cub, and ePremier League.
                        </p>
                        <div className="primary-tiles">
                            <div className="primary-tile">
                                <img src={NHL22Banner} alt="NHL-2022" />
                                <div className='tile-info'>
                                    <h3>NHL 2022</h3>
                                    <a
                                        href="https://battlefy.com/nhl-2022"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink width={15} height={15} />
                                    </a>
                                </div>
                            </div>
                            <div className="primary-tile">
                                <img src={ZotacCupBanner} alt="Zotac Cup" />
                                <div className='tile-info'>
                                    <h3>Zotac Cup</h3>
                                    <a
                                        href="https://battlefy.com/zotac-cup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink width={15} height={15} />
                                    </a>
                                </div>
                            </div>
                            <div className="primary-tile">
                                <img src={ConnectedCupBanner} alt="Connected Club Cup" />
                                <div className='tile-info'>
                                    <h3>Connected Club Cup</h3>
                                    <a
                                        href="https://battlefy.com/connectedclubcup/home"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink width={15} height={15} />
                                    </a>
                                </div>
                            </div>
                            <div className="primary-tile">
                                <img src={ePLBanner} alt="E Premier League" />
                                <div className='tile-info'>
                                    <h3>ePL</h3>
                                    <a
                                        href="https://e.premierleague.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink width={15} height={15} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='featured-tile'>
                            <h3>Pick Ban System</h3>
                            <p>
                                I also had the opportunity to work on numerous internal projects,
                                the biggest of which was the platform&apos;s Pick Ban system.
                                This system allows tournament organizers to setup a Pick Ban
                                draft for their Valorant tournaments.
                            </p>
                            <div className='featured-image'>
                                <img className='persistent' src={PickBanBanner} alt="Pick Ban" />
                                <img className='hover' src={PickBanBanner} alt="Pick Ban Hover Effect" />
                            </div>
                        </div>
                        <a href="/experience#battlefy">My Time at Battlefy</a>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}
