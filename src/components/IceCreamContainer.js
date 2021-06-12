import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
	return (
		<div>
			<h2>Number of IceCreams - {props.numOfIceCreams}</h2>
			<button onClick={props.buyIceCream}>Buy IceCream</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfIceCreams: state.IceCream.numOfIceCreams,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyIceCream: () => dispatch(buyIceCream()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
