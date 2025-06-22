import { itemStepMetaData, itemTestMetaData } from '@repo/types'
import React from 'react'

export default function TestItem({item}:{item:itemTestMetaData}) {
  return (
    <div className='flex flex-col text-xs' >
        <div className='flex flex-wrap'>
            <div></div>
            <div className='flex flex-col'>
                <div className='font-bold' >{item.aboutDoes}</div>
                <div>{item.aboutDoes}</div>
            </div>
        </div>

    </div>
  )
}
