import styled from "styled-components";

const ContainerWrapper = styled.div`
    background-color: ${props => props.colors.body};
    color: ${props => props.colors.color};
    .location {
        font-size: 12px;
    }

    a{
        color: ${props => props.colors.color} !important;
        font-weight: bold;
    }

    .content {
        min-height: 523px;
    }
`;

export default ContainerWrapper;