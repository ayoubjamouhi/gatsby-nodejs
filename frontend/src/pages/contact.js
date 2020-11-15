import React from 'react';
import TestPost from '../components/TestPost';
import Contacts from '../components/Contacts';

export default function Contact(props) {
  console.log(props);
  return (
    <div>
      <Contacts />
      <TestPost />
    </div>
)};