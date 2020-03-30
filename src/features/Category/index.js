import React from 'react';

import categories from 'core/mocks/categories';

import {
    ColorChoose,
    ColorsWrapper,
    ElementContainer,
    ElementWrapper,
    Footer,
    ImageWrapper,
    InnerElement,
    InnerFooter,
    SizeChoose,
    SizesWrapper,
    Wrapper,
} from './style.module';

const Category = ({ categoryId }) => {
    const category = categories.find((item) => item.id === categoryId);

    return (
        <>
            <h4>{category.title}</h4>
            <Wrapper>
                {category.items.map(({ title, colors, sizes, price, imgUrl }) => (
                    <ElementContainer key={title}>
                        <ElementWrapper>
                            <ImageWrapper imgUrl={imgUrl} />
                            <InnerElement>
                                <h4>Add to cart</h4>
                            </InnerElement>
                            <InnerFooter>
                                <ColorsWrapper>
                                    {colors.map((color, i) => (
                                        <ColorChoose key={i} style={{ backgroundColor: color }}></ColorChoose>
                                    ))}
                                </ColorsWrapper>
                                <SizesWrapper>
                                    {sizes.map((size, i) => (
                                        <SizeChoose key={i}>{size}</SizeChoose>
                                    ))}
                                </SizesWrapper>
                            </InnerFooter>
                        </ElementWrapper>
                        <Footer>
                            <h3>{title}</h3>
                            <h3>{price}</h3>
                        </Footer>
                    </ElementContainer>
                ))}
            </Wrapper>
        </>
    );
};

export default Category;
