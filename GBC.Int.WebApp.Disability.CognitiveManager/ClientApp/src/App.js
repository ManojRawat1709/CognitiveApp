import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import CognitiveDetails from './components/CognitiveDetails';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CognitiveFields from './components/CognitiveFields'
import CognitiveFieldsCompact from './components/CognitiveFieldsCompact'
import CognitiveDetailsHook from './components/CognitiveDetailsHook'
import Model from './components/Model'
import ModelCaller from './components/ModelCaller'
import EnrollmentForm from './components/EnrollmentForm';
import Alert from './components/Alert'
import TestAlert from './components/TestAlert'
import CoginitiveDatabaseReactBootstarp from './components/CoginitiveDatabaseReactBootstarp'
import ModalRB from './components/ModalRB'
import CoginitiveDatabaseFields from './components/CoginitiveDatabaseFields'
import CognitiveDBComp from './components/CognitiveDBComp'
import CognitiveDBCompMUI from './components/CognitiveDBCompMUI'
import ModalMUI from './components/ModalMUI'
import './custom.css'
import RTONumberPlate from './components/RTONumberPlate'


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <RTONumberPlate/>
          //<ModalMUI/>
          //<CognitiveDBComp />
          //<CognitiveDBCompMUI/>
          //<CoginitiveDatabaseFields/>
          //<ModalRB/>
          //<CoginitiveDatabaseReactBootstarp />
          //<TestAlert/>
          //<Alert/>
          //<EnrollmentForm/>
          //<CognitiveDetails />
          //<CognitiveFields/>
          //<CognitiveFieldsCompact/>
          //<CognitiveDetailsHook/>
          //<ModelCaller/>
          //<Model/>
      //<Layout>
      //  <Route exact path='/' component={Home} />
      //  <Route path='/counter' component={Counter} />
      //  <Route path='/fetch-data' component={FetchData} />
      //</Layout>
    );
  }
}
