import { ReactElement } from 'react';

export default (props: any): ReactElement => {
  return (
    <div className={props.light ? 'light' : ''}>
      {format(new Date(props.lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          color: #82fa58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

const format = (t: any) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

const pad = (n: any) => (n < 10 ? `0${n}` : n);
