import React from 'react'
import ProfileHeader from '../../components/Header/ProfileHeader';
import SelectAppointment from '../../components/Profile/SelectAppointment';
import Steps from '../../components/Profile/Steps';

const SelectDate = () => {
  return (

    <div>
      <ProfileHeader/>
      <Steps/>
      <SelectAppointment/>
    </div>
  );

}

export default SelectDate