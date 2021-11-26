import React from 'react';
import JSONPretty from 'react-json-pretty';
// can toggle this import on/off to show how 
// theming is supported
import 'react-json-pretty/themes/monikai.css';

export default function PackageParser(props) {
  return (
      <JSONPretty space="4" data={props.packageManifest}></JSONPretty>
  )
}