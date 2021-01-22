import 'antd/dist/antd.css';
import { Input, Button, List} from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{marginTop:'10px', marginLeft:'10px'}}>
            <div>
                <Input 
                    value={props.inputValue}
                    onChange={props.handleInputChange} 
                    placeholder='todo info' 
                    style={{width:'300px', marginRight:'10px'}}/>
                <Button 
                    onClick={props.handleBtnClick}
                    type="primary">提交</Button>
            </div>
            <List
                style={{width:'300px', marginTop:'10px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI;