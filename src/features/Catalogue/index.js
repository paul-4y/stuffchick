import React from 'react';

import { ElementWrapper, ImageWrapper, InnerElement, Wrapper } from './style.module';

const Catalogue = (props) => (
    <Wrapper>
        {props.catalogue.map((element) => (
            <ElementWrapper key={element.id} to={element.url}>
                <ImageWrapper imgUrl={element.imgUrl} />
                <InnerElement>
                    <h3>{element.title}</h3>
                    <h4>SHop now</h4>
                </InnerElement>
            </ElementWrapper>
        ))}
    </Wrapper>
);

export default Catalogue;
