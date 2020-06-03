import React, { Component } from 'react';
import { getDataList} from "../../Actions/userActions";
import { connect } from 'react-redux';

class Home extends React.Component {
	

fetchData = (e) => {
 	this.props.getDataList()
}

render() {
      var dataList = this.props.user  && this.props.user.dataList
      console.log(dataList)

	 return (
	     	<div>
                <button className="btn btn-info" onClick={this.fetchData}>Fetch data</button>
                <br />
                <table className="align-items-center table-bordered custom-table" responsive>
                   <tbody>
                     {dataList.length > 0 && dataList.map((cmp, index) => (
                          <tr key={index} >
                              <td> {cmp.id} </td>
                              <td> {cmp.title} </td>
                              <td> {cmp.body} </td>
                           </tr>
                    ))} 
                     {dataList.length == 0 &&  
                        <tr> <td colspan="8"> <b>No any result found </b> </td> </tr>
                      } 
                    </tbody>
                </table>
         	</div>
        )
	}
}



const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDataList: () => dispatch(getDataList()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);