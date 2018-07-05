import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 3.2rem;
    margin: 0;
`;

const StyledHeader = styled.div`
    background: #20222b;
    color: white;
    margin-bottom: 4.8rem;
    padding: 1.6rem 0;
`;

const StyledSubtitle = styled.h2`
    color: #a5afd7;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 0;
`;

const Header = (props) => (
    <StyledHeader>
        <StyledTitle>{props.title}</StyledTitle>
        {props.subtitle && <StyledSubtitle>{props.subtitle}</StyledSubtitle>}
    </StyledHeader>
);

Header.defaultProps = {
    title: 'Indecision',
};

export default Header;
