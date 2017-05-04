'use strict';

import './services.scss';

import servicesCtrl from './services.controller';

const services = angular.module('services', []);

services.controller('servicesCtrl', servicesCtrl);

export default services;
