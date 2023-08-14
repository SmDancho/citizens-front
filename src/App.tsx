import { DataComponent } from './components/Data';
import { useAppSelector, useAppDispatch } from './redux/store';
import { getCitizensData } from './redux/data/dataSlice';
import { useState, useEffect } from 'react';
function App() {
  const { data, isLoading } = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const [config, setConfig] = useState<string>(
    "['city', 'district', 'street']"
  );
  const handleConfig = (value: string) => {
    setConfig(value);
  };
  useEffect(() => {
    dispatch(getCitizensData(config));
  }, [config]);
  return (
    <>
      <div className="container">
        <select
          className="city__select"
          name="config"
          onChange={(e) => handleConfig(e.target.value)}
        >
          <option value={"['city', 'district', 'street']"}>
            city, district, street
          </option>
          <option value={"['city', 'street']"}>city, street</option>
          <option value={"['country', 'city', 'district', 'street', 'house']"}>
            country, city, district, street, house
          </option>
        </select>
        {isLoading ? (
          <div className="city__loading">loading...</div>
        ) : (
          <DataComponent data={data} />
        )}
      </div>
    </>
  );
}

export default App;
