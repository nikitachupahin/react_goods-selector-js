import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const Title = () => {
    const title = selectedGood ? (
      <h1 className="title is-flex is-align-items-center">
        {`${selectedGood} is selected`}
        <button
          onClick={() => setSelectedGood(null)}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>
    ) : (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );

    return title;
  };

  const Good = ({ good }) => {
    const el =
      selectedGood === good ? (
        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              onClick={() => setSelectedGood(null)}
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ) : (
        <tr data-cy="Good">
          <td>
            <button
              onClick={() => setSelectedGood(good)}
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      );

    return el;
  };

  return (
    <main className="section container">
      <Title />

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good good={good} />
          ))}
        </tbody>
      </table>
    </main>
  );
};
