import React from 'react'

const LanguageDropdown = ({onChange}) => {
  return (
    <div>
      <select onChange={onChange}>
        <option></option>
        <option value={'en'}>English</option>
        <option value={'ur'}>اردو</option>
      </select>
    </div>
  )
}

export default LanguageDropdown
