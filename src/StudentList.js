import React, {Component} from 'react';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputName:'',
            nameList:[],
        }
    }
    handleNameChange=(e)=>{
        e.preventDefault();
        this.setState({inputName:e.target.value});
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        this.setState({nameList:[...this.state.nameList,{name:this.state.inputName}]});   
        this.setState({inputName:''});  
    }
    render(){
        return(
            <div>
                {this.state.nameList.map((s)=>{return(<div key={s.name}>{s.name}</div>)})}
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.inputName} onChange={this.handleNameChange}/>
                    <input type="submit" value="Submit"/>
                </form>
                
            </div>
        );
    };

}
export default StudentList;