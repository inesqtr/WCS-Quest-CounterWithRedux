import React from "react";
import { connect } from "react-redux";
import { counterAdd, counterRemove } from "../actions/actions";

const mapStateToProps = (state) => ({ count: state });

const mapDispatchToProps = (dispatch) => (
    {
        onClickHandler: action => {
            return action === "ADD" ? dispatch(counterAdd) : dispatch(counterRemove);
        }
    }
);

const CounterContainer = ({ count, onClickHandler }) => (
    <>
        <h1>{count}</h1>
        <button onClick={() => onClickHandler("ADD")}>+</button>
        <button onClick={() => onClickHandler("REMOVE")}>-</button>
    </>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);