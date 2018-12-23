import React, { Component } from 'react'
import StudentItem from "../StudentItem/studentItem";

class StudentsList extends Component{

    constructor(props) {
        super(props);
    }

    render(){
        let listItems = this.props.students.map((element,index)=>{
            return <StudentItem student={element}
                                key={index}
                                index={index}
                                notifyClick={this.props.itemClick}
                                notifyDelete={this.props.itemDelete}/>
        });


        return(
           <div>
               <ul className='list-group'>
                   {listItems}
               </ul>
           </div>

            );
    }
}
export default StudentsList;