import React from 'react'

function Search(props) {
  const {handleWeatherSearch, location, handleLocationChange, error} = props;
  return (
    <form onSubmit={handleWeatherSearch}>
        <div className="input-group">
          <input type='search' value={location} placeholder='도시이름 입력' required onChange={handleLocationChange} />
          <button className='btn' type='submit'>검색</button>
        </div>
        {
          error ? 
          <div style={{color:'red'}}>올바른 지역명이 아닙니다.</div>
          : null
        }
    </form>
  )
}

export default Search