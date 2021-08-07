import styled from "styled-components";

const PremiumAdsWrapper = styled.div`
    .hr {
        padding: 0;
        margin: 0;
    }
    .static {
        background-color: ${props => props.colors.backgroundColor};
    }
    .olxAds {
        color: ${props => props.colors.color};
    }
    .footerAds{
        background-color: ${props => props.colors.backgroundColor};
    }
    .premium {
        background-color: ${props => props.colors.headTitle};
    }
    .premium img{
        object-fit: cover;
        height: 200px;
    }
    .headButton2 {
        background-color: ${props => props.colors.headButton2};
        color: ${props => props.colors.headTitle};
    }
    .headButton3 {
        background-color: ${props => props.colors.headButton2};
        color: ${props => props.colors.headTitle};
        padding: 10px 50px 10px 50px;
    }
`

export default PremiumAdsWrapper
