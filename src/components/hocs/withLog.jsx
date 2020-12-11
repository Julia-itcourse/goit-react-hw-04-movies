import React, {Component} from 'react';

const withLog =(WrappedComponent) =>{



    return(
        class WithLog extends Component {

componentDidMount(){
    console.group(`withlogout output ${WrappedComponent.name}`)
    console.log(this.props);
    console.dir("wrapped Componenet", WrappedComponent);
    console.groupEnd();
}

            render (){
                return(
                    <WrappedComponent {...this.props}/>  
                )
            }
        }
    )
}

export default withLog