import "./style.scss";

import angular from 'angular';
import poker from './poker-controller.js';


export default angular.module('PokerApp', [poker.name]);

