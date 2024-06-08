import React, { useState } from 'react'
import { BasicLayout } from '../../layouts'
import TitleBar from './TitleBar'
import Messages from './Messages';
import MyPets from './MyPets';
import Addpet from './Addpet';
import Navbar from './Headline';

const Profiles = () => {
  const [messages, setMessages] = useState([
    { title: 'Welcome!', body: 'Thank you for joining our platform.', date: '2024-05-25' },
    { title: 'Reminder', body: 'Don’t forget to update your profile.', date: '2024-05-24' },
    // Add more message objects here
  ]);
  const [activeComponent, setActiveComponent] = useState('Messages');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Messages':
        return <Messages messages={messages}/>;
      case 'AddPet':
        return <Addpet />;
      case 'MyPets':
        return <MyPets />;
      default:
        return <MyPets />;
    }
  }
  
  return (
    <div>
        <BasicLayout>
          <TitleBar/>
          <div>
      <Navbar onChangeComponent={setActiveComponent} />
      <div style={{ padding: '20px' }}>
        {renderComponent()}
      </div>
    </div>

        </BasicLayout>
    </div>
  )
}

export default Profiles
