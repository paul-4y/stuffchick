import React from 'react';
import { connect } from 'react-redux';

import categories from 'core/mocks/categories';
import { addItem } from 'core/store/cart/cart.actions';

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

const Category = ({ categoryId, addItem }) => {
    const category = categories.find((item) => item.id === categoryId);

    return (
        <>
            <h4>{category.title}</h4>
            <Wrapper>
                {category.items.map((item) => (
                    <ElementContainer key={item.title}>
                        <ElementWrapper>
                            <ImageWrapper imgUrl={item.imgUrl} />
                            <InnerElement onClick={() => addItem(item)}>
                                <h4>Add to cart</h4>
                            </InnerElement>
                            <InnerFooter>
                                <ColorsWrapper>
                                    {item.colors.map((color, i) => (
                                        <ColorChoose key={i} style={{ backgroundColor: color }}></ColorChoose>
                                    ))}
                                </ColorsWrapper>
                                <SizesWrapper>
                                    {item.sizes.map((size, i) => (
                                        <SizeChoose key={i}>{size}</SizeChoose>
                                    ))}
                                </SizesWrapper>
                            </InnerFooter>
                        </ElementWrapper>
                        <Footer>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                        </Footer>
                    </ElementContainer>
                ))}
            </Wrapper>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Category);
