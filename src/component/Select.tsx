import React, { Fragment } from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

interface SelectInputPropType {
    width: string | unknown
    setValue: React.Dispatch<React.SetStateAction<string>> 
    valueList?:  {
        label: string;
        value: string;
    }[]
    label?:string
    id?: string
    noLabel?: Boolean
}

interface LabelType {
  htmlFor: string
  className: string
}


const SelectInput = (props:SelectInputPropType) => {
    const { width, valueList, setValue, label, id } = props


    const handleChange = (value: string) => {
      setValue(value)
    };

    return (
    <Fragment>     
      <Select
        id={id}
        defaultValue={valueList && valueList[0].value}
        style={{ width: `${width}`}}
        onChange={handleChange}
        options={[
          {
            label: `${label}`,
            options: valueList,
          }
        ]}
      />
    </Fragment>
    )
}


export default SelectInput;

const Label = styled.span<LabelType>`
  margin-right: 10px;
  
`