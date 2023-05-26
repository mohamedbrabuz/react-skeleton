import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

export default function SkeletonPost({theme}) {
  const themeClass = theme || 'light'
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
        <div className='skeleton-article'>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
        <Shimmer />
    </div>
  )
}
