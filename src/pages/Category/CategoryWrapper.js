import styled from "styled-components";

const CategoryWrapper = styled.div`
    .location {
        font-size: 12px;
    }
    .product img {
        height: 200px;
        object-fit: cover;
    }
    .shadowBox {
        background-color: ${props => props.colors.headTitle};
    }
`;

export default CategoryWrapper;