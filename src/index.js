import 'antd/dist/antd.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './background';
import Clock from './clock';
import './index.css';
import LinkList from './linkList';
import reportWebVitals from './reportWebVitals';
import SearchTools from './searchTools';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Background />
    <div className='content'>
      <Clock />
      <SearchTools />
      <LinkList />
    </div>
    <div style={{ zIndex: 10, position: 'absolute', bottom: '0px', position: 'fixed', display: 'flex', width: '100%', justifyContent: 'center', backgroundColor: '#050505' }}>
      <a target="_blank" rel="noopener noreferrer" href='https://beian.miit.gov.cn/#/Integrated/index' style={{ color: '#fff', marginRight: '2%' }} >备案号：豫ICP备2022020856号-1</a>
      <a target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }} href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41072402000315" className='beian-div-a'><img src='http://www.beian.gov.cn/img/new/gongan.png' style={{ height: '15px', width: '15px' }} alt='' />豫公网安备 41072402000315号</a>
    </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();