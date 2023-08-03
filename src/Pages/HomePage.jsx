import React from 'react'
import Home from '../Component/Home/Home';
import Numbers from '../Component/Numbers/Numbers';
import About from '../Component/About/About';
import Result from '../Component/Result/Result';
import Helped from '../Component/Helped/Helped';
import EmptyDiv from '../Component/EmptyDiv/EmptyDiv';
import Section from '../Component/Section/Section';
import Testimon from '../Component/Testimon/Testimon';
import Aside from '../Component/Aside/Aside';


export default function HomePage() {
  return (
    <> 
      <Home /> 
      <Numbers />
      <About /> 
      <Result/>
      <Helped/>
      <EmptyDiv/>
      <Section/>
      <Testimon/>
      <Aside/>
    </>
  )
}
