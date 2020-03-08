import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CssTransition, TransitionGroup, CSSTransition} from 'react-transition-group';
import {v4 as uuid} from 'uuid';

class ShoppingList extends Component{
    state = {
        items : [
            {id: uuid(), name: 'pepe'},
            {id: uuid(), name: 'rober'},
            {id: uuid(), name: 'zapat'},
            {id: uuid(), name: 'quiqu'}
        ]
    }

    render(){
        const { items } = this.state;
        return (
            <Container>
                <Button 
                    color="dark"
                    style={{marginBottom:'2rem'}}
                    onClick={() => {
                            const name = prompt('Enter name');
                            if (name) {
                                this.setState(state => ({
                                    items: [...state.items, { id: uuid(), name}]
                                }));
                            }
                        }}
                    >   
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shooping-list">
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="btn-rmv"
                                        color="danger"
                                        size="sm"
                                        onClick=  { () => {
                                            this.setState(state => ({
                                                items: state.items.filter( item => item.id !== id)
                                            }));
                                        }} 
                                    >&times;</Button>
                                   {name}
                                </ListGroupItem>
                            </CSSTransition>
                     ))}                     
                    </TransitionGroup>
                </ListGroup>
            </Container>
        ); 
    }
}

export default ShoppingList;