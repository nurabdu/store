import React from 'react';
import { GridList, GridListTile} from '@material-ui/core';
import './App.css';
import dataList from './data.json'

function StandardimageList() {
  < div className='StandardimageList'>
    <GridList cellHeight={200} cols={4} style={{width: 800, height: 600}}>
      {dataList.map((data) => (
        <GridListTile key={data.id}>
          <img src={data.image} alt={data.title}/>
        </GridListTile>
      ))}
    </GridList>
  </div>
}

export default StandardimageList;