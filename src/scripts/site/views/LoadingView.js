import React, { Component } from 'react';
import { Card, Row, Col, Loading, Button } from '../../components';

export default class LoadingView extends Component{
    //初始state
    constructor(props, context){
        super(props, context);
        this.state = {
            type: 'cyclone'
        };

        this.showLoadingHandle = this.showLoadingHandle.bind(this);
    }
    /**
     * 显示Loading.
     * @param  {String} type loading类型
     */
    showLoadingHandle(type){
        this.setState({
            type
        });
        Loading.show();
        setTimeout(() => {
            Loading.hide();
        }, 5000);
    }
    render(){
        return (
            <div>
                <h3>Loading</h3>
                <Card block>
                    <Row>
                        <Col col="3">
                            <Button style="default" onClick={() => this.showLoadingHandle('fountain')}>fountain</Button>
                        </Col>
                        <Col col="3">
                            <Button style="default" onClick={() => this.showLoadingHandle('wave')}>wave</Button>
                        </Col>
                        <Col col="3">
                            <Button style="default" onClick={() => this.showLoadingHandle('pendule')}>pendule</Button>
                        </Col>
                        <Col col="3">
                            <Button style="default" onClick={() => this.showLoadingHandle('cyclone')}>cyclone</Button>
                        </Col>
                    </Row>
                </Card>
                <Loading type={this.state.type} closeable={true}/>
            </div>
        );
    }
}