
import { 
    Mainfooter, 
    Footcontainer, 
    Row, 
    Row2, 
    Col1, 
    Col2, 
    Col3, 
    Col4, 
    Trait, 
    Title, 
    SocialLinks,
    Linkedin,
    Facebook,
    LinkList } from "./style"

const Footer = () => {
    return (
        <Mainfooter>
            <Footcontainer>
                <Row>
                    {/* Column 1 */}
                    <Col1>
                        <Title>Adresse</Title>
                        <Trait></Trait>
                        <p>11 rue du moulin</p>
                        <p>60112 Vrocourt, OISE</p>
                    </Col1>
                    {/*Column 2 */}
                    <Col2>
                        <Title>Horaires bureau</Title>
                        <Trait></Trait>
                        <p>Lundi-Samedi: 08:00 - 18:00</p>
                        <p>Dimanche: fermé</p>
                    </Col2>
                    {/*Column 3 */}
                    <Col3>
                        <Title>Contact info</Title>
                        <Trait></Trait>
                        <p>Phone: 03 44 82 42 45</p>
                        <p>Email: info@agribray.com</p>
                    </Col3>
                    <Col4>
                        <Title>Suivez-nous</Title>
                        <Trait></Trait>
                        <LinkList>
                            <SocialLinks>
                                <Linkedin href="1">
                                    <img src="logo/Linkedin/favicon-32x32.png" alt="toto"></img>
                                </Linkedin>
                            </SocialLinks>
                            <SocialLinks>
                            <Facebook href="2">
                                    <img src="logo/Facebook/favicon-32x32.png" alt="toto"></img>
                                </Facebook>
                            </SocialLinks>
                        </LinkList>
                        
                    </Col4>
                </Row>
                {/* Footer Bottom */}
                <Row2>
                    <p className="text-xs-center"></p>
                    &copy;{new Date().getFullYear} Agribray - All Rights Reserved
                </Row2>
            </Footcontainer>
        </Mainfooter>
    )
}

export default Footer