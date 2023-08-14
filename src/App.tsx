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
  if (isLoading) {
    return <div className="container">loading...</div>;
  }
  return (
    <>
      <div className="container">
        <select name="config" onChange={(e) => handleConfig(e.target.value)}>
          <option value={"['city', 'district', 'street']"}>
            city, district, street
          </option>
          <option value={"['city', 'street']"}>city, street</option>
          <option value={"['country', 'city', 'district', 'street', 'house']"}>
            country, city, district, street, house
          </option>
        </select>
        <DataComponent data={data} />
      </div>
    </>
  );
}

export default App;
