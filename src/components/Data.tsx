import { FC } from 'react';

import type { hierarchy } from '../types/types';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

export const DataComponent: FC<hierarchy> = ({ data }) => {
  return (
    <>
      <Tooltip id="my-tooltip" />
      {data?.map((item: hierarchy, index: number) => {
        console.log(data[0]?.cityData?.data);
        return (
          <div className="citiy__data" key={index}>
            {!item.data ? (
              <div
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`${data[index]?.cityData?.name} ${data[index]?.cityData?.data} `}
              >
                {item.name}
              </div>
            ) : (
              <div>{item.name}</div>
            )}

            <div>{item.data && <DataComponent data={item.data} />}</div>
          </div>
        );
      })}
    </>
  );
};
