import Omniture from './index';
import React from 'react';

/*
// Root related variables
s.pageName=worldifpage;
s.channel="the_world_if";
s.prop1="the_world_if";
s.server="economist.com";
// Dynamic variables
s.prop14=document.referrer;
s.prop11=<logged in%>; //Same as Economist.com setting
s.prop13=<%customer status%>; //Same as Economist.com setting
s.prop34="econfinal"; // use econmobile for mobile
s.prop40=<%Drupal ID%>; //Same as Economist.com setting
s.prop41 =<%DFP site%>; //Same as Economist.com setting
s.prop42 =<%DFP zone%>; //Same as Economist.com setting
s.prop46=<%MUL Subscription%>; //Same as Economist.com setting

Page related variables
if(worldifpage ==='the-world-if|home'||worldifpage ==='the-world-if|cover')
 {
  s.prop4='channel';
 }
  if(worldifpage ==='the_world_if|article|the_world_if|'+<article headline>'||worldifpage==='the_world_if| growth article|the_world_if|'+<article headline>)
 {
  s.prop4='article';
  s.prop5=<%article headline%>;
 }

*/

export default (
  <Omniture prop4="article" prop5="This is the article headline" />
);