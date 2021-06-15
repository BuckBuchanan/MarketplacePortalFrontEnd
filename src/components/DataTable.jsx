import React from 'react';
import DataTableFunction from './DataTableFunction';
import '../styles/datagrid.css'

const HTMLFormatter = ({ value }) => {
  return <div dangerouslySetInnerHTML={{__html: value}}></div>
};


class DataTable extends React.Component {

  constructor(props) {
    super(props);
    console.log("Row renderer ", props.rowRenderer)

    if (!localStorage.getItem('token')){
      this.state = {
        'rows':[
          { id: 0, title: 'Please Login', complete: 10 },
  
        ],
        'columns': [
          { key: 'id', name: 'Please Login', editable: true },
        ],
        'filters': {},
        'rowRenderer':props.rowRenderer
      };
    }
    else{
      this.state = {
        'rows':[
          { id: 0, title: 'Waiting On Results', complete: 10 },
  
        ],
        'columns': [
          { key: 'id', name: 'Waiting On Results', editable: true },
        ],
        'filters': {},
        'rowRenderer':props.rowRenderer
      };
    }

  }



  componentDidMount() {

  console.log(this.props.url+this.props.api_call)
  fetch(this.props.url+this.props.api_call, {headers: {Authorization: `JWT ${localStorage.getItem('token')}`}}
    )
    .then(response => {
      if (response.status > 400) {
        localStorage.clear();
        window.location.href = '/';
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      if (data.length === 0){
        this.setState({
          columns:[{
            key: 'No data', name:'No data', resizable:true, filterable:true,
            width:200
          }],
          rows:[]
        })
        return;
      }
      let keys =  Object.keys(data['results'][0]);


      let width = 200;
      let list = keys.map(x => {
        return({
          key: x, name:x, resizable:true, filterable:true,
          width:(x.length*10 > width) ? x.length*10 : width,
        });
      });

      list[0]['frozen'] = true;

      for (var i = 0; i < list.length; i++) {
        if (list[i]['key'].endsWith("_link") || list[i]['key'].endsWith("_html")){
          list[i]['formatter'] = HTMLFormatter;
        }
      }

      this.setState({
        rows:data['results'],
        columns:list,
      });
    });
}

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState((state) => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };


  render() {
    return (
      <DataTableFunction
        rows ={this.state.rows}
        columns = {this.state.columns}
        rowRenderer = {this.state.rowRenderer}/>
    );
  }
}

export default DataTable;
