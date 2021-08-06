import styled from "styled-components";

const SearchWrapper = styled.div`

    .search {
        background-color: ${props => props.colors.inputBg};
        margin-top: 50px;
        border-radius: 10px;
        padding: 40px;

        :placeholder-shown {

        }

        .inputBg {
            background-color: ${props => props.colors.inputBg};
            color: ${props => props.colors.color};
        }

        .boss {
            display: flex;
        }
        .icon, .btn{
        color: ${props => props.colors.color};
        }
    }
`
export default SearchWrapper;