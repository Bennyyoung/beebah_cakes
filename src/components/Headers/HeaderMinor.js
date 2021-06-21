import React, { Component } from "react";
import styled from "styled-components"
import { Link } from "gatsby";

import { ShoppingCart } from 'styled-icons/material/ShoppingCart';

const HeaderMinorStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.main};
    margin: 20px 0;
    border: 4px solid ${props => props.theme.colors.secondaryAccent};

`

const ShopName = styled.h1`
    padding: 20px;
    font-family: Heebo, sans-serif;
    font-size: 2em;
    font-weight: 700;
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const CartSummary = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
    font-weight: bold;
`

class HeaderMinor extends Component {
    state = {
        items: 0
    }

    updateItemTotal = (qty) => {
        this.setState({ items: qty })
    }

    componentDidMount() {
        if (window.Snipcart) {
            //this allows it to work when switching pages
            var count = window.Snipcart.api.items.count();
            this.updateItemTotal(count)

            //this allows it to work when you add or change items
            window.Snipcart.subscribe('cart.closed', () => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            });

            //this allows it to work on refreshing the page
            window.Snipcart.subscribe('cart.ready', (data) => {
                var count = window.Snipcart.api.items.count();
                this.updateItemTotal(count)
            })
        }
    }

    componentWillUnmount () {
        window.Snipcart.unsubscribe('cart.closed');
        window.Snipcart.unsubscribe('cart.ready');
    }
    

    render() {
        return (
            <HeaderMinorStyled>
                <ShopName>
                    <LinkStyled to='/'>
                        {this.props.shopName}
                    </LinkStyled>
                </ShopName>
                <CartSummary className="snipcart-summary">
                    <a href="#" className="snipcart-checkout"> <ShoppingCart size='40px' /></a>
                    <p>{this.state.items} yummy items</p>
                </CartSummary>

            </HeaderMinorStyled>
        )
    }

}

export default HeaderMinor;