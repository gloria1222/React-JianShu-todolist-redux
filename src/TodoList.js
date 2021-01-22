import React from 'react';
import {connect} from 'react-redux';

const TodoList =(props) => {
    return (
        <div>
            <div>
                <input value={props.inputValue} onChange={props.changeInputValue}/>
                <button onClick={props.handleClick}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index)=>{
                        return <li 
                            key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action = {
                type: 'add_item',
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);