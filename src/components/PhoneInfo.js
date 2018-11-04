import React, { Component } from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        name : '',
        phone:'',
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info
    }
    
    handleRemove = () => {
       this.props.onRemove(this.props.info.id)
    }

    handleToggle = () => {

        const {editing} = this.state;

        // false -> true 
        if(!editing){
        this.setState({
            name: this.props.info.name,
            phone: this.props.info.phone
         })
        }else{
        //true -> false 
        this.props.onUpdate(this.props.info.id,{
            name :this.state.name,
            phone : this.state.phone
        })
        }
        this.setState({
            editing : !this.state.editing
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, phone} = this.props.info;
        const {editing} = this.state;

        const style = { 
            border : '1px solid black',
            padding : '8px',
            margin: '8px',
        }
        
        console.log(name)

        return (
            <div style={style}>
                {
                editing ? (
                    <div>
                        <input 
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name} />
                        <input
                            name='phone'
                            onChange={this.handleChange}
                            value={this.state.phone}/>
                    </div>
                ):(
                    <div>
                    <div><b>{name}</b></div>
                    <div>{phone}</div>
                    </div>
                )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggle}> {editing ? '적용' : '수정' }</button>
                
            </div>
        );
    }
}

export default PhoneInfo;