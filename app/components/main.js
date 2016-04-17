var React = require('react');
var ReactDOM = require('react-dom');
import TextField from 'material-ui/lib/text-field';
import Search from 'react-material-icons/icons/action/search';

var StyleSheet={
	searchBar:{
		margin: "0 auto",
		display:"inline",
		width:"50%"
	},
	query:{
		width:"50%"
	},
	searchIcon:{
		display:"inline",
		height:"24px",
		width:"24px",
		marginRight:"10px"
	},
	center:{
	margin: "0 auto",
	width:"50%",
	textAlign: "center"
}

};

var SearchBar = React.createClass({
	getInitialState: function() {
        return {
        	query:"",
        	matchedCities:[]
        };
      },

     handleQueryChange: function(e){
     	var query = e.target.value;
     	this.matchQuery(query);
			// Capture user query and query length trim spaces and lower case 

		},
	componentDidUpdate: function(){ // no restriction on set state 
		console.log("componentDidUpdate");
	},
	matchQuery: function(query){
		var match = [];
		this.setState({query: query});
		var userQuery= query;
		console.log(userQuery);
		userQuery=userQuery.trim().toLowerCase();
		var queryLength = userQuery.length;
		console.log(userQuery.length);

			// if query length is less than 3, prompt user to type more characters
		if(queryLength<3){
			this.setState({matchedCities:["Please type at least three characters to search."]});
				// console.log(this.state.matchedCities);
		}
		else{
			var found=false;
				// document.getElementById("searchResult").innerHTML=" ";
				//traverse through cities array 
			for(var i=0; i<cities.length; i++){
					//substring cities in array to match the length of the user's query
				var temp = cities[i].substring(0,queryLength);
				if( temp === userQuery) {
					match.push(cities[i]);
					found=true;
				}
			}
			this.setState({matchedCities:match});
			if(!found){
				this.setState({matchedCities: ["No results found"]});
			}
		}
	},
  render: function() {
	return (
		<div>
	      <div id="searchBar" style={StyleSheet.searchBar}>
	      	<Search style={StyleSheet.searchIcon}/>
	      	<TextField
	      		id= "query" style={StyleSheet.query}
	      		onChange={this.handleQueryChange} // only responsible for setting the state 
	      	 	hintText="Begin typing to search"/>
	      </div>
	      <SearchResult matchedCities={this.state.matchedCities}/> 
	    </div>
	     
	);
  }
});	

var SearchResult = React.createClass({
	//print array 
	mapCities: function(item,index){
		console.log(item);
		return (
		<ul>
			<li>{item}</li>
		</ul>
	);

	},
	render:function(){
		return(
			<div id="searchResult">
			 {this.props.matchedCities.map(this.mapCities)}
			</div>
		);
	}


});

var App = React.createClass({

	render:function(){
		return(
			<div> 
				<h1>City Search!</h1>
				<SearchBar/>
			</div>

		);
	}

});

const cities = [
 	'san', 'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
];

ReactDOM.render(
  <App/>, document.getElementById('app-autocomplete'));

