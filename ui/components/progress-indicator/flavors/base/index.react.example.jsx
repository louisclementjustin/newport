/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import SvgIcon from 'app_modules/ui/svg-icon';

//////////////////////////////////////////////
// Partial(s)
//////////////////////////////////////////////

let Progress = props =>
  <div className={ className('slds-progress', props.className) }>
    <ol className="slds-progress__list">
      { props.children }
    </ol>
    <progress className="slds-progress-bar" value={ props.amount || '0' } max="100">{ props.amount + '%' || '0%' }</progress>
  </div>;

let Step = props =>
  <li className={ className('slds-progress__item', props.className, props.active ? 'slds-is-active' : null, props.done ? 'slds-is-done' : null) } role="presentation">
    <button className="slds-button slds-progress__marker" tabIndex={ props.active ? '0' : '-1' }>
      <span className="slds-assistive-text">{ props.children }</span>
    </button>
  </li>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Progress amount="25">
    <Step done>Step 1</Step>
    <Step active>Step 2</Step>
    <Step>Step 3</Step>
    <Step>Step 4</Step>
    <Step>Step 5</Step>
  </Progress>
  // <div className="demo-only">
  //   <div className="slds-wizard" role="navigation">
  //     <ol className="slds-wizard__list">
  //       <li className="slds-wizard__item slds-is-active">
  //         <a href="javascript:void(0);" className="slds-wizard__link">
  //           <span className="slds-wizard__marker"></span>
  //           <span className="slds-wizard__label slds-text-title--caps slds-truncate">Navigation</span>
  //         </a>
  //       </li>
  //       <li className="slds-wizard__item slds-is-active">
  //         <a href="javascript:void(0);" className="slds-wizard__link">
  //           <span className="slds-wizard__marker"></span>
  //           <span className="slds-wizard__label slds-text-title--caps slds-truncate">Actions</span>
  //         </a>
  //       </li>
  //       <li className="slds-wizard__item slds-is-active">
  //         <a href="javascript:void(0);" className="slds-wizard__link">
  //           <span className="slds-wizard__marker"></span>
  //           <span className="slds-wizard__label slds-text-title--caps slds-truncate">Compact Layout</span>
  //         </a>
  //       </li>
  //       <li className="slds-wizard__item">
  //         <a href="javascript:void(0);" className="slds-wizard__link">
  //           <span className="slds-wizard__marker"></span>
  //           <span className="slds-wizard__label slds-text-title--caps slds-truncate">Review</span>
  //         </a>
  //       </li>
  //       <li className="slds-wizard__item">
  //         <a href="javascript:void(0);" className="slds-wizard__link">
  //           <span className="slds-wizard__marker"></span>
  //           <span className="slds-wizard__label slds-text-title--caps slds-truncate">Invite</span>
  //         </a>
  //       </li>
  //     </ol>
  //     <span className="slds-wizard__progress">
  //       <span className="slds-wizard__progress-bar" style={{ width: '50%' }}></span>
  //     </span>
  //   </div>
  // </div>
);
