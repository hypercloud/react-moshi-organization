/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import MoshiOrganization from '../lib/MoshiOrganization';

let data = {
  '@context': 'http://schema.org/',
  '@type': 'Person',
  'name': 'Jane Doe',
  'jobTitle': 'Professor',
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Seattle',
    'addressRegion': 'WA',
    'postalCode': '98052',
    'streetAddress': '20341 Whitworth Institute 405 N. Whitworth'
  },
  'telephone': '(425) 123-4567',
  'url': 'http://www.janedoe.com'
};

ReactDOM.render(
  <MoshiOrganization data={data}/>,
  document.getElementById('app')
);
