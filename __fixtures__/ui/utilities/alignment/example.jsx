// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export const Context = props => (
  <div className="nds-align_absolute-center" style={{ height: '5rem' }}>
    {props.children}
  </div>
);

export let examples = [
  {
    id: 'absolute-center',
    label: 'Absolute center',
    element: (
      <div className="nds-align_absolute-center">
        This content will be positioned in the absolute center of its container
      </div>
    )
  }
];
