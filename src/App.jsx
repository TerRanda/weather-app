import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import Weather from './components/Weather';
function App() {
  const [location, setLocation] = useState(''); // 검색어
  const [weather, setWeather] = useState(null); // 날씨 데이터 null 값이 비었음을 명시적 선언
  const [error, setError] = useState(false);
  // 날씨 요청 함수
  const fetchWeather = () => {
    
    const apiKey = '349d43ee09d264a12a0d49e2bc5b4a0d';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&lang=kr`;
//AJAX 요청
    fetch(url)
      .then(res => res.json())  // json포맷으로 변환
      .then(data => {
        //검색결과가 없을 때
        if(data.cod === '404') {
          setWeather(null);
          setError(true);
          return;
        } 
        setWeather(data);
        console.log(data);
      })
      //에러처리
      .catch(()=>{
        console.log('에러');
      })
  }

 
  //입력함수
  const handleLocationChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
    setError(false);
  }
  //검색버튼 눌렀을 때
  const handleWeatherSearch = (e) => {
    //전송 이벤트 취소(기본 이벤트)
    e.preventDefault();
    fetchWeather();
  }

  return (
    <div className="App">
      <h1>날씨정보</h1>
      <Search
        handleWeatherSearch={handleWeatherSearch}
        location={location}
        handleLocationChange={handleLocationChange}
        error={error}
      />
      <Weather weather={weather}/>
    </div>
  )
}

export default App
