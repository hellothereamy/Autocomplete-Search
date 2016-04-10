var React = require('react');
var ReactDOM = require('react-dom');
import TextField from 'material-ui/lib/text-field';
import Search from 'react-material-icons/icons/action/search';


const cities = [
 	'san', 'san jose', 'santiago', 'san francisco', 'santa rosa', 'san juan', 'sabadell', 'salamanca', 'salt lake city', 'salinas', 'salem', 'sausalito', 'taipei', 'tel aviv', 'tempe', 'termez', 'temuco', 'tiajuna', 'tieling', 'thousand oaks', 'thunder bay', 'tokyo', 'tulsa'
];

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
	}

};

	
var SearchBar = React.createClass({

	handleQueryChange: function(){
		// Capture user query and query length
		var userQuery= document.getElementById("query").value.trim().toLowerCase();
		var queryLength = userQuery.length;

		// if query length is less than 3, prompt user to type more characters
		if(queryLength<3){
			document.getElementById("searchResult").innerHTML="Please type at least three characters to search.";
		}
		else{
			var found=false;
			document.getElementById("searchResult").innerHTML=" ";
			//traverse through cities array 
			for(var i=0; i<cities.length; i++){
				//substring cities in array to match the length of the user's query
				var temp = cities[i].substring(0,queryLength);
				if( temp === userQuery) {
					found=true;
						document.getElementById("searchResult").innerHTML+="<li>"+cities[i]+"</li>";
				}
				
			}
			if(!found){
				document.getElementById("searchResult").innerHTML="No results found";
			}
		}
	},

	render: function() {
		return (
	      <div id="searchBar" style={StyleSheet.searchBar}>
	      	<Search style={StyleSheet.searchIcon}/>
	      	<TextField
	      		id= "query" style={StyleSheet.query}
	      		onChange={this.handleQueryChange}
	      	 	hintText="Begin typing to search"/>
	      </div>
	    );
	  }
	});

ReactDOM.render(
 	 <SearchBar />,
 	 document.getElementById('app-autocomplete')
);