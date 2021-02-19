import React, { useEffect } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchSmurfs } from './../actions/index';

const SmurfList = (props) => {
    const isLoading = props.isLoading;
    const fetchError = props.fetchError;

    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    if(props.fetchError) {
        return (
            <center><h1>{props.fetchError}</h1></center>
        );
    };

    if (isLoading) {
        return <center><h1>Loading...</h1></center>;
    }

    return(
        <div className="listContainer">
            {
                props.smurfs.map((smurfInfo) => {
                    return <Smurf key={smurfInfo.id} smurf={smurfInfo}/>
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        fetchError: state.fetchError
    }
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.