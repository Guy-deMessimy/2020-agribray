import { Fond, TitleContainer, Logo, Title, SubTitle } from "./style";
import ButtonServices from "../Button"

const Frontpage = () => {
    return (
        <Fond>
            <TitleContainer>
                <Logo src="/photos/agribray-logo.png" alt=""></Logo>
                <Title>Au service de la nature</Title>
                <SubTitle>prestataire agricole depuis 34 ans</SubTitle>
                <ButtonServices/>
            </TitleContainer>
        </Fond> 
    )
}

export default Frontpage