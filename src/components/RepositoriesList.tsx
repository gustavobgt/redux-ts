import React from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import 'redux-thunk';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = React.useState('');
  const { searchRepositories } = useActions();
  const { loading, error, data } = useSelector(
    ({ repositories }) => repositories
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((repositorie) => <div key={repositorie}>{repositorie}</div>)}
    </div>
  );
};

export default RepositoriesList;
